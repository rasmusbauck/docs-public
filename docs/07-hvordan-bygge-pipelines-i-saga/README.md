# Hvordan bygge pipelines i Saga

En pipeline er en prosess der data flyter fra ett sted via et eller flere steg til et annet sted. Dette kan for eksempel være ren innhenting av rådata, transformering av data fra en form til en annen eller sammenstilling av flere datakilder.

Når man bygger pipelines med flere "transformasjonssteg" er det fort gjort å miste oversikten. For å unngå dette bør man ta i bruk en strukturert løsning for å koble transformasjoner sammen. Denne prosessen kalles orkestrering. En orkestreringsløsning har tre hovedfunksjoner:

- **Samlende funksjon** – samle alle pipelines på ett sted
- **Beskrivende funksjon** – pipelinen kan visualiseres som en graf av steg som skal kjøres
- **Kjøre stegene på riktig måte til riktig tid** - løsningen tar seg av tidsplanlegging, rekkefølge, omprøving, o.l.

Saga tilbyr en ferdig oppsatt orkestreringstjeneste basert på [Cloud Composer](https://cloud.google.com/composer/docs/composer-2/composer-overview), som er GCP sin tjeneste for [Apache Airflow](https://airflow.apache.org/docs/apache-airflow/stable/concepts/overview.html). Bildet under viser hvordan en orkestreringspipeline kan se ut.

![Et eksempel på en pipeline i Airflow](img/visualisering-av-pipeline-i-airflow.png)
_Figur: Eksempel på hvordan en pipeline visualiseres i Airflow_

For å komme i gang med å lage pipelines, [gå til neste side](03-hvordan-lage-pipelines.md).