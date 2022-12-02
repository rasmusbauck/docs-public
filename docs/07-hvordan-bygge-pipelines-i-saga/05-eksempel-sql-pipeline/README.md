# Eksempel på en SQL-pipeline i Airflow

Vi har laget en eksempel pipeline som henter et utvalg veglenker fra NVDB og legger til fylke og region for disse, basert på veglenkenes geometri.

Denne pipelinen finnes i to utgaver:

- [veglenker_med_fylke.dag.py](https://github.com/svvsaga/saga-pipelines/blob/main/dags/yggdrasil/examples/veglenker_med_fylke.dag.py) - En ren Airflow-pipeline som bruker `BigQueryInsertJobOperator` for å kjøre spørringer.
  - [Her kan du lese mer om detaljer for denne.](02-veglenker-med-fylke.md)
- [veglenker_med_fylke_dbt.dag.py](https://github.com/svvsaga/saga-pipelines/blob/main/dags/yggdrasil/examples/veglenker_med_fylke_dbt.dag.py) - En pipeline basert på [dbt](https://docs.getdbt.com/docs/introduction) for å definere modeller og sammenhenger mellom disse.
  - [Her kan du lese mer om dbt-pipelinen.](03-veglenker-med-fylke-dbt.md)
