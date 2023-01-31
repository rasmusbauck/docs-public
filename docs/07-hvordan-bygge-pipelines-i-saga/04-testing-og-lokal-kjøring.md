# Testing og lokal kjøring av pipelines

## Testing

En grunnleggende test av alle DAGs vil bli kjørt i PRs og før deploy, som vil sjekke at det er gyldig Python-kode og imports. Disse kan kjøres med

```sh
source activate.sh
pytest test_dags.py
```

Andre tester kan legges til i samme mappe som DAGen.

## Kjøre en DAG lokalt

Man kan kjøre en DAG lokalt på to ulike måter, enten ved å kjøre en DAG direkte eller via et lokalt Airflow-miljø.

### Kjøre en DAG direkte

For å kjøre en DAG direkte må man først ha satt opp en lokal Airflow-database:

- Du må ha kjørt `./setup-python.sh` og `source activate.sh` for å ha riktige Python-pakker installert og aktivert.
- Kjør `airflow db init`. Dette vil initialisere en lokal SQLite-database som trengs for å kjøre en DAG.

Nå er du klar til å kjøre en DAG direkte. Vi har laget et wrapper-script du kan bruke som vil bygge og kjøre en DAG:

`./test-dag.sh dags/<team>/<domene>/<dag>.dag.py`

DAGen vil kjøre som din innloggede `gcloud`-bruker.

### Kjøre Airflow lokalt

Du kan kalle `./start-airflow.sh` for å kjøre opp Airflow lokalt (krever Docker og `docker-compose`).

Airflow vil være tilgjengelig på http://localhost:8080, med innlogging brukernavn og passord begge satt til `airflow`.

Det settes opp directory-mapping fra din lokale mappe til Airflow:

- DAGs vil leses fra `build/`-mappa
- Plugins leses fra `plugins/`-mappa

For å kjøre Airflow CLI-kommandoer kan du bruke `npm run airflow <args>` (krever `docker-compose`), eksempelvis:

```shell
npm run airflow dags list
```

### Colima

Hvis du bruker container runtimen Colima på macOS eller Linux isteden for eksempelvis Docker Desktop, må du eksportere socket slik at bibliotek (som pythonbiblioteket) `docker` finner koblingen til den.

```shell
export DOCKER_HOST=unix://$HOME/.colima/default/docker.sock
```

### Bygge og teste DAGs lokalt

Hvis du har Airflow kjørende lokalt, kan du kjøre dine DAGs der.

1. For å slippe å gjenta deg selv kan du sette path til DAGen som en variabel: `export DAG=dags/yggdrasil/oppetid/hendelser.dag.py`
1. Hvis du har en Dockerfile som skal bygges:
   1. Velg deg en unik tag, eksempelvis ditt brukernavn på 6 bokstaver, og sett denne: `export TAG=geisag`
   1. Kjør `python build_docker_images.py $TAG $DAG`
1. Kjør `python build_dags.py [--tag $TAG] STM $DAG`. Dette vil bygge DAGen (evt. med docker-image-tag) og erstatte templated fields. Du kan se resultatet i `build/`.
1. Din lokale Airflow vil automatisk plukke opp DAGs som ligger i `build/`-mappa.
1. Så lenge du er logget inn i `gcloud` med `gcloud auth application-default login` vil Airflow bruke dine credentials. Sørg for at du har rettigheter til å impersonate project service accounten for DAGens prosjekt.

Dersom din DAG ikke dukker opp, kan du feilsøke:

```shell
npm run airflow dags list-import-errors
```

Du kan også kjøre DAGs direkte for testing. Merk at du må prefikse med team og domene, slik IDen ser ut i Airflow. Du må også sende med en dato for intervallstart; denne vil som regel ikke bli brukt, men er påkrevd.

```shell
npm run airflow dags test yggdrasil_oppetid_hendelser 2022-01-01
```

Du vil da få log output rett i terminalen, som kan være nyttig for feilsøking.
