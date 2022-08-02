"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[320],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=u(r),g=a,m=k["".concat(l,".").concat(g)]||k[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1901:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="Kostnader og budsjett",u={unversionedId:"utvikling-paa-saga/kostnader-og-budsjett",id:"utvikling-paa-saga/kostnader-og-budsjett",title:"Kostnader og budsjett",description:"For mange av tjenestene p\xe5 GCP betaler man for forbruk. Eksempler:",source:"@site/docs/03-utvikling-paa-saga/03-kostnader-og-budsjett.md",sourceDirName:"03-utvikling-paa-saga",slug:"/utvikling-paa-saga/kostnader-og-budsjett",permalink:"/docs-public/utvikling-paa-saga/kostnader-og-budsjett",draft:!1,editUrl:"https://github.com/svvsaga/docs-public/edit/main/docs/03-utvikling-paa-saga/03-kostnader-og-budsjett.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Detaljert om tilganger",permalink:"/docs-public/utvikling-paa-saga/tilgangsgrupper/detaljert"},next:{title:"Hvordan f\xe5 data inn i Saga",permalink:"/docs-public/utvikling-paa-saga/hvordan-faa-data-inn-i-saga"}},d={},p=[{value:"Budsjett",id:"budsjett",level:2},{value:"Hvordan kan man se hvor mye penger man har brukt?",id:"hvordan-kan-man-se-hvor-mye-penger-man-har-brukt",level:3},{value:"Varslinger",id:"varslinger",level:4},{value:"Hva skjer n\xe5r budsjettet er n\xe5dd?",id:"hva-skjer-n\xe5r-budsjettet-er-n\xe5dd",level:3},{value:"Hva betyr det at prosjektet blir deaktivert?",id:"hva-betyr-det-at-prosjektet-blir-deaktivert",level:3}],k={toc:p};function g(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kostnader-og-budsjett"},"Kostnader og budsjett"),(0,o.kt)("p",null,"For mange av tjenestene p\xe5 GCP betaler man for forbruk. Eksempler:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sp\xf8rringer i BigQuery (EU-multiregion): $5 per TB prosessert, f\xf8rste TB per m\xe5ned er gratis."),(0,o.kt)("li",{parentName:"ul"},'Lagring i BigQuery: $2 per 100 GB lagret i "active storage", $1 per 100 GB i "long-term storage". F\xf8rste 10 GB per m\xe5ned er gratis.')),(0,o.kt)("p",null,"Spesielt VMer kan fort bli kostbare:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 stk VM av typen ",(0,o.kt)("inlineCode",{parentName:"li"},"e2-standard-4")," i ",(0,o.kt)("inlineCode",{parentName:"li"},"europe-west3")," har 4 CPU-kjerner og 16GB RAM, og koster $126 per m\xe5ned.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/pricing"},"Se Googles dokumentasjon for mer info om priser.")),(0,o.kt)("h2",{id:"budsjett"},"Budsjett"),(0,o.kt)("p",null,"For at man ikke skal g\xe5 p\xe5 en smell - enten pga. ukritisk bruk av ressurser, eller dersom uvedkommende skulle f\xe5 tak i en privatn\xf8kkel og spunnet opp mange nye ressurser - er alle GCP-prosjekter p\xe5 Saga tilknyttet et budsjett."),(0,o.kt)("p",null,"Budsjettet er som standard satt til ",(0,o.kt)("strong",{parentName:"p"},"$1000 per prosjekt per m\xe5ned"),". Dersom budsjettet overskrides med 100%, det vil si at man har brukt over $2000, blir prosjektet automatisk deaktivert."),(0,o.kt)("h3",{id:"hvordan-kan-man-se-hvor-mye-penger-man-har-brukt"},"Hvordan kan man se hvor mye penger man har brukt?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'P\xe5 velkomstsiden til prosjektet ditt kan du g\xe5 til "Dashboard":\n',(0,o.kt)("img",{alt:"Velkomstsiden",src:r(6176).Z,width:"1272",height:"460"})),(0,o.kt)("li",{parentName:"ol"},'P\xe5 dashboardet skal du kunne se en widget med navn "Billing", som viser forbruk for innev\xe6rende m\xe5ned:\n',(0,o.kt)("img",{alt:"Billing widget",src:r(1442).Z,width:"1265",height:"552"}))),(0,o.kt)("p",null,"Du kan ogs\xe5 klikke deg inn p\xe5 denne for \xe5 se detaljert kostnadsinformasjon."),(0,o.kt)("h4",{id:"varslinger"},"Varslinger"),(0,o.kt)("p",null,"N\xe5r man har n\xe5dd enkelte terskler for budsjettbruk (50%, 70% og 100%) vil man f\xe5 beskjed om dette:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Personlige prosjekter for utviklere og datavitere vil gi varsel til den enkeltes e-postadresse."),(0,o.kt)("li",{parentName:"ul"},"Team-eide prosjekter vil f\xe5 sendt en mail til deres ",(0,o.kt)("inlineCode",{parentName:"li"},"#[team]-alerts")," Slack-kanal p\xe5 Saga-slacken.")),(0,o.kt)("p",null,'I tillegg kan man holde et \xf8ye med "Billing"-widgeten p\xe5 dashboardet.'),(0,o.kt)("h3",{id:"hva-skjer-n\xe5r-budsjettet-er-n\xe5dd"},"Hva skjer n\xe5r budsjettet er n\xe5dd?"),(0,o.kt)("p",null,"Budsjetter i GCP har i utgangspunktet kun rapporteringsfunksjon; ingen funksjonalitet blir deaktivert direkte som f\xf8lge av at et budsjett er n\xe5dd."),(0,o.kt)("p",null,'Vi har derfor bygd en "Billing Watchdog": En Cloud Function som f\xe5r kontinuerlig oppdatert budsjettinformasjon for alle prosjekter, og n\xe5r et prosjekt n\xe5r 200% av sitt budsjett, stenges det ned, og frakobles billing-accounten.'),(0,o.kt)("h3",{id:"hva-betyr-det-at-prosjektet-blir-deaktivert"},"Hva betyr det at prosjektet blir deaktivert?"),(0,o.kt)("p",null,'N\xe5r et prosjekt stenges ned vil det ikke lenger v\xe6re mulig \xe5 benytte ressurser i det prosjektet, eller opprette nye ressurser. Prosjektet vil\xa0ogs\xe5 st\xe5 som "slettet" i GCP.'),(0,o.kt)("p",null,"Prosjektet vil v\xe6re tilgjengelig for gjenoppretting i 30 dager, men merk at ",(0,o.kt)("strong",{parentName:"p"},"noen ressurser, som Storage Buckets og Pub/Sub, vil kunne slettes mye tidligere"),". ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#shutting_down_projects"},"Les mer om stengte prosjekter hos GCP"),"."),(0,o.kt)("p",null,"For \xe5 f\xe5 gjenopprettet stengte prosjekter, ta kontakt p\xe5 ",(0,o.kt)("a",{parentName:"p",href:"https://vegvesen.slack.com/archives/C03LGD7TM5Z"},"#saga-support p\xe5 Slack"),"."))}g.isMDXComponent=!0},6176:function(e,t,r){t.Z=r.p+"assets/images/billing-1-1f754981426f3a842e6f643edf116e10.png"},1442:function(e,t,r){t.Z=r.p+"assets/images/billing-2-6d9c553569ebbcbd1f2da537dcc1fc6e.png"}}]);