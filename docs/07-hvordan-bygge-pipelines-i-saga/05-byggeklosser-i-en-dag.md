
# Flere detaljer om å bygge DAGs

## Byggeklosser i en DAG

En DAG består av én eller flere tasks. Tasks kan lages på to ulike måter:

- [Operators](https://airflow.apache.org/docs/apache-airflow/stable/concepts/operators.html)
- [Taskflow](https://airflow.apache.org/docs/apache-airflow/stable/tutorial/taskflow.html)

### Operators

Det finnes et utall ferdiglagde operatorer. Noen nyttige eksempler er:

- [BigQueryInsertJobOperator](https://airflow.apache.org/docs/apache-airflow-providers-google/stable/operators/cloud/bigquery.html)
- [SimpleHttpOperator](https://airflow.apache.org/docs/apache-airflow-providers-http/stable/operators.html#simplehttpoperator)

Det finnes eksempler på [innebygde operators](https://airflow.apache.org/docs/apache-airflow/stable/concepts/operators.html) og [operators for GCP](https://airflow.apache.org/docs/apache-airflow-providers-google/stable/operators/cloud/index.html).

### Make_pipeline

Vi har i tillegg laget en wrapper `make_pipeline` som automatisk setter inn nødvendige variabler for tilgangsstyring.

Her er et eksempel som kjører en spørring mot BigQuery:

```python
from airflow import models
from airflow.providers.google.cloud.operators.bigquery import BigQueryInsertJobOperator
from pipeline import SagaContext, make_pipeline

# Pipelinen defineres i en funksjon som får inn en `SagaContext` med nyttig info
def pipeline(context: SagaContext):

    create_corrected_stenginger = BigQueryInsertJobOperator(
        task_id="create_corrected_stenginger",
        configuration={
            "query": {
                # Her leses en SQL fil inn, den må ligge i samme mappe
                "query": "{% include '04_create_table_corrected_stenginger.sql' %}",
                "useLegacySql": False,
            }
        },
        location="EU",
    )


# Disse variablene kan brukes inne i SQL-filer med Jinja
default_args = {
    "dataset": "curated",
    "nvdbDataset": "saga-nvdb-prod-vlmh.consumer"
    # Flere variabler vil automatisk settes inn her, se docs nedenfor
}


make_pipeline(pipeline, schedule_interval='@daily', default_args=default_args)
```

Vi bruker [Jinja templates](https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html) for å inkludere SQL-filer og sette inn variabler i disse.

### Scheduling og `start_date`

[Vi anbefaler at du leser om scheduler i airflow først](https://airflow.apache.org/docs/apache-airflow/1.10.1/scheduler.html).

Når du lager en DAG kan du bestemme hvor ofte den skal kjøres ved å definere et `schedule_interval`. Dette kan gjøres på mange måter. Her er noen eksempler:

- `None`: Kan bare trigges manuelt
- `@once`: Kjøres kun automatisk ved første deploy
- `@hourly`: Kjøres hver time
- `@daily`: Kjøres daglig
- [CRON-uttrykk](https://crontab.guru/): Feks `5 4 * * *`: Det femte minutt, den fjerde timen (04:05), hver dag

`make_pipelines` har en default `start_date` satt til **2022-01-01**. Dette har som regel lite å si, med mindre din pipeline eksplisitt benytter [`data_interval_start` og/eller `data_interval_end`](https://airflow.apache.org/docs/apache-airflow/stable/faq.html#what-does-execution-date-mean). Dersom du likevel ønsker å overskrive `start_date`, kan du sende med dette som argument til `make_pipeline`.

Noen ting å være klar over:

- `start_date` bør ikke endres; dette vil skape en helt ny DAG.
- Hvis `start_date` er i fortiden, vil Airflow kjøre én gang for nyeste intervall. Dersom man ønsker å ta igjen alle kjøringer siden `start_date` kan man sette `catchup=True`.
- DAGen vil kjøre ved slutten av hvert intervall.
- DAGen vil kjøre øyeblikkelig hvis `start_date` er i fortiden. Ønsker man å vente med første kjøring til midnatt, sett for eksempel `start_date` til dagens dato og `schedule_interval='@daily'`.


### Hooks

Operatorer er som regel bygd opp av [Hooks](https://airflow.apache.org/docs/apache-airflow/stable/concepts/connections.html#hooks): et høynivå interface mot en integrasjon.

#### BigQuery

Hooks kan feks brukes for å forenkle tilkobling til BigQuery hvis man vil skrive ren Python-kode (uten `BigQueryInsertJobOperator`):

```python
from airflow.providers.google.cloud.hooks.bigquery import BigQueryHook
from airflow.decorators import task
from pipeline import SagaContext, make_pipeline

def pipeline(context: SagaContext):

    @task
    def copy_table():
        hook = BigQueryHook(impersonation_chain=context.impersonation_chain)
        bq = hook.get_client(project_id=context.project_id, location="EU")

        bq.copy_table(
            source_project_dataset_table=f"{context.project_id}.curated.stenginger",
            destination_project_dataset_table=f"{context.project_id}.curated.stenginger_copy")

    copy_table()

make_pipeline(pipeline)
```

En kan også bruke BigQuery-klienten direkte fra et steg om man feks ønsker resultatet returnert som en pandas dataframe.

```python
from airflow.decorators import task
from pipeline import make_pipeline, SagaContext
from airflow.providers.google.cloud.hooks.bigquery import BigQueryHook

def pipeline(context: SagaContext):

    @task
    def run_query():
        hook = BigQueryHook(impersonation_chain=context.impersonation_chain)
        client = hook.get_client(project_id=context.project_id, location="EU")
        df = client.query(some_query).to_dataframe()

make_pipeline(pipeline)
```

#### Google Cloud Storage (GCS)

Det finnes også hooks som tilbyr enklere lesing og skriving til og fra GCS.

```python
from airflow.decorators import task
from pipeline import make_pipeline, SagaContext
from airflow.contrib.hooks.gcs_hook import GoogleCloudStorageHook

def pipeline(context: SagaContext):

    @task
    def download_file():
        filename = 'file.csv'
        gcs_hook = GoogleCloudStorageHook(impersonation_chain=context.impersonation_chain)
        gcs_hook.download(f'svv-{context.project_id}', filename)
        content = pd.read_csv(filename, header=None)

make_pipeline(pipeline)
```

### Modularisering av Python-kode

Hvis du ønsker å splitte opp koden i flere Python-filer, må du importere dem basert på hvor de ligger i `dags/`, eksempelvis hvis de ligger i `utils.py` i samme mappe som en DAG i `dags/yggdrasil/oppetid`:

```python
from yggdrasil.oppetid.utils import do_stuff
```

[Apache airflow har skrevet om beste praksis for modules](https://airflow.apache.org/docs/apache-airflow/stable/modules_management.html#best-practices-for-module-loading).

## Automatikk og variabler

DAGer i `dags/` vil prosesseres ved bygging, og resultatet vil bli plassert i `build/`. Følgende transformasjoner gjøres:

- `__PROJECT_ID__` og enkelte andre variabler byttes rått ut med sine respektive verdier, se lenger ned for flere variabler.
- `make_pipeline` får automatisk sendt inn argumentene `project_id`, `project_base` og `team`, som brukes til å bygge opp `SagaContext` som sendes til pipelinen.
- `make_pipeline` vil automatisk sette en del `default_args` for DAGen. F.eks `project_id`, nødvendige parametere for tilgangsstyring mot GCP og Slack alerts til teamets Slack-kanal
  - Som standard vil alle kall til GCP gjøres med prosjektets service account `project-service-account@<projectId>.iam.gserviceaccount.com`.
  - `default_args` vil også sendes inn some `user_defined_macros` hvis man bruker [Jinja templates](https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html).
- Andre argumenter til `make_pipeline` vil bli sendt videre til [`DAG`-konstruktøren](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/dag/index.html#airflow.models.dag.DAG).

### Saga-variabler

Her er en liste over våre egne variabler du kan bruke:

| Variabel           | Beskrivelse                                                                                                                                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__PROJECT_ID__`   | Erstattes med STM project ID for PRer, og PROD project ID ved merging til main. Leses fra `config.yml` i DAGens mappe.                                                                                                                                    |
| `__IMAGE__`        | Dersom det finnes en Dockerfile i DAGens mappe, vil denne settes til imaget, inkludert tag, eksempelvis. `europe-docker.pkg.dev/saga-artifacts/docker/dags/yggdrasil/oppetid:pr-13`.                                                                      |
| `__PROJECT_BASE__` | Project ID uten saga-prefix, miljø eller random suffix. For `saga-oppetid-stm-6cgp` vil `project_base` være `oppetid`. Vil matche navnet på katalogen som DAGene ligger i. Brukes for å referere til for eksempel service accounts eller GCP connections. |

Disse vil erstattes automatisk i DAGen.

### Hemmeligheter

Hemmeligheter skal aldri ligge i klartekst i kode. En god løsning på dette er Secret Manager som kjører i alle team sine prosjekter. Airflow kan enkelt settes opp til å hente hemmeligheter derfra ved hjelp av en `SecretsManagerHook`, som kan slå de opp med navn (`secret-name` i eksempelet under).

```python
from airflow.utils.log.secrets_masker import mask_secret
from airflow.providers.google.cloud.hooks.secret_manager import SecretsManagerHook

def pipeline(context: SagaContext):

    @task
    def fetch_secret_from_secret_manager():

        secret_manager = SecretsManagerHook(impersonation_chain=context.impersonation_chain)

        # Slå opp hemmelighet.
        secret = secret_manager.get_secret(secret_id='secret-name', project_id=context.project_id)

        # Masker den, i tilfelle den blir logget.
        mask_secret(secret)
```

Eksempelet viser også hvordan funksjonen `mask_secret(secret)` kan brukes for å påse at hemmeligheten blir maskert om den ved et uhell skulle bli logget mens DAGen kjører.

Ta kontakt med Yggdrasil om du lurer på hvordan du kan vedlikeholde hemmeligheter i ditt team sine prosjekter.

### Annen service account og tilgangsstyring

Hvis du ønsker å bruke en annen service account i ditt prosjekt, må du manuelt tildele `roles/iam.serviceAccountTokenCreator`-rollen for denne SAen til Pipeline-prosjektets project SA:

```shell
gcloud iam service-accounts add-iam-policy-binding my-service-account@my-project.iam.gserviceaccount.com \
  --project my-project \
  --member project-service-account@saga-pipelines-stm.iam.gserviceaccount.com \
  --role roles/iam.serviceAccountTokenCreator
```

Dette må gjøres separat for `saga-pipelines-stm` og `saga-pipelines-prod`.

Deretter må man sende med denne service accounten som `impersonation_chain` i GCP-operatoren:

```python
    create_corrected_stenginger = BigQueryInsertJobOperator(
        task_id="create_corrected_stenginger",
        configuration={...},
        impersonation_chain="my-service-account@my-project.iam.gserviceaccount.com"
    )
```

## Tilbakemeldinger

Si fra på [#saga-support på Slack](https://vegvesen.slack.com/archives/C03LGD7TM5Z) hvis noe er uklart eller mangler, så skal vi forsøke utvide dokumentasjonen så snart vi kan.
