# Orkestrering & Airflow

Når data gjennomgår flere transformasjonssteg er det fort gjort å miste oversikten. For å unngå dette bør man ta i bruk en strukturert løsning for å koble transformasjoner sammen. Denne prosessen kalles "orkestrering".

Saga tilbyr en ferdig oppsatt orkestreringstjeneste via [Apache Airflow](https://airflow.apache.org/docs/apache-airflow/stable/concepts/overview.html), kalt [Cloud Composer](https://cloud.google.com/composer/docs/composer-2/composer-overview) i GCP.

![En DAG i Airflow](https://airflow.apache.org/docs/apache-airflow/stable/_images/edge_label_example.png)
_figur: eksempel på en DAG i Airflow_

Airflow er en plattform som lar deg bygge og kjøre _workflows_. En workflow er representert som en _DAG (Directed Acyclic Graph)_, og består av _tasks_ definert i rekkefølge og potensielt med avhengigheter mellom hverandre.

[Se den offisielle dokumentasjonen for grundigere informasjon.](https://airflow.apache.org/docs/apache-airflow/stable/concepts/overview.html)

## Saga Pipelines

Vi har laget et GitHub-repo [saga-pipelines](https://github.com/svvsaga/saga-pipelines) der alle DAGs ligger. Her finner du dokumentasjon på hvordan man lager og deployer en pipeline, samt eksisterende pipelines man kan bruke som utgangspunkt.

### Tilbakemeldinger

Si fra på [#saga-support på Slack](https://vegvesen.slack.com/archives/C03LGD7TM5Z) hvis noe er uklart eller mangler, så skal vi forsøke utvide dokumentasjonen så snart vi kan.
