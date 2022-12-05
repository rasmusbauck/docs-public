# Veglenker med fylke (med DBT)

[Du kan se kildekoden til pipelinen her.](https://github.com/svvsaga/saga-pipelines/blob/main/dags/yggdrasil/examples/veglenker_med_fylke-dbt.dag.py)

Denne pipelinen gjør det samme som den rene SQL-varianten, men bruker [dbt](https://docs.getdbt.com) for å enklere definere avhengigheter mellom data, illustrere hvordan dataen flyter ([lineage](https://en.wikipedia.org/wiki/Data_lineage)), kjøre datatester og enklere opprette tabeller med statisk data (i dette tilfellet fylker).

[Her kan du lese mer om dbt.](https://docs.getdbt.com)

## Hvordan bruker man dbt i Airflow?

For å få automatisk autentisering mot sitt prosjekt kan man bruke `CloudRunOperator` for å kjøre dbt. Det krever at man har:

- Satt opp en Dockerfile i samme mappe som DAGen, som er basert på imaget `europe-docker.pkg.dev/saga-artifacts/docker-public/dbt-base`, ferdig med `gcloud` og `dbt-bigquery` installert
  - Dockerfila må kopiere over `dbt/`-mappa som du har lagt f.eks. i samme mappe som DAGen
  - Hvis man bruker dbt-pakker må man kjøre `dbt deps` i Dockerfila, slik at avhengigheter er ferdig installert når dbt kjører
  - Denne Dockerfila er et godt utgangspunkt:

```dockerfile
FROM europe-docker.pkg.dev/saga-artifacts/docker-public/dbt-base
COPY ./dbt /dbt
WORKDIR /dbt
RUN dbt deps
ENTRYPOINT $CMD
```

- Kall `CloudRunOperator` med kommandoen du vil kjøre. For å sende med riktig prosjekt kan du bruke `context.project_id` og definere en `var('project_id')` i `dbt/profiles.yml`

```python
from cloud_run_operator import CloudRunOperator
from pipeline import SagaContext, make_pipeline

def pipeline(context: SagaContext):
  dbt_run = CloudRunOperator(
        task_id="dbt_run", cmd='dbt run --vars {"project_id":"%s"}' % context.project_id)

make_pipeline(pipeline)
```

`profiles.yml` er der man definerer tilkoblinger til datalager, prosjekt og annen oppsett for dbt. Et eksempel på `profiles.yml` kan se slik ut:

```yml
examples:
  target: release
  outputs:
    # Denne profilen kan brukes ved å sende med '--vars {"project_id":"<project ID>"}' til dbt-kommandoene.
    release:
      type: bigquery
      project: "{{ var('project_id') }}"
      dataset: internal
      location: EU
      method: oauth
      threads: 4
      job_execution_timeout_seconds: 300
```

Er du interessert i å vite mer? [Ta kontakt med Yggdrasil på #saga-support!](https://vegvesen.slack.com/archives/C03LGD7TM5Z)
