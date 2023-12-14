"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Troubleshooting Applications",id:"troubleshoot-application",description:"Troubleshooting Applications Common Issues .",sidebar_label:"Troubleshooting Applications",keywords:["troubleshoot","pacman","performance"]},i=void 0,p={unversionedId:"projects/tcet-linux/guides/application/troubleshoot-application",id:"projects/tcet-linux/guides/application/troubleshoot-application",title:"Troubleshooting Applications",description:"Troubleshooting Applications Common Issues .",source:"@site/docs/projects/tcet-linux/guides/application/troubleshoot-application.md",sourceDirName:"projects/tcet-linux/guides/application",slug:"/projects/tcet-linux/guides/application/troubleshoot-application",permalink:"/docs/projects/tcet-linux/guides/application/troubleshoot-application",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tcet-linux/guides/application/troubleshoot-application.md",tags:[],version:"current",lastUpdatedBy:"Meet Jain",lastUpdatedAt:1699554965,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{title:"Troubleshooting Applications",id:"troubleshoot-application",description:"Troubleshooting Applications Common Issues .",sidebar_label:"Troubleshooting Applications",keywords:["troubleshoot","pacman","performance"]},sidebar:"docs",previous:{title:"Welcome App",permalink:"/docs/projects/tcet-linux/guides/application/welcome-app"},next:{title:"Contribute to TCET Linux",permalink:"/docs/projects/tcet-linux/contribute-tcet-linux"}},s={},l=[{value:"Application Not Launching",id:"application-not-launching",level:2},{value:"Slow Performance",id:"slow-performance",level:2},{value:"Application Crashes",id:"application-crashes",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TCET Linux offers a range of applications and tools to enhance your computing experience. However, issues can sometimes arise. This section provides guidance on identifying and resolving common application-related problems in TCET Linux."),(0,o.kt)("h2",{id:"application-not-launching"},"Application Not Launching"),(0,o.kt)("p",null,"If an application fails to launch, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Check for Errors:")," Open a terminal and try launching the application from the command line. Look for any error messages or warnings that might provide insight into the issue.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Reinstall the Application:")," If the application is still not working, try reinstalling it. Use the package manager, Pacman, to remove and then reinstall the application. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Rns application-name\nsudo pacman -S application-name\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Dependency Issues:")," Sometimes, applications depend on specific libraries. Ensure that all necessary dependencies are installed. Use Pacman to install missing libraries if needed."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S missing-library\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Check for Updates:")," Ensure your system and the application are up-to-date. Run the following commands to update your system and the installed packages:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Syu\n")))),(0,o.kt)("h2",{id:"slow-performance"},"Slow Performance"),(0,o.kt)("p",null,"If you notice that applications are running slowly or consuming excessive resources, consider the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Resource Monitoring:")," Open the system monitor or task manager to check which processes are consuming CPU, memory, or disk resources. Terminate any unneeded processes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Close Background Applications:")," Ensure that other applications running in the background are not causing performance issues. Close unnecessary applications and processes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Optimize System:")," Regularly maintain your TCET Linux system. Clean up temporary files, remove unnecessary packages, and optimize system services."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Sc\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Update Graphics Drivers:")," If your system has a dedicated graphics card, ensure that you have the appropriate graphics drivers installed and keep them up to date."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mhwd -a pci nonfree 0300\n")))),(0,o.kt)("h2",{id:"application-crashes"},"Application Crashes"),(0,o.kt)("p",null,"If an application frequently crashes or becomes unresponsive:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Check for Updates:")," Ensure that the application is updated to the latest version. If not, update it using the package manager.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Report Bugs:")," If the issue persists, consider reporting it to the application's developers. They may be able to provide a fix or a workaround.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Check for Logs:")," Look for error logs in your home directory or in /var/log. These logs may contain information about the cause of the crashes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Use Alternatives:")," If the problem remains unresolved, consider using alternative applications that serve the same purpose."))),(0,o.kt)("p",null,"Remember, troubleshooting may require a certain level of expertise, and it's always a good practice to back up your data before making significant changes to your system. In case you encounter complex or unique issues, consider seeking help from the TCET Linux community forums or support channels to resolve them efficiently."))}m.isMDXComponent=!0}}]);