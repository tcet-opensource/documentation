"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1572],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(k,o(o({ref:a},c),{},{components:t})):n.createElement(k,o({ref:a},c))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31821:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const i={title:"Install AUR Packages",id:"yay",sidebar_label:"Install AUR Packages",description:"Learn how to use YAY to install AUR packages on Arch Linux and TCET Linux.",keywords:["tcet","open-source","linux"]},o=void 0,l={unversionedId:"projects/tcet-linux/guides/yay",id:"projects/tcet-linux/guides/yay",title:"Install AUR Packages",description:"Learn how to use YAY to install AUR packages on Arch Linux and TCET Linux.",source:"@site/docs/projects/tcet-linux/guides/yay.md",sourceDirName:"projects/tcet-linux/guides",slug:"/projects/tcet-linux/guides/yay",permalink:"/docs/projects/tcet-linux/guides/yay",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tcet-linux/guides/yay.md",tags:[],version:"current",lastUpdatedBy:"Meet Jain",lastUpdatedAt:1699554094,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{title:"Install AUR Packages",id:"yay",sidebar_label:"Install AUR Packages",description:"Learn how to use YAY to install AUR packages on Arch Linux and TCET Linux.",keywords:["tcet","open-source","linux"]},sidebar:"docs",previous:{title:"System Maintenance",permalink:"/docs/projects/tcet-linux/guides/system-maintenance"},next:{title:"Backup and Restore",permalink:"/docs/projects/tcet-linux/guides/backup-restore-timeshift"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"YAY is an AUR (Arch User Repository) helper for Arch Linux. It simplifies the process of installing and managing software not available in the official Arch repositories. With a user-friendly interface, YAY streamlines the installation of packages, handling dependencies and updates seamlessly.\nIt enhances the Arch Linux experience by providing a convenient way to access a vast array of community-contributed packages."),(0,r.kt)("p",null,"To provide an efficient, customizable, and user-friendly environment suitable for a diverse range of users, TCET Linux was conceived with several key goals in mind."),(0,r.kt)("h1",{id:"dependency"},"Dependency"),(0,r.kt)("p",null,"Open a terminal and install ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," if not already installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S git\n")),(0,r.kt)("h1",{id:"a-yay-installation"},"A. YAY Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"YAY on Any Arch Linux System "),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"yay")," repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://aur.archlinux.org/yay.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move into the cloned directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd yay\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build and install ",(0,r.kt)("inlineCode",{parentName:"p"},"yay"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"makepkg -si\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"YAY on TCET Linux"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"install yay\n")))))),(0,r.kt)("h1",{id:"b-install-aur-packages-through-yay"},"B. Install AUR Packages through YAY"),(0,r.kt)("p",null,"Once ",(0,r.kt)("inlineCode",{parentName:"p"},"yay")," is installed, you can use it to easily install packages from the Arch User Repository (AUR). Here's how you can do it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Search for Packages:"),"\nTo search for a package in the AUR, use the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yay -Ss <package_name>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install Packages"),":\nTo install a package from the AUR, use the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S <package_name>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remove Packages"),":\nTo remove a package installed from the AUR, use the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yay -R <package_name>\n")))),(0,r.kt)("h1",{id:"c-example-installing-visual-studio-code-bin"},"C. Example: Installing ",(0,r.kt)("inlineCode",{parentName:"h1"},"visual-studio-code-bin")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Search for ",(0,r.kt)("inlineCode",{parentName:"strong"},"visual-studio-code")," Packages:"),"\nSearch for available ",(0,r.kt)("inlineCode",{parentName:"p"},"visual-studio-code")," packages on the AUR:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yay -Ss visual-studio-code\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install visual-studio-code-bin"),":\nChoose the ",(0,r.kt)("inlineCode",{parentName:"p"},"visual-studio-code-bin")," package and install it using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S visual-studio-code-bin\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remove visual-studio-code-bin"),":\nIf you need to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"visual-studio-code-bin")," package, use the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yay -R visual-studio-code-bin\n")),(0,r.kt)("p",{parentName:"li"},"Now you've successfully searched, installed, and removed the visual-studio-code-bin package using ",(0,r.kt)("inlineCode",{parentName:"p"},"yay")," on your Arch Linux or TCET Linux system."),(0,r.kt)("br",null))))}d.isMDXComponent=!0}}]);