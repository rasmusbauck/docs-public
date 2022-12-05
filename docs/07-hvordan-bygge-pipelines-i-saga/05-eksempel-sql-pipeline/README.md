# Eksempel på en SQL-pipeline i Airflow

Vi har laget en eksempelpipeline som henter et utvalg veglenker fra NVDB og legger til fylke og region for disse, basert på veglenkenes geometri.

Denne pipelinen finnes i to utgaver:

- [veglenker_med_fylke.dag.py (krever GitHub-innlogging)](https://github.com/svvsaga/saga-pipelines/blob/main/dags/yggdrasil/examples/veglenker_med_fylke.dag.py) - En ren Airflow-pipeline som bruker `BigQueryInsertJobOperator` for å kjøre spørringer.
  - [Her kan du lese mer om detaljer for denne.](eksempel-sql-pipeline/veglenker-med-fylke)
- [veglenker_med_fylke_dbt.dag.py (krever GitHub-innlogging)](https://github.com/svvsaga/saga-pipelines/blob/main/dags/yggdrasil/examples/veglenker_med_fylke_dbt.dag.py) - En pipeline basert på [dbt](https://docs.getdbt.com/docs/introduction) for å definere modeller og sammenhenger mellom disse.
  - [Her kan du lese mer om dbt-pipelinen.](eksempel-sql-pipeline/veglenker-med-fylke-dbt)
