"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,u=m["".concat(s,".").concat(y)]||m[y]||d[y]||l;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l=n.p+"assets/images/cycledisplay1-8bfd0a2085f026479d934272adabfd81.png",i={title:"Displaying-Cycle",id:"displaying-cycle",description:"Cycle Display Component in Fill My Cycle Website",sidebar_label:"Displaying Cycle",keywords:["Cycle-display","cycle","display"]},o="Cycle Display",s={unversionedId:"projects/fmc-website/components/displaying-cycle",id:"projects/fmc-website/components/displaying-cycle",title:"Displaying-Cycle",description:"Cycle Display Component in Fill My Cycle Website",source:"@site/docs/projects/fmc-website/components/displaying-cycle.mdx",sourceDirName:"projects/fmc-website/components",slug:"/projects/fmc-website/components/displaying-cycle",permalink:"/docs/projects/fmc-website/components/displaying-cycle",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/fmc-website/components/displaying-cycle.mdx",tags:[],version:"current",lastUpdatedBy:"Dibya J. Dutta",lastUpdatedAt:1688112235,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{title:"Displaying-Cycle",id:"displaying-cycle",description:"Cycle Display Component in Fill My Cycle Website",sidebar_label:"Displaying Cycle",keywords:["Cycle-display","cycle","display"]},sidebar:"docs",previous:{title:"Defining Cycle",permalink:"/docs/projects/fmc-website/components/defining-cycle"},next:{title:"Cycle Result",permalink:"/docs/projects/fmc-website/components/cycle-result"}},p={},c=[{value:"Column Header",id:"column-header",level:3},{value:"Data Column",id:"data-column",level:3}],m={toc:c},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cycle-display"},"Cycle Display"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Cycle Display")," component user will be able to see the break down of the average marks scored by them as tickmarks on various cells.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"As you may see in the image:")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:l,style:{border:"2px solid gray"}})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Breakdown of the code is as follows:")),(0,r.kt)("h3",{id:"column-header"},"Column Header"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," tag to define the column headers for the  table, which are ",(0,r.kt)("strong",{parentName:"p"},'"Par\\Perf"'),", ",(0,r.kt)("strong",{parentName:"p"},'"E (5)"'),", ",(0,r.kt)("strong",{parentName:"p"},'"VG (4)"'),", ",(0,r.kt)("strong",{parentName:"p"},'"G (3)"'),", ",(0,r.kt)("strong",{parentName:"p"},'"A (2)"'),", and ",(0,r.kt)("strong",{parentName:"p"},'"BA (1)"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We have used class attribute to apply CSS to the cells."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {3-4} showLineNumbers',title:'"index.html"',"{3-4}":!0,showLineNumbers:!0},'<thead>\n    <tr>\n        <th>Par\\Perf</th>\n        <th class="c">E (5)</th>\n        <th class="c">VG (4)</th>\n        <th class="c">G (3)</th>\n        <th class="c">A (2)</th>\n        <th class="c">BA (1)</th>\n    </tr>\n</thead>\n')))),(0,r.kt)("h3",{id:"data-column"},"Data Column"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," element to define a row in an HTML table.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>"),' tag to define the column header ie "1 to 5" on line 2.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," tag to define the remaining cells. These rows are used as template for adding actual data to the table.   "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {1-3} showLineNumbers',title:'"index.html"',"{1-3}":!0,showLineNumbers:!0},"<tr>\n    <th>TK (30)</th>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n</tr>\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Similarly we have implemented next column: ",(0,r.kt)("strong",{parentName:"p"},"TD (30)")," , ",(0,r.kt)("strong",{parentName:"p"},"LI (10)")," , ",(0,r.kt)("strong",{parentName:"p"},"B (10)")," and ",(0,r.kt)("strong",{parentName:"p"},"C (20)")," column. ")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After successfully implementing the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"displaying-cycle"},"Cycle Display"))," component of the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://fillmycycle.tcetmumbai.in/#result"},"Fill my cycle"))," website, the next step we did was to move forward with the implementation of ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"cycle-result"},"Cycle Result"))," component.")))}y.isMDXComponent=!0}}]);