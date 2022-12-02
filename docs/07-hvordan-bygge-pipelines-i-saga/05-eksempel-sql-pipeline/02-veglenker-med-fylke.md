# Veglenker med fylke (uten DBT)

[Du kan se kildekoden til pipelinen her.](https://github.com/svvsaga/saga-pipelines/blob/main/dags/yggdrasil/examples/veglenker_med_fylke.dag.py)

Denne pipelinen bruker operatorene `BigQueryCreateEmptyDatasetOperator` og `BigQueryInsertJobOperator` for å sørge for at to datasett `internal` og `curated` blir oprettet, og utfører deretter noen spørringer for å lage data og sammenstille disse.

Er du interessert i å vite mer? [Ta kontakt med Yggdrasil på #saga-support!](https://vegvesen.slack.com/archives/C03LGD7TM5Z)
