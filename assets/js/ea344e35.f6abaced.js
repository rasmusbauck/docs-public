"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[368],{3905:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return k}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},g=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=d(t),k=a,m=u["".concat(s,".").concat(k)]||u[k]||p[k]||i;return t?n.createElement(m,o(o({ref:r},g),{},{components:t})):n.createElement(m,o({ref:r},g))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9858:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={},s="Analyse i BigQuery",d={unversionedId:"bigquery/README",id:"bigquery/README",title:"Analyse i BigQuery",description:"BigQuery er GCP sin SQL-kompatible database/datavarehus for effektiv analyse, selv n\xe5r datamengdene blir store. Du jobber typisk i BigQuery Console, men det er ogs\xe5 mulig \xe5 gj\xf8re sp\xf8rringer b\xe5de fra kommandolinjen med bq-klienten, eller fra f.eks. Jupyter Notebook.",source:"@site/docs/04-bigquery/README.md",sourceDirName:"04-bigquery",slug:"/bigquery/",permalink:"/docs-public/bigquery/",editUrl:"https://github.com/svvsaga/docs-public/edit/main/docs/04-bigquery/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Utvikling p\xe5 Saga",permalink:"/docs-public/utvikling-p\xe5-saga/"},next:{title:"Bruk av BigQuery",permalink:"/docs-public/bigquery/bruk-av-bigquery"}},g={},p=[{value:"N\xe5r b\xf8r du bruke BigQuery?",id:"n\xe5r-b\xf8r-du-bruke-bigquery",level:2},{value:"Prismodell",id:"prismodell",level:2},{value:"Kolonnebasert lagring",id:"kolonnebasert-lagring",level:2}],u={toc:p};function k(e){var r=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"analyse-i-bigquery"},"Analyse i BigQuery"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"BigQuery")," er GCP sin SQL-kompatible database/datavarehus for effektiv analyse, selv n\xe5r datamengdene blir store. Du jobber typisk i ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"BigQuery Console"),", men det er ogs\xe5 mulig \xe5 gj\xf8re sp\xf8rringer b\xe5de fra kommandolinjen med ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/quickstarts/load-data-bq"},"bq-klienten"),", eller fra f.eks. ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/visualize-jupyter"},"Jupyter Notebook"),"."),(0,i.kt)("h2",{id:"n\xe5r-b\xf8r-du-bruke-bigquery"},"N\xe5r b\xf8r du bruke BigQuery?"),(0,i.kt)("p",null,"BigQuery er et godt valg n\xe5r du \xf8nsker \xe5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Kj\xf8re analyser p\xe5 st\xf8rre mengder strukturerte data."),"\nBigQuery lar deg gj\xf8re sp\xf8rringer p\xe5 petabytes med data. Prosesseringstiden er i stor grad begrenset av effektiviteten til sp\xf8rringene du skriver heller enn tiden det tar \xe5 kverne gjennom store mengder data. Det som er viktig \xe5 v\xe6re klar over er at ",(0,i.kt)("em",{parentName:"p"},"man betaler for mengden data som prosesseres"),", og ikke kj\xf8retid eller ressursbruk som kanskje hadde v\xe6rt \xe5 forvente.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Sammenstille ulike datasett."),"\nSelv om BigQuery ikke st\xf8tter prim\xe6r- og fremmedn\xf8kler slik som tradisjonelle SQL-databaser gj\xf8r, egner den seg godt for rask sammenstilling av data fra forskjellige kilder, ogs\xe5 for store mengder data. Dette kan gj\xf8res ved \xe5 bruke ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," p\xe5 verdier, f.eks. tidspunkt, for \xe5 sammenligne data p\xe5 tvers av tabeller. Her m\xe5 man v\xe6re spesielt oppmerksom p\xe5 om felter i datagrunnlaget kan endre innhold over tid, selv om de representerer det samme.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dele strukturert data."),"\nBigQuery egner seg veldig godt til deling av strukturert og veldokumentert data, p\xe5 et velkjent format, som er enkelt \xe5 konsumere for andre mottakere. Ved \xe5 ha fokus p\xe5 \xe5 benytte de innebygde datatypene der det gir mening, som f.eks. ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE")," og ",(0,i.kt)("inlineCode",{parentName:"p"},"GEOGRAPHY"),", lettes bruk og sammenstilling av data betraktelig for andre konsumenter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Benytte SQL-kompetanse."),"\nFor \xe5 sp\xf8rre ut data fra tabeller og views i BigQuery benytter man Standard SQL. Her er eksisterende SQL-kompetanse i stor grad overf\xf8rbar, i tillegg til ekstra funksjonalitet som tilbys, f.eks. for GIS-operasjoner p\xe5 geografiske data. Databasen har ogs\xe5 klientbiblioteker i ulike spr\xe5k for de som \xf8nsker \xe5 skrive applikasjoner som aksesserer data: Python, Java, Go, C#, PHP, Ruby, and Node.js.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tilgang p\xe5 avanserte analytiske funksjoner."),"\nDatabasen har god st\xf8tte for avanserte analytiske funksjoner som kan v\xe6re nyttige i analyser av data, som f.eks. ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"SUM()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY_AGG()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTITION BY")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"LEAD()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LAG()")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST_VALUE()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST_VALUE()")," og ",(0,i.kt)("inlineCode",{parentName:"p"},"ANY_VALUE()")," for \xe5 nevne noen.\nSe ogs\xe5 ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_analytic_functions"},"oversikten over tillgjengelige funksjoner")," og ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/analytic-function-concepts"},"Googles egen forklaring av analytiske konsepter"),"."))),(0,i.kt)("p",null,"Noen ting BigQuery -ikke- kan/b\xf8r brukes til er:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ustrukturert data - bruk heller GCS eller Datastore."),"\nFor ustrukturerte data som \xf8nskes lagret p\xe5 fil er GCS \xe5 foretrekke, mens Datastore er et godt alternativ som dokumentlager (NOSQL).\nSelv om det er mulig \xe5 mate ustrukturerte data som JSON inn i BigQuery og sp\xf8rre p\xe5 de, vil vi anbefale \xe5 benytte strukturerte data i den grad det er mulig. Dette fordi dypt n\xf8stede JSON-strukturer i enkelte tilfeller krever un\xf8dvendig mye innsats for \xe5 f\xe5 spurt ut riktig, med kombinasjon av kryssing av eksisterende rader og bruk av ",(0,i.kt)("inlineCode",{parentName:"li"},"UNNEST()")," som ikke n\xf8dvendigvis er intuitivt for nye brukere."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transaksjonell/operasjonell data - bruk heller PostgreSQL."),"\nSt\xf8tten for transaksjoner i databasen har inntil nylig v\xe6rt veldig begrenset. Det foreg\xe5r derimot til stadighet forbedringer som kontinuerlig rulles ut, b\xe5de mtp featuresett og tilgjengelige SQL-operasjoner. Tidlig i april 2022 er ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/scripting#transactions"},"BigQuery-st\xf8tten for transaksjoner i \u201cpre-GA\u201d"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Relasjonelle data og data som trenger indekser - bruk heller PostgreSQL."),"\nBigquery st\xf8tter ikke prim\xe6r- og fremmedn\xf8kler og de garantier de kan gi, ei heller indekser for raskere s\xf8k og oppslag. Om dette er funksjonalitet du har bruk for vil vi heller anbefale PostgreSQL eller lignende.\nDerimot er st\xf8tten for sammenstilling av store mengder data fortsatt god, feks ved bruk av ",(0,i.kt)("inlineCode",{parentName:"li"},"JOIN"),". Tabeller i BigQuery kan ogs\xe5 b\xe5de ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/clustered-tables"},"clustres")," og ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/partitioned-tables"},"partisjoneres"),", som kan bidra til \xe5 \xf8ke ytelsen p\xe5 sp\xf8rringer og f\xf8re til besparelser ved at de underliggende data samlokaliseres."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Caching - bruk heller Memorystore og/eller Redis."),"\nDirekteoppslag p\xe5 enkeltrader er ikke noe BigQuery er spesielt godt egnet til. Her finnes det mye bedre valg i andre teknologier, som f.eks. Memorystore og/eller Redis.\nBigQuery-databasen i sin ",(0,i.kt)("em",{parentName:"li"},"kolonnebaserte")," natur gj\xf8r at alle oppslag du gj\xf8r mot en kolonne vil m\xe5tte hente alle data for den valgte kolonnen (med mindre clustering eller partisjonering er i spill)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hurtig endrende sanntidsdata - bruk heller PostgreSQL eller Datastore."),"\nBigQuery har to m\xe5ter \xe5 laste inn data p\xe5: batch jobs og streaming. Batch jobs passer for engangs eller periodisk innlasting av store datasett, mens streaming kan brukes for sanntidsdata. P\xe5 grunn av databasens h\xf8ye skriveytelse ved streaming av sanntidsdata har den begrensninger n\xe5r det kommer til \xe5 operere p\xe5 data som nylig er satt inn p\xe5 denne m\xe5ten. Du kan ikke umiddelbart endre eller slette rader som streames inn til BigQuery. Har du slike behov er det derfor bedre \xe5 vurdere PostgreSQL eller Datastore.")),(0,i.kt)("p",null,"Se ogs\xe5 ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/introduction"},"Googles introduksjon til BigQuery"),"."),(0,i.kt)("h2",{id:"prismodell"},"Prismodell"),(0,i.kt)("p",null,"N\xe5r man gj\xf8r sp\xf8rringer mot BigQuery betaler man for ",(0,i.kt)("em",{parentName:"p"},"mengden data sp\xf8rringen prosesserer"),", heller enn kj\xf8retetid og ressursbruk."),(0,i.kt)("p",null,"Editoren i ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"BigQuery i Cloud Console")," som kan brukes til \xe5 utforme og kj\xf8re SQL-sp\xf8rringer gir et anslag p\xe5 hvor mye data en sp\xf8rring kommer til \xe5 prosessere f\xf8r den kj\xf8res. Denne funksjonaliteten kan v\xe6re grei \xe5 holde et \xf8ye med f\xf8r sp\xf8rringer kj\xf8res! Om du har flere sp\xf8rringer i samme vindu kan du markere den sp\xf8rringen du \xf8nsker \xe5 se st\xf8rrelsesestimatet for."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BigQuery sp\xf8rring estimert kostnad",src:t(9501).Z,width:"838",height:"192"})),(0,i.kt)("p",null,"Per april 2022 betaler man $5 per prosesserte Terrabyte (TB) med data i EU-regionen (",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/pricing/#on_demand_pricing"},"Kilde"),")."),(0,i.kt)("p",null,"For data som lagres over tid betaler man ~$20 per TB per m\xe5ned for tabeller og partisjoner som er skrevet til de siste 90 dager, og ~$10 per TB per m\xe5ned for de som blir skrevet sjeldnere til (",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/pricing/#storage"},"Kilde"),")."),(0,i.kt)("h2",{id:"kolonnebasert-lagring"},"Kolonnebasert lagring"),(0,i.kt)("p",null,"BigQuery databasen er ",(0,i.kt)("em",{parentName:"p"},"kolonnebasert"),", noe som betyr at det er veldig mye \xe5 spare p\xe5 \xe5 utelate kolonner du ikke har bruk for fra sp\xf8rringer, f.eks. store geografikolonner, og ikke alltid direkte g\xe5 for ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT *"),". Dette er fordi data for hver kolonne ligger lagret sammen, heller enn rad for rad slik som man kanskje er vant med fra tradisjonelle SQL databaser."),(0,i.kt)("p",null,"Det betyr ogs\xe5 at kolonnen i sin helhet m\xe5 hentes om den sp\xf8rres p\xe5, med mindre ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/clustered-tables"},"clustering")," eller ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/partitioned-tables"},"partisjonering")," er i bruk, selv om sp\xf8rringen f.eks. har en ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),"-clause eller andre mekanismer for filtrering av enkeltrader."),(0,i.kt)("p",null,"At de underliggende dataene ligger lagret samlokalisert per kolonne er en av grunnene til at denne typen databaser passer s\xe5 godt til analytiske oppgaver der det er h\xf8ye krav til rask prosessering av queries."))}k.isMDXComponent=!0},9501:function(e,r,t){r.Z=t.p+"assets/images/query-estimert-kostnad-9b4af04c0da379913dad3dac13bfe3db.png"}}]);