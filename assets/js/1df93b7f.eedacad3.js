"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[237],{864:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(7294),n=a(2164),r=a(9960);const i={features:"features_t9lD",gettingStarted:"gettingStarted_ekrB"},l=(e,t,a)=>{const s=2e-5*a;t.save(),t.globalCompositeOperation="lighter",t.clearRect(0,0,e.width,e.height),t.translate(e.width/2,e.height/2);for(let r=0;r<3;r++){let a;0===r&&(a="#F39200"),1===r&&(a="#DADAD9"),2===r&&(a="#434F55");for(let i=0;i<e.shapes.length;i++){let l;t.save(),l=i%2==0?(s-.01*r-(e.shapes.length-e.shapes[i].i)/e.shapes.length)%1:(s+.01*r+(e.shapes.length-e.shapes[i].i)/e.shapes.length)%1,l=0===(n=Math.abs(l))?0:1===n?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2;let m=0,c=0;l<.25?(c=o.map(l,0,.25,0,e.size),m=o.map(l,0,.25,0,0)):l>=.25&&l<.5?(c=o.map(l,.25,.5,e.size,e.size),m=o.map(l,.25,.5,0,e.size)):l>=.5&&l<.75?(c=o.map(l,.5,.75,e.size,0),m=o.map(l,.5,.75,e.size,e.size)):(c=o.map(l,.75,1,0,0),m=o.map(l,.75,1,e.size,0)),t.fillStyle=a,t.beginPath(),t.arc(e.shapes[i].x+c,e.shapes[i].y+m,e.size/3+r,0,2*Math.PI,!1),t.fill(),t.restore()}}var n;return t.restore(),s};class o{static norm(e,t,a){return(e-t)/(a-t)}static lerp(e,t,a){return(a-t)*e+t}static map(e,t,a,s,n){return this.lerp(this.norm(e,t,a),s,n)}static clamp(e,t,a){return Math.min(Math.max(e,t),a)}static distance(e,t,a,s){const n=a-e,r=s-t;return Math.sqrt(n*n+r*r)}static randomRange(e,t){return e+Math.random()*(t-e)}static randomInt(e,t){return Math.floor(e+Math.random()*(t-e+1))}static randomDist(e,t,a){let s=0;for(let n=0;n<a;n++)s+=this.randomRange(e,t);return s/a}static degreesToRads(e){return e/180*Math.PI}static radsToDegrees(e){return 180*e/Math.PI}static roundToPlaces(e,t){const a=Math.pow(10,t);return Math.round(e*a)/a}static roundNearest(e,t){return Math.round(e/t)*t}}function m(e){let{className:t}=e;const a=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=a.current,t=e.getContext("2d"),s=(e=>{const t={width:e.width,height:e.height,shapes:new Array,size:50,num:10,maxDist:0},a=t.num*t.size/2-t.size/2;for(let s=0;s<t.num;s++)for(let e=0;e<t.num;e++){const n=t.size*s-a,r=t.size*e-a,i={y:n,x:r,d:Math.sqrt(r*r+n*n),a:Math.atan2(n,r),i:s*t.num+e};t.maxDist=Math.max(i.d,t.maxDist),t.shapes.push(i)}return t})(e);let n;const r=e=>{l(s,t,e),n=window.requestAnimationFrame(r)};return r(0),()=>{window.cancelAnimationFrame(n)}}),[l]),s.createElement("canvas",{className:"animation",ref:a,width:"600",height:"600"})}function c(){return s.createElement("section",{className:i.features},s.createElement("div",{className:"container"},s.createElement("div",{className:"landing-page"},s.createElement("div",{className:"information"},s.createElement("h1",{className:"hero__title"},"Saga"),s.createElement("h1",{className:"hero__title"},"dokumentasjon"),s.createElement("p",{className:"hero__subtitle margin-bottom--lg"},"Vi senker terskelen for \xe5 komme i gang med dataanalyse p\xe5 tvers av Vegvesenet."),s.createElement("div",{className:i.buttons},s.createElement(r.Z,{className:"button button--secondary button--lg",to:"/intro"},"Les dokumentasjonen"))),s.createElement(m,{className:"animation"}))))}function h(){return s.createElement(s.Fragment,null,s.createElement(n.Z,{title:"Dokumentasjon",description:""},s.createElement(c,null)))}}}]);