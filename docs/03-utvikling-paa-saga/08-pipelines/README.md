# Data pipelines

Vi bruker begrepet "pipeline" om en prosess der data flyter fra ett sted via et eller flere steg til et annet sted. Dette kan bety ren innhenting av rådata, transformering til et dataprodukt, eller begge deler.

# Extract, Load, Transform

På Saga bruker vi en metode kalt "Extract, Load, Transform" (ELT) for å innhente og prosessere data.

![ETL vs. ELT](https://media.striim.com/wp-content/uploads/2021/03/10234532/Infographic-Option-4-2.png)
_kilde: https://www.striim.com/blog/etl-vs-elt-differences_

I tradisjonelle datavarehus brukte man ofte "Extract, Transform, Load" (ETL), som innebærer at data ble transformert før det havnet i datavarehuset. Det sparer plass, men gjør det også vanskeligere å jobbe med rådata.

De fleste moderne skydataløsninger bruker i stedet ELT, der rådata lastes inn i skyen og transformeres/prosesseres videre derfra.

Vi skal nå se på hva dette betyr for Saga og hvordan de ulike stegene kan implementeres.

## Extract & Load = Ingest

Data må hentes ut fra interne systemer og lastes inn i Saga. Dette kan skje ved at en pipeline på Saga tar kontakt og ber om data (pull-basert), eller at Saga har satt opp et mottak som systemet kan sende data til (push-basert).

Denne prosessen, som innebærer både "extract" og "load"-stegene, kalles "data ingestion", eller bare "ingest", og ender med at rådata er tilgjengelig på Saga, typisk i Google Cloud Storage eller i BigQuery.

[Les mer om generiske ingest pipelines](01-ingest.md)

## Transform

Når rådata er tilgjengelig på Saga, kan den transformeres og kombineres med andre data for å lage nye dataprodukter. Denne prosessen kalles "transform".

### Orkestrering & Airflow

Når transformering har mange steg er det ofte behov for å få oversikt over hele prosessen samlet. Dette kalles "orkestrering". Vi tilbyr orkestrering på Saga via verktøyet [Apache Airflow](https://airflow.apache.org/), som på GCP leveres som [Cloud Composer](https://cloud.google.com/composer/docs).

[Les mer om orkestrering med Airflow her.](../../07-hvordan-bygge-pipelines-i-saga/README.md)

### DBT

Dersom all transformasjonen i en pipeline gjøres via SQL, kan man med fordel benytte [dbt](https://docs.getdbt.com/docs/introduction), enten alene eller sammen med Airflow. Data Build Tool (dbt) er et verktøy som hjelper deg å lage robuste og gjenbrukbare SQL pipelines.

Her kommer det mer informasjon om dbt. Si fra på [#saga-support på Slack](https://vegvesen.slack.com/archives/C03LGD7TM5Z) hvis dette er viktig for deg, så skal vi forsøke utvide informasjonen så snart vi kan.
