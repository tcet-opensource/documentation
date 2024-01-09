"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9714],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},1542:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={title:"Applications Guide",id:"getting-started-with-application",description:"To Start Exploring Application Present In TCET Linux.",sidebar_label:"Applications Guide",keywords:["applications","apps","default"]},o=void 0,l={unversionedId:"projects/tcet-linux/guides/application/getting-started-with-application",id:"projects/tcet-linux/guides/application/getting-started-with-application",title:"Applications Guide",description:"To Start Exploring Application Present In TCET Linux.",source:"@site/docs/projects/tcet-linux/guides/application/getting-started-with-application.md",sourceDirName:"projects/tcet-linux/guides/application",slug:"/projects/tcet-linux/guides/application/getting-started-with-application",permalink:"/docs/projects/tcet-linux/guides/application/getting-started-with-application",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tcet-linux/guides/application/getting-started-with-application.md",tags:[],version:"current",lastUpdatedBy:"Meet Jain",lastUpdatedAt:1704467814,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"Applications Guide",id:"getting-started-with-application",description:"To Start Exploring Application Present In TCET Linux.",sidebar_label:"Applications Guide",keywords:["applications","apps","default"]},sidebar:"docs",previous:{title:"Chroot",permalink:"/docs/projects/tcet-linux/guides/chroot"},next:{title:"Welcome App",permalink:"/docs/projects/tcet-linux/guides/application/welcome-app"}},s={},p=[{value:"Welcome App",id:"welcome-app",level:3},{value:"Application Installer",id:"application-installer",level:3},{value:"Web Browser",id:"web-browser",level:3},{value:"Office Suite",id:"office-suite",level:3},{value:"Code Editor",id:"code-editor",level:3},{value:"File Manager",id:"file-manager",level:3},{value:"Terminal",id:"terminal",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TCET Linux comes pre-loaded with a variety of applications to enhance your computing experience. Whether you're a beginner or an advanced user, these applications cover a wide range of tasks. Let's explore how to get started with them"),(0,r.kt)("p",null,"Here are some examples of applications that are pre-installed and some optional applications in TCET Linux:"),(0,r.kt)("h3",{id:"welcome-app"},"Welcome App"),(0,r.kt)("p",null,"Our system has welcome application which greets you and provide you menu for some most required features like install system, update system, fix screen resolution, update mirrors and many more."),(0,r.kt)("h3",{id:"application-installer"},"Application Installer"),(0,r.kt)("p",null,'We provide a list of software in our software installer and by just selecting the required software those application will get installed in your TCET Linux system. This application installer is displayed in your application menu and also when you are installing the fresh TCET Linux system using bootable pendrive or installing the fresh system in your virtual machine. Hence, you can install any software provided in the list by just selecting and clicking the "Install" button'),(0,r.kt)("h3",{id:"web-browser"},"Web Browser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Firefox")," is the default web browser in TCET Linux. Open it from the Applications Menu to browse the web and access online resources."),(0,r.kt)("h3",{id:"office-suite"},"Office Suite"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LibreOffice")," provides a powerful office suite, including applications like Writer, Calc, and Impress. Create and edit documents, spreadsheets, and presentations. Many peoples dont require this software hence it is not being pre-installed we give you an option in our Application Installer and you can select to install LibreOffice in your system."),(0,r.kt)("h3",{id:"code-editor"},"Code Editor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visual Studio Code")," (VS Code) is a powerful and versatile code editor that is not pre-installed in TCET Linux as many user dont require it. However, you can easily install it using our Application Installer"),(0,r.kt)("h3",{id:"file-manager"},"File Manager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Thunar")," is the default file manager. Use it to navigate through your files, folders, and external drives."),(0,r.kt)("h3",{id:"terminal"},"Terminal"),(0,r.kt)("p",null,"Access the command line using the ",(0,r.kt)("strong",{parentName:"p"},"Terminal"),". This is a powerful tool for advanced users to execute commands and perform system tasks."))}d.isMDXComponent=!0}}]);