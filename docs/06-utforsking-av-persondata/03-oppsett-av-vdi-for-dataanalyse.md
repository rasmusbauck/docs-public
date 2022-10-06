# Oppsett av VDI for dataanalyse

Som standard har VDI-er ganske begrenset med programvare egnet for dataanalyse. I skyen anbefaler vi ofte at folk bruker Google Colab eller andre tjenester for kjøring av [Jupyter Notebooks](https://jupyter.org/). For å slippe å forholde seg til mange ulike verktøy anbefaler vi også kjøring av notebooks på din VDI. Det kan gjøres gjennom programvaren Miniconda, som er en mindre versjon av Anaconda, som gjør det enkelt å jobbe med analyse av data i python.

## Installere Miniconda

Siste versjon av Miniconda for Windows (64-bit) kan lastes ned fra https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links

Miniconda er godkjent for bruk i VDI, noe som gjør at den kan installeres og kjøres som din egen bruker, forutsatt at du installerer programmet i mappen installasjonen foreslår som standard. Følg disse stegene for å installere Miniconda:

- Kjør installasjonsfilen `Miniconda3-latest-Windows-x86_64.exe`
- På siden "Select Installation Type", velg å installere programmet for `Just me (recommended)`
- På siden "Choose Install Location", fortsett med standardvalget `C:\Users\<din bruker>\Miniconda3`
- På resten av sidene kan du også fortsette med standardvalget

Deretter kan du starte programmet `Anaconda Powershell Prompt (Miniconda3)` fra startmenyen. Hvis du ikke finner det i listen over nylig installert programvare, vil det ligge i mappen `Anaconda 3 (64-bit)`.

Når kommandolinjen er klar, er du klar til å benytte Miniconda. Kjør så denne kommandoen for å oppdatere til de siste pakkene conda har å by på:

```shell
conda update -n base -c defaults conda
```

## Lage et conda miljø

Conda anbefaler bruk av "miljøer" for forskjellige analyser en jobber med for å samle pakker og deres avhengigheter. Slik kan relaterte pakker for en analyse oppdateres sammen uten å påvirke analyser gjort i andre miljøer. Ved bruk av miljøer kan også forskjellige versjoner av samme pakke være installert på samme tid, så lenge de er installert i forskjellige miljøer. En kan også velge å bruke andre versjoner av python per miljø, om noen pakker man bruker krever spesielle versjoner av python.

Lag et nytt miljø med python 3.9 med følgende kommando

```shell
conda create -n <navn på ditt miljø> python=3.9
```

Aktiver miljøet

```shell
conda activate <navn på ditt miljø>
```

## Installere JupyterLab

Etter du har laget et nytt miljø og aktivert det kan du installere JupyterLab, slik at du kan bruke notebooks ved å kjøre følgende kommando.

```shell
conda install jupyterlab
```

Når pakken er installert kan JupyterLab startes med å skrive følgende kommando.

```shell
jupyter lab
```

Deretter kan man jobbe med notebooks rett i nettleseren.

## Lage en notebook

For å lage en notebook må du navigere til din egen brukers hjemmemappe, `C:\Users\<din bruker>\`, i mappestrukturen til venstre i nettleservinduet som åpnes.

Deretter kan du klikke på `Python 3 (ipykernel)`, under feltet notebooks, for å lage en notebook du kan jobbe med analysen i.

## Installere pakker

For å installere python-pakker du ønsker å dra nytte av i din analyse kan du stort sett bare kjøre `conda install <pakke>`. I de tilfeller der pakkene ikke ligger i de vanlige pakkebrønnene conda leter i, kan du gjøre et søk på [Anaconda pakkesøk](https://anaconda.org/search?q=geopandas) for å finne ut hvordan du kan installere pakken.

## Tilkobling til database fra notebook

Når man har conda kan man installere [Oracles open source driver](https://github.com/oracle/python-oracledb/) som gjør det enkelt å koble til databaser fra en notebook. Dette kan du gjøre med følgende kommando

```shell
conda install -c conda-forge oracledb
```

Da kan spørringer gjøres fra en notebook med følgende python-kode. Lagre passordet ditt i minnet i notebooken

```python
import getpass
password = getpass.getpass("Ditt databasepassord:")
```

Kjør deretter spørringer mot databasen med oracledb-pakken.

```python
import oracledb
connection = oracledb.connect(user="<din bruker>",
                              password=password,
                              dsn="<hostnavn>.vegvesen.no:<port>/<databasenavn>.vegvesen.no")

sql = """
  select * from <din bruker>.<din tabell>
"""

with connection.cursor() as cursor:
    for result in cursor.execute(sql):
        print(result)
```

Ved hjelp av pakken `pandas` kan det se slik ut. Da vil du få resultatet direkte i en dataframe du kan jobbe videre med.

```python
import pandas as pd
dataframe = pd.read_sql(sql, connection)
dataframe
```

## Lese filer og data fra nettverksdisk

Jupyter lab kan også lese filer fra dine delte disker. Om du har behov for å lese eller skrive filer i en mappe du har tilgang til på en delt nettverksdisk må du på Windows passe på å bruke en "raw string literal", i form av en `r` foran filstien. Dette gjør at omvendte skråstreker som Windows bruker i filstier ikke tolkes feil.

Med pandas kan lesing fra en csv-fil på en delt disk se slik ut

```python
import pandas as pd
pd.read_csv(r"<disk>:\Delt\Mappe\csv-fil.csv")
```

Filstrukturen som dukker opp til venstre i nettleservinduet kan bare vise filer fra disken du står i når du kjører kommandoen `jupyter lab`. Om du trenger å se filer fra den delte disken i filstrukturen må du starte `jupyter lab` fra en kommandolinje der du har navigert til mappen som har filene med kommandoen `cd <mappe>`.

## Lukking av jupyter lab

Når du er ferdig å bruke jupyter lab kan den lukkes med menyvalget `File -> Shut down`.

## Feilsøking

### Noen pakker er "blokkert for gruppepolicy"

Ta gjerne kontakt med oss om du opplever at pakker du forsøker å installere feiler med følgende melding

```
Dette programmet er blokkert for gruppepolicy. Kontakt systemansvarlig for mer informasjon.
```

Om dette gjelder pakker du tenker mange analytikere kan være interessert i å bruke kan det være de kan unntas for denne policien slik at de også blir tilgjengelig for andre.

# Nyttige ressurser

- [Anaconda pakkesøk](https://anaconda.org/search?q=)
- [Conda cheat sheet](https://conda.io/projects/conda/en/latest/user-guide/cheatsheet.html)
