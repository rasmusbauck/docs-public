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

```
conda update -n base -c defaults conda
```

## Lage et conda miljø

Conda anbefaler bruk av "miljøer" for forskjellige analyser en jobber med for å samle pakker og deres avhengigheter. Slik kan relaterte pakker for en analyse oppdateres sammen uten å påvirke analyser gjort i andre miljøer. Ved bruk av miljøer kan også forskjellige versjoner av samme pakke være installert på samme tid, så lenge det er i forskjellige miljøer. En kan også velge å bruke andre versjoner av python per miljø, om noen pakker man bruker krever spesielle versjoner av python.

Lag et nytt miljø med python 3.9 med følgende kommando

```
conda create -n <navn på ditt miljø> python=3.9
```

Aktiver miljøet

```
conda activate <navn på ditt miljø>
```

## Installere JupyterLab

Etter du har laget et nytt miljø og aktivert det kan du installere JupyterLab, slik at du kan bruke notebooks ved å kjøre følgende kommando.

```
conda install jupyterlab
```

Når pakken er installert kan JupyterLab startes med å skrive følgende kommando.

```
jupyter lab
```

Deretter kan man jobbe med notebooks rett i nettleseren.

## Lage en notebook

For å lage en notebook må du navigere til din egen brukers hjemmemappe, `C:\Users\<din bruker>\`, i mappestrukturen til venstre i nettleservinduet som åpnes.

Deretter kan du klikke på `Python 3 (ipykernel)` for å lage en notebook du kan jobbe med analysen i.

## Installere pakker

For å installere python-pakker du ønsker å dra nytte av i din analyse kan du stort sett bare kjøre `conda install <pakke>`. I de tilfeller der pakkene ikke ligger i de vanlige pakkebrønnene conda leter i, kan du gjøre et søk på [Anaconda pakkesøk](https://anaconda.org/search?q=geopandas) for å finne ut hvordan du kan installere pakken.

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
