"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6759],{3905:(e,t,A)=>{A.d(t,{Zo:()=>p,kt:()=>d});var n=A(67294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function l(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?l(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function s(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)A=l[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)A=l[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(A),m=r,d=u["".concat(c,".").concat(m)]||u[m]||i[m]||l;return A?n.createElement(d,a(a({ref:t},p),{},{components:A})):n.createElement(d,a({ref:t},p))}));function d(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=A.length,a=new Array(l);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var o=2;o<l;o++)a[o]=A[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}m.displayName="MDXCreateElement"},12330:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=A(87462),r=(A(67294),A(3905));const l="data:image/png;base64,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",a={Title:"Cycle-Result",id:"cycle-result",Description:"Cycle-Result in Fill My Cycle Website",Sidebar_label:"cycle-result",keywords:["Cycle Result","cycleresult","result"]},s="Cycle Result",c={unversionedId:"projects/fmc-website/components/cycle-result",id:"projects/fmc-website/components/cycle-result",title:"Cycle Result",description:"Cycle-result represents the total marks scored by the student. Here the total marks of both the table is calculated in the respective column and then the average of the total marks is calculated and presented to students.",source:"@site/docs/projects/fmc-website/components/cycle-result.mdx",sourceDirName:"projects/fmc-website/components",slug:"/projects/fmc-website/components/cycle-result",permalink:"/docs/projects/fmc-website/components/cycle-result",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/fmc-website/components/cycle-result.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1688053691,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{Title:"Cycle-Result",id:"cycle-result",Description:"Cycle-Result in Fill My Cycle Website",Sidebar_label:"cycle-result",keywords:["Cycle Result","cycleresult","result"]},sidebar:"docs",previous:{title:"Displaying Cycle",permalink:"/docs/projects/fmc-website/components/displaying-cycle"},next:{title:"Button and Instructions",permalink:"/docs/projects/fmc-website/components/button-instructions"}},o={},p=[{value:"Cycle Result Table",id:"cycle-result-table",level:2},{value:"Column Header",id:"column-header",level:3},{value:"Data Column",id:"data-column",level:3}],u={toc:p},i="wrapper";function m(e){let{components:t,...A}=e;return(0,r.kt)(i,(0,n.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cycle-result"},"Cycle Result"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cycle-result")," represents the total marks scored by the student. Here the total marks of both the table is calculated in the respective column and then the average of the total marks is calculated and presented to students."),(0,r.kt)("h2",{id:"cycle-result-table"},"Cycle Result Table"),(0,r.kt)("p",null,"We have used HTML for this component.",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Breakdown of the code is as follows:")),(0,r.kt)("h3",{id:"column-header"},"Column Header"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," tag to define the column headers for the  table, which are ",(0,r.kt)("strong",{parentName:"p"},'"Cycle"'),", ",(0,r.kt)("strong",{parentName:"p"},'"TK"'),", ",(0,r.kt)("strong",{parentName:"p"},'"TD"'),", ",(0,r.kt)("strong",{parentName:"p"},'"LI"'),", ",(0,r.kt)("strong",{parentName:"p"},'"B"'),", ",(0,r.kt)("strong",{parentName:"p"},'"C"'),", and ",(0,r.kt)("strong",{parentName:"p"},'"Total"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We have used class attribute to apply CSS to the cells."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {3-4} showLineNumbers',title:'"index.html"',"{3-4}":!0,showLineNumbers:!0},'<thead>\n        <tr>\n            <th>Cycle</th>\n            <th class="d">TK</th>\n            <th class="d">TD</th>\n            <th class="d">LI</th>\n            <th class="d">B</th>\n            <th class="d">C</th>\n            <th class="d">Total</th>\n        </tr>\n</thead>\n')))),(0,r.kt)("h3",{id:"data-column"},"Data Column"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," element to define a row in an HTML table.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<th>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<th>"),' tag to define the column header ie "1 to 5" on line 2.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," : We have used ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>")," tag to define the remaining cells. These rows are used as template for adding actual data to the table.   "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {1-3} showLineNumbers',title:'"index.html"',"{1-3}":!0,showLineNumbers:!0},"<tr>\n    <th>1 to 5</th>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n</tr>\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Similarly we have implemented next column: ",(0,r.kt)("strong",{parentName:"p"},"Total")," and ",(0,r.kt)("strong",{parentName:"p"},"Average")," column. ")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cycle Result Table")," would look like in the following manner: ")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:l,style:{border:"2px solid gray"}})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After successfully implementing the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"cycle-result"},"Cycle Result"))," component of the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://fillmycycle.tcetmumbai.in/#result"},"Fill my cycle"))," website, the next step we did was to move forward with the implementation of ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"button-instructions"},"Instructions Button"))," component.")))}m.isMDXComponent=!0}}]);