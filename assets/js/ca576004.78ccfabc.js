"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||s;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s=n.p+"assets/images/pig-44b0428a0ca79b18f3719110a4f2615d.png",i={title:"Define Cycles",id:"defining-cycle",description:"The section of the website where the user enter's his marks.",sidebar_label:"Defining Cycle",keywords:["javascript","install","local","node","approach"]},o=void 0,l={unversionedId:"projects/fmc-website/components/defining-cycle",id:"projects/fmc-website/components/defining-cycle",title:"Define Cycles",description:"The section of the website where the user enter's his marks.",source:"@site/docs/projects/fmc-website/components/defining-cycle.mdx",sourceDirName:"projects/fmc-website/components",slug:"/projects/fmc-website/components/defining-cycle",permalink:"/docs/projects/fmc-website/components/defining-cycle",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/fmc-website/components/defining-cycle.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1688053691,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{title:"Define Cycles",id:"defining-cycle",description:"The section of the website where the user enter's his marks.",sidebar_label:"Defining Cycle",keywords:["javascript","install","local","node","approach"]},sidebar:"docs",previous:{title:"Header",permalink:"/docs/projects/fmc-website/components/header-help"},next:{title:"Displaying Cycle",permalink:"/docs/projects/fmc-website/components/displaying-cycle"}},p={},c=[{value:"Cycle Numbers",id:"cycle-numbers",level:3},{value:"Marks entry",id:"marks-entry",level:3},{value:"Average",id:"average",level:3},{value:"New Feature!",id:"new-feature",level:3}],m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The key segment of the webpage, known as the ",(0,r.kt)("strong",{parentName:"p"},'"Defining Cycle"')," section, is positioned at the ",(0,r.kt)("em",{parentName:"p"},"upper center")," of the webpage, just below the ",(0,r.kt)("strong",{parentName:"p"},'"Fill My Cycle"')," header and the ",(0,r.kt)("strong",{parentName:"p"},'"Need Help" button'),". It holds significant significance as it serves as the primary interface for users to input their preferred cycles and marks for individual practicals. This particular component is primarily divided into three distinct sections: ",(0,r.kt)("em",{parentName:"p"},"the allocation of cycle numbers, the input of marks, and the calculation of the average.")),(0,r.kt)("h3",{id:"cycle-numbers"},"Cycle Numbers"),(0,r.kt)("p",null,"Within this specific section of the page, users have the ability to determine the quantity of cycles for ",(0,r.kt)("strong",{parentName:"p"},"both Cycle 1 and Cycle 2.")," Following the entry of these values, corresponding boxes are displayed beneath each cycle, enabling the user to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"input marks"))," for each practical within those cycles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here's the implemented code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {6,9-10}showLineNumbers',title:'"index.html"',"{6,9-10}showLineNumbers":!0},'<div class="row">\n        <div class="col-xs-6">\n            <table class="mrg ind">\n                <thead>\n                        <tr>\n                                <th colspan="2">Cycle 1</th>\n                        </tr>\n                            <tr>\n                                <th><span id="c10">1</span>&nbsp;&nbsp;to&nbsp;</th>\n                                <th><input class="form-control input-sm" type="number" min="1" max="15" step="1" value="" id="c11" maxlength="2" /></th>\n                            </tr>\n                            <tr>\n                                <th colspan="2"><hr></th>\n                            </tr>\n                </thead>\n\n')),(0,r.kt)("p",null,"Now let's understand the code given above:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first line of code ",(0,r.kt)("inlineCode",{parentName:"p"},'<div class="row">')," means we are ",(0,r.kt)("strong",{parentName:"p"},"starting a new row")," on the paper.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside that row, we have another part that is ",(0,r.kt)("em",{parentName:"p"},"divided into two equal columns.")," This part is represented by the code ",(0,r.kt)("inlineCode",{parentName:"p"},'<div class="col-xs-6">'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The code ",(0,r.kt)("inlineCode",{parentName:"p"},'<table class="mrg ind">')," is used to ",(0,r.kt)("strong",{parentName:"p"},"create a table")," and ",(0,r.kt)("em",{parentName:"p"},"mrg")," ind is used to make it ",(0,r.kt)("strong",{parentName:"p"},"look nice.")," We have defined a header here titled ",(0,r.kt)("em",{parentName:"p"},'"Cycle-1"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The code ",(0,r.kt)("inlineCode",{parentName:"p"},'<span id="c10">1</span>&nbsp;&nbsp;to&nbsp;</th>')," means that the first box should ",(0,r.kt)("strong",{parentName:"p"},"show the number 1,")," and then there should be some empty space and the word ",(0,r.kt)("em",{parentName:"p"},'"to", like "1 to".')," The second box is for you to ",(0,r.kt)("em",{parentName:"p"},"fill in any number you want between 1 and 15"),", which is given by the code ",(0,r.kt)("inlineCode",{parentName:"p"},'<type="number" min="1" max="15" step="1" value="" maxlength="2" />'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, we have another ",(0,r.kt)("strong",{parentName:"p"},"small row")," with a line in the middle. The code ",(0,r.kt)("inlineCode",{parentName:"p"},'<th colspan="2"><hr></th>')," means that we want a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"line to go across the whole table."))))),(0,r.kt)("h3",{id:"marks-entry"},"Marks entry"),(0,r.kt)("p",null,"This section is really ",(0,r.kt)("strong",{parentName:"p"},"important")," because it's where the user ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"enters their practical marks"))," in boxes. But here's the interesting part: only the ",(0,r.kt)("strong",{parentName:"p"},"exact number of boxes")," that the user asks for will be shown. This means that the interface adjusts itself to match the user's needs."),(0,r.kt)("p",null,"Here's the code implemented:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {1,4} showLineNumbers',title:'"index.html"',"{1,4}":!0,showLineNumbers:!0},'<tbody id="tbl01">\n        <tr>\n            <td>1</td>\n                td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1" maxlength="3"/></td>\n            </tr>\n             // Exactly the same code just it\'s created for new rows\n</tbody>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the table body, there are several rows, each defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"<tr>")," tags. Each row consists of ",(0,r.kt)("strong",{parentName:"p"},"two cells or columns.")," In the first cell ",(0,r.kt)("inlineCode",{parentName:"p"},"<td>1</td>"),", the numbers ",(0,r.kt)("em",{parentName:"p"},"1, 2, 3, 4, and 5")," are displayed in sequential order for each row.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second cell ",(0,r.kt)("inlineCode",{parentName:"p"},'<td><input class="form-control input-sm exp" type="number" min="0" max="100" step="1" maxlength="3"/></td>')," contains an ",(0,r.kt)("strong",{parentName:"p"},"input box.")," This input box allows the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"user to enter a number between 0 and 100."))," The input can only be a whole number with a maximum of three digits."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the same way we created all the boxes for ",(0,r.kt)("strong",{parentName:"p"},"Cycle-2.")," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#cycle-numbers"},"Refer here")))))),(0,r.kt)("h3",{id:"average"},"Average"),(0,r.kt)("p",null,"This particular section performs a straightforward task of  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"computing the overall average of the marks entered by the user."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {3} showLineNumbers',title:'"index.html"',"{3}":!0,showLineNumbers:!0},'<td>Average</td>\n    <td>\n            <input class="form-control input-sm ip" type="number" min="20" max="100" step="2" id="ip1" />\n    </td>\n    </tr>\n')),(0,r.kt)("p",null,"This code basically creates a section with a table displaying an ",(0,r.kt)("em",{parentName:"p"},'"Average"')," label and an ",(0,r.kt)("strong",{parentName:"p"},"input box")," where the user can ",(0,r.kt)("em",{parentName:"p"},"enter a number or users have the option to manually enter a number")," in the input box, or alternatively, the ",(0,r.kt)("em",{parentName:"p"},"computer can automatically calculate the average")," using values provided by the user."),(0,r.kt)("h3",{id:"new-feature"},"New Feature!"),(0,r.kt)("p",null,"This feature has been ",(0,r.kt)("strong",{parentName:"p"},"recently added")," to the website wherein the users can ",(0,r.kt)("strong",{parentName:"p"},"directly input cycle results in the form of ticks")," and can completely ",(0,r.kt)("em",{parentName:"p"},"avoid the defining cycle section.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html" {4,7} showLineNumbers',title:'"index.html"',"{4,7}":!0,showLineNumbers:!0},'<div class="row">\n    div class="col-xs-12">\n        <label>\n            <input type="checkbox" id="man_mode" />\n                Manual Check Input Mode\n        </label>\n               <button class="btn btn-success btn-xs instr-ref">New Feature!</button>\n        </div>\n</div>\n')),(0,r.kt)("p",null,"Here's the breakdown of the code:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first element is a ",(0,r.kt)("strong",{parentName:"p"},"checkbox input")," ",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="checkbox" id="man_mode" />'),". This checkbox allows the ",(0,r.kt)("strong",{parentName:"p"},"user to select or deselect it.")," This is linked to the ",(0,r.kt)("inlineCode",{parentName:"p"},"script.js")," file, which on ",(0,r.kt)("em",{parentName:"p"},"clicking takes the user directly the display results section."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second element is a ",(0,r.kt)("strong",{parentName:"p"},"button")," with a class ",(0,r.kt)("inlineCode",{parentName:"p"},"btn btn-success btn-xs instr-ref"),". This ",(0,r.kt)("strong",{parentName:"p"},"button")," is ",(0,r.kt)("em",{parentName:"p"},'styled with the "btn-success" class to give it a green color, and "btn-xs" class to make it smaller in size.')," The button is labeled as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},'"New Feature!".'))," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"On clicking New Features,")," it takes the user to the ",(0,r.kt)("strong",{parentName:"p"},"footer section"),", where the ",(0,r.kt)("strong",{parentName:"p"},"Instructions")," are provided."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"After adding the ",(0,r.kt)("em",{parentName:"strong"},"Cycle Numbers"),", ",(0,r.kt)("em",{parentName:"strong"},"Marks Entry"),", ",(0,r.kt)("em",{parentName:"strong"},"Average")," and the ",(0,r.kt)("em",{parentName:"strong"},"New Feature")," overall defining-cycle looks like this:")),(0,r.kt)("figure",null,(0,r.kt)("center",null,(0,r.kt)("img",{src:s,style:{border:"2px solid gray"}})),(0,r.kt)("center",null,(0,r.kt)("b",null,(0,r.kt)("figcaption",null,"Defining Cycles")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("a",{parentName:"em",href:"defining-cycle"},(0,r.kt)("strong",{parentName:"a"},"Defining Cycle"))," is succesfully executed! Let's move on and see how we created the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"displaying-cycle"},"Displaying Cycles"))," of the ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://fillmycycle.tcetmumbai.in"},"Fill My Cycle")),".")))}h.isMDXComponent=!0}}]);