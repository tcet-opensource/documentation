"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(6010),r=n(5281),i=n(5999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function d(e){const{children:t,type:n,title:i,icon:d}=u(e),m=function(e){const t=c[e]??e,n=s[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),p=i??m.label,{iconComponent:f}=m,b=d??a.createElement(f,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},b),p),a.createElement("div",{className:l.admonitionContent},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=f({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var h=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},3587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162),l=n(933),s=n(3612);const c={title:"About the organization",id:"about-tcetopensource",sidebar_label:"About the Organization",description:"A brief introduction about the TCET Open Source Organization",keywords:["tcet","open-source","software"]},u="TCET Open Source",d={unversionedId:"about-tcetopensource",id:"about-tcetopensource",title:"About the organization",description:"A brief introduction about the TCET Open Source Organization",source:"@site/docs/about-tcetopensource.mdx",sourceDirName:".",slug:"/about-tcetopensource",permalink:"/docs/about-tcetopensource",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/about-tcetopensource.mdx",tags:[],version:"current",lastUpdatedBy:"Penny CHIANG",lastUpdatedAt:1697111198,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{title:"About the organization",id:"about-tcetopensource",sidebar_label:"About the Organization",description:"A brief introduction about the TCET Open Source Organization",keywords:["tcet","open-source","software"]},sidebar:"docs",next:{title:"Projects",permalink:"/docs/category/projects"}},m={},p=[{value:"Teams",id:"teams",level:2},{value:"Projects",id:"projects",level:2},{value:"Live Projects",id:"live-projects",level:3},{value:"Ongoing Projects",id:"ongoing-projects",level:3},{value:"Upcoming Projects",id:"upcoming-projects",level:3}],f={toc:p},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tcet-open-source"},"TCET Open Source"),(0,o.kt)("p",null,"TCET Open Source is an organization where software is not just a commodity to be bought and sold, but a collaborative effort that brings people together to solve problems and build something greater than themselves. This is the community of open source, where the boundaries between creators and users blur, and the collective knowledge and creativity of the community combine to create something truly remarkable. "),(0,o.kt)("p",null,"TCET open source is more than just a movement, it's a philosophy that values transparency, inclusivity, and the power of community, having a strength of 50+ individuals currently, across various teams."),(0,o.kt)("h2",{id:"teams"},"Teams"),(0,o.kt)("p",null,"These are the following teams and sub teams in the organization."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Web Team",attributes:{className:l.Z.unique},mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"UI/UX Design"),(0,o.kt)("li",null,"Frontend Engineering"),(0,o.kt)("li",null,"Backend Engineering"))),(0,o.kt)(i.Z,{value:"AI Team",attributes:{className:l.Z.unique},mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Data Engineering"),(0,o.kt)("li",null,"Machine Learning"),(0,o.kt)("li",null,"Automation"))),(0,o.kt)(i.Z,{value:"DevOps Team",attributes:{className:l.Z.unique},mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Production Engineering"),(0,o.kt)("li",null,"TCET Linux Development"))),(0,o.kt)(i.Z,{value:"Documentation Team",attributes:{className:l.Z.unique},mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Project Documentation")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("h3",{id:"live-projects"},"Live Projects"),(0,o.kt)("p",null,"The organization has successfully completed and currently maintains several projects that cater to the needs of TCET students. These include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Activity Dekho")," ",(0,o.kt)("br",null),"This live website showcases past activities organized by TCET students, including committees, clubs, and social bodies. It serves as an archive of the college's vibrant extracurricular life, providing students with a glimpse into the diverse range of activities."),(0,o.kt)("img",{alt:"Activity Dekho",width:"300",src:"https://user-images.githubusercontent.com/104899687/273162337-3806613a-4556-4cb6-9b9e-e79a220473fb.png"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SORT Club website")," ",(0,o.kt)("br",null),"Its represents the SORT and Literary Club's Website which is the part of TCET Open Source."),(0,o.kt)("img",{alt:"SORT Club website",width:"300",src:"https://github.com/tcet-opensource/documentation/assets/104899687/1a28659e-4947-4b36-a185-202928872bae"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fill My Cycle"),": ",(0,o.kt)("br",null),"This live application predicts the average subject-wise score of TCET students. By utilizing advanced algorithms, it offers valuable insights into academic performance, helping students understand their strengths and areas for improvement."),(0,o.kt)("img",{alt:"Fill My Cycle",width:"300",src:"https://github.com/tcet-opensource/documentation/assets/104899687/7def9907-b3f0-4479-a041-37f5152e850d"}))),(0,o.kt)("h3",{id:"ongoing-projects"},"Ongoing Projects"),(0,o.kt)("p",null,"Additionally, the organization is actively working on several exciting projects to further enhance the TCET community. These projects under development include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"TnP website"),(0,o.kt)("br",null),(0,o.kt)("img",{alt:"TnP website",width:"300",src:"https://github.com/tcet-opensource/documentation/assets/104899687/e342f6cd-2acd-4c95-9646-7c88558bf659"}),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"TCET Linux"),(0,o.kt)("br",null),(0,o.kt)("img",{alt:"TCET Linux",width:"300",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/104899687/274179751-4a427b5d-0363-4d37-baa2-d57333b00054.png"}),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Resume Screener"),(0,o.kt)("br",null),(0,o.kt)("img",{alt:"Resume Screener*",width:"300",src:"https://github.com/tcet-opensource/documentation/assets/104899687/a0b56daf-f18e-4da2-a669-adf783a53598"}),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"TCET Open Source Website"),(0,o.kt)("br",null),(0,o.kt)("img",{alt:"TCET Open Source Website",width:"300",src:"https://github-production-user-asset-6210df.s3.amazonaws.com/104899687/274300238-d2975440-46f3-49b9-9576-f0db2f987845.png"}))),(0,o.kt)("h3",{id:"upcoming-projects"},"Upcoming Projects"),(0,o.kt)("p",null,"Looking ahead, the organization has plans for upcoming projects that will further enhance various aspects of college life, including:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"ERP")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Canteen Management System"))),(0,o.kt)("br",null),(0,o.kt)(s.Z,{type:"tip",icon:"\ud83d\udce2",title:"ANNOUCEMENT",mdxType:"Admonition"},(0,o.kt)("p",null,"So if you're looking for a way to make a difference in the organization, to contribute to something greater than yourself, and to be a part of a vibrant and passionate community, look no further than this community of open source.")))}h.isMDXComponent=!0},933:(e,t,n)=>{n.d(t,{Z:()=>a});const a={features:"features_t9lD",featureSvg:"featureSvg_GfXr",fontSora:"fontSora_PQ_C",aboutBackground:"aboutBackground_k7Zd",unique:"unique_cziY"}}}]);