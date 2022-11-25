# Hvordan bygge pipelines i Saga

En pipeline er en prosess der data flyter fra ett sted via et eller flere steg til et annet sted. Dette kan for eksempel være ren innhenting av rådata, transformering av data fra en form til en annen eller sammenstilling av flere datakilder.

Når man bygger pipelines med flere transformasjonssteg er det fort gjort å miste oversikten. For å unngå dette bør man ta i bruk en strukturert løsning for å koble transformasjoner sammen. Denne prosessen kalles orkestrering. En orkestreringsløsning har tre hovedfunksjoner:

- **Samlende funksjon** – samle alle pipelines på ett sted
- **Beskrivende funksjon** – pipelinen kan visualiseres som en graf av steg som skal kjøres
- **Kjøre stegene på riktig måte til riktig tid** - løsningen tar seg av tidsplanlegging, rekkefølge, omprøving, o.l.

Saga tilbyr en ferdig oppsatt orkestreringstjeneste basert på [Cloud Composer](https://cloud.google.com/composer/docs/composer-2/composer-overview), som er GCP sin tjeneste for [Apache Airflow](https://airflow.apache.org/docs/apache-airflow/stable/concepts/overview.html).

![Et eksempel på en pipeline i Airflow](img/pipeline_example.png)
_Figur: Eksempel på hvordan en pipeline visualiseres i Airflow_

Dette kapittelet handler i hovedsak om hvordan bygge pipelines i Airflow. Om du vil lese mer om ulike typer pipelines har vi skrevet [en side om dette her.](/utvikling-paa-saga/pipelines)

## Hvordan gå frem for å bygge pipelines i Saga

Følg stegene under dersom du har tenkt å bygge pipelines i Saga. Merk at det går an å trykke på flere av stegene i figuren.

```mermaid
graph TD
  A(<u>Ta kontakt med Yggdrasil</u>) --> |Yggdrasil kobler prosjektet ditt til Airflow|B
  click A href "https://vegvesen.slack.com/archives/C03LGD7TM5Z" "Åpne #saga-support i Slack" _blank
	B(<u>Sjekk ut `saga-pipelines` repo</u>) --> C
  click B href "https://github.com/svvsaga/saga-pipelines" _blank
  C(Lag en DAG) --> D
	C --> E
  D(<u>Test DAGen lokalt</u>)
  click D "https://github.com/svvsaga/saga-pipelines#kj%C3%B8re-airflow-lokalt" _blank
  E(Lag en pull request så DAGen kjører i <u>Saga Pipelines STM</u>) --> |Yggdrasil godkjenner din PR|F
  click E href "https://console.cloud.google.com/composer/environments/detail/europe-west1/saga-pipelines-stm-composer/dags?project=saga-pipelines-stm" _blank
  F(DAGen blir deployet til <u>Saga Pipelines PROD</u>)
  click F href "https://console.cloud.google.com/composer/environments/detail/europe-west1/saga-pipelines-prod-composer/dags?project=saga-pipelines-prod" _blank
```

## Saga Pipelines

Vi har laget et GitHub-repo [saga-pipelines](https://github.com/svvsaga/saga-pipelines) hvor koden for alle pipelines i Saga skal ligge, med mindre [pipelinen ikke egner seg for Airflow.](https://airflow.apache.org/docs/apache-airflow/stable/index.html#why-not-airflow) Dersom du mistenker at din pipeline ikke egner seg for Airflow, [ta gjerne kontakt med oss](https://vegvesen.slack.com/archives/C03LGD7TM5Z) for å diskutere hvordan pipelinen kan bygges.

Du kan se ditt teams kjørende pipelines her:

🚧 [Pipelines i STM](https://bba5347ed7ee4031a042db3c1ddc8410-dot-europe-west1.composer.googleusercontent.com/) &nbsp;&nbsp; 🏁 [Pipelines i PROD](https://317df360d876468ba7f411edbec769e1-dot-europe-west1.composer.googleusercontent.com/)

## Tilbakemeldinger

Si fra på [#saga-support på Slack](https://vegvesen.slack.com/archives/C03LGD7TM5Z) hvis noe er uklart eller mangler, så skal vi forsøke utvide dokumentasjonen så snart vi kan.