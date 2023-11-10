"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3981],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=n.createContext({}),p=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(r.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=l,k=c["".concat(r,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(k,i(i({ref:a},m),{},{components:t})):n.createElement(k,i({ref:a},m))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var r in a)hasOwnProperty.call(a,r)&&(s[r]=a[r]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5900:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const o=t.p+"assets/images/edit-alias-commands-d15c604ce4f66c4439c4a70e75e442e0.png",i=t.p+"assets/images/alias-commands-e533bd3b80879a586083f93cea40b5ae.png",s={title:"Alias Commands",id:"alias-commands",description:"Aliases for commands in TCET Linux",sidebar_label:"Alias Commands",keywords:["Alias Commands","Terminal Shortcuts","autoremove","clr-cache","fix-keys","fsh-alias","grep","install","ll","local-install","ls","pkg-info","remove","run-help","search","search-local","sync","unlock","update","version","which-command"]},r=void 0,p={unversionedId:"projects/tcet-linux/guides/alias-commands",id:"projects/tcet-linux/guides/alias-commands",title:"Alias Commands",description:"Aliases for commands in TCET Linux",source:"@site/docs/projects/tcet-linux/guides/alias-commands.md",sourceDirName:"projects/tcet-linux/guides",slug:"/projects/tcet-linux/guides/alias-commands",permalink:"/docs/projects/tcet-linux/guides/alias-commands",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tcet-linux/guides/alias-commands.md",tags:[],version:"current",lastUpdatedBy:"Meet Jain",lastUpdatedAt:1696218958,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Alias Commands",id:"alias-commands",description:"Aliases for commands in TCET Linux",sidebar_label:"Alias Commands",keywords:["Alias Commands","Terminal Shortcuts","autoremove","clr-cache","fix-keys","fsh-alias","grep","install","ll","local-install","ls","pkg-info","remove","run-help","search","search-local","sync","unlock","update","version","which-command"]},sidebar:"docs",previous:{title:"Package Management",permalink:"/docs/projects/tcet-linux/guides/install-remove-update-package"},next:{title:"System Maintenance",permalink:"/docs/projects/tcet-linux/guides/system-maintenance"}},m={},c=[{value:"Create Alias",id:"create-alias",level:3},{value:"Remove Alias",id:"remove-alias",level:3},{value:"All Alias Commands",id:"all-alias-commands",level:2},{value:"Autoremove",id:"autoremove",level:3},{value:"Clear Cache",id:"clear-cache",level:3},{value:"Fix Keys",id:"fix-keys",level:3},{value:"Grep",id:"grep",level:3},{value:"Install",id:"install",level:3},{value:"LL",id:"ll",level:3},{value:"Local Install",id:"local-install",level:3},{value:"LS",id:"ls",level:3},{value:"Package Info",id:"package-info",level:3},{value:"Remove",id:"remove",level:3},{value:"Run Help",id:"run-help",level:3},{value:"Search",id:"search",level:3},{value:"Search Local",id:"search-local",level:3},{value:"Sync",id:"sync",level:3},{value:"Unlock",id:"unlock",level:3},{value:"Update",id:"update",level:3},{value:"Version",id:"version",level:3},{value:"Which Command",id:"which-command",level:3}],d={toc:c},u="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(u,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Explore the world of TCET Linux! Learn how to ",(0,l.kt)("strong",{parentName:"p"},"create and remove aliases"),", and get familiar with the ",(0,l.kt)("strong",{parentName:"p"},"default aliases")," for an ",(0,l.kt)("em",{parentName:"p"},"enhanced user experience"),"."),(0,l.kt)("h3",{id:"create-alias"},"Create Alias"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"create the alias"),", use the ",(0,l.kt)("inlineCode",{parentName:"p"},"alias")," command followed by the keyword you want to use with a equal sign (=), and the command you want to associate with the alias, enclosed in single quotes or double quotes. Hence as a result the keyword will get mapped with the commmand. Here's an example for creating an alias for listing files and directories:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"alias LA='ls -la'\n")),(0,l.kt)("h3",{id:"remove-alias"},"Remove Alias"),(0,l.kt)("p",null,"To remove an alias, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"unalias")," command ",(0,l.kt)("strong",{parentName:"p"},"followed by the alias name")," you used to map the command with keyword. For example, to remove the LA alias:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"unalias LA\n")),(0,l.kt)("img",{src:o,style:{border:"2px solid gray"}}),(0,l.kt)("br",null),(0,l.kt)("center",null,(0,l.kt)("b",null,(0,l.kt)("figcaption",null,"Add & Remove Alias Example"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"all-alias-commands"},"All Alias Commands"),(0,l.kt)("p",null,"Below is the list and documentation of ",(0,l.kt)("strong",{parentName:"p"},"all the aliased commands installed by default in the TCET Linux"),". Some commands use the comman command word sudo and pacmank, the breakdown of the commands are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo"),": This is used to run the command with superuser privileges, allowing you to install packages system-wide."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pacman"),": This is the package manager for Arch Linux and its derivatives.")),(0,l.kt)("h3",{id:"autoremove"},"Autoremove"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"remove packages along with their dependencies")," that are no longer required, you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"autoremove package_name\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Rns package_name\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Rns")," command is used to ",(0,l.kt)("em",{parentName:"p"},"remove packages and their dependencies, including packages that are no longer required by any other installed packages"),". Here's the breakdown of the command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-R"),": This flag specifies that you want to remove a package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n"),": This flag tells ",(0,l.kt)("inlineCode",{parentName:"li"},"pacman")," to remove only packages that are no longer required by any other installed packages (orphans)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s"),": This flag instructs ",(0,l.kt)("inlineCode",{parentName:"li"},"pacman")," to remove package dependencies as well.")),(0,l.kt)("p",null,"However, ",(0,l.kt)("strong",{parentName:"p"},"use it with caution")," as it may affect your system's stability if you remove packages that are still required for other software to function properly."),(0,l.kt)("h3",{id:"clear-cache"},"Clear Cache"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"clear the package cache and free up disk space"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clr-cache\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Scc\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Scc")," command is used to clear the package cache on your system, which can help free up disk space. Here's an explanation of the command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Scc"),": These flags together specify that you want to clear the package cache.")),(0,l.kt)("p",null,"Running ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Scc")," will prompt you to confirm the removal of all cached package files. ",(0,l.kt)("em",{parentName:"p"},"Clearing the cache can be useful to free up disk space but should be done with care, especially if you might need to reinstall packages in the future.")),(0,l.kt)("h3",{id:"fix-keys"},"Fix Keys"),(0,l.kt)("p",null,"If you encounter ",(0,l.kt)("strong",{parentName:"p"},"issues with GPG keys"),", you can use the following command to reset and populate them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"fix-keys\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rvf /etc/pacman.d/gnupg && sudo pacman-key --init && sudo pacman-key --populate\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"fix-keys")," command is a sequence of three commands that are used to address problems related to GPG (GNU Privacy Guard) keys in the context of package management. Here's the breakdown of each part of the command:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sudo rm -rvf /etc/pacman.d/gnupg"),": This part of the command removes the GPG keyring directory located at ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/pacman.d/gnupg"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"-r")," flag indicates recursive removal, the ",(0,l.kt)("inlineCode",{parentName:"p"},"-v")," flag stands for verbose output, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," flag is used to force the removal without asking for confirmation.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman-key --init"),": After removing the GPG keyring, this part initializes a new GPG keyring using ",(0,l.kt)("inlineCode",{parentName:"p"},"pacman-key"),", which is a tool for managing PGP keys used in package management.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman-key --populate"),": Finally, this part of the command populates the new GPG keyring with keys from the keyserver, ensuring that it contains the necessary keys for package verification."))),(0,l.kt)("p",null,"Running this command can help resolve issues related to GPG keys, which are essential for verifying the authenticity of packages during installation or update processes."),(0,l.kt)("h3",{id:"grep"},"Grep"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"search for text patterns within files while displaying line numbers and colored output"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grep "pattern" file.txt\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'grep -n --color "pattern" file.txt\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"grep")," command is used for ",(0,l.kt)("em",{parentName:"p"},"text pattern matching in files"),". When you run this command, ",(0,l.kt)("strong",{parentName:"p"},"you can provide additional arguments to specify the pattern you want to search for and the files in which you want to search"),". Replace ",(0,l.kt)("inlineCode",{parentName:"p"},'"pattern"')," with the text you want to search for and ",(0,l.kt)("inlineCode",{parentName:"p"},'"file.txt"')," with the name of the file in which you want to search. The command will then display matching lines with line numbers and highlighted text. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n"),": This flag tells ",(0,l.kt)("inlineCode",{parentName:"li"},"grep")," to display line numbers along with the matched lines."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--color"),": This flag enables colored highlighting for the matched text in the output, making it easier to identify.")),(0,l.kt)("h3",{id:"install"},"Install"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"install packages from the official repositories"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"install package_name\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S package_name\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -S")," command is used to ",(0,l.kt)("strong",{parentName:"p"},"install packages in Arch Linux-based distributions, including TCET Linux"),". You can replace ",(0,l.kt)("inlineCode",{parentName:"p"},"package_name")," with the name of the package you want to install."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-S"),": This flag is used to specify that you want to install a package.")),(0,l.kt)("h3",{id:"ll"},"LL"),(0,l.kt)("p",null,"To list files and directories in a directory with colored output, human-readable file sizes, and details, you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ll\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls --color=auto -lah\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ll")," command is a variation of the ",(0,l.kt)("inlineCode",{parentName:"strong"},"ls")," command used for listing files and directories in a directory"),". Running this command in a directory will display a detailed and color-coded list of files and directories, including hidden ones, with human-readable file sizes. Here's an explanation of the flags used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--color=auto"),": This flag enables colored output, but it only applies color when the output is directed to a terminal, not to a file or another program."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-lah"),": These flags are used for listing files and directories with specific details:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l"),": This flag tells ",(0,l.kt)("inlineCode",{parentName:"li"},"ls")," to use a long listing format, displaying additional information such as permissions, ownership, file size, and modification date."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-a"),": This flag includes hidden files and directories (those starting with a dot, like ",(0,l.kt)("inlineCode",{parentName:"li"},".config"),") in the listing."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h"),': This flag makes file sizes human-readable, displaying sizes in a more easily understandable format (e.g., "2.3M" instead of bytes).')))),(0,l.kt)("h3",{id:"local-install"},"Local Install"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"install local packages (packages not from the official repositories)"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"local-install package.tar.zst\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -U package.tar.zst\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -U")," command is used to ",(0,l.kt)("strong",{parentName:"p"},"install packages in Arch Linux-based distributions, from local files or URLs"),". ",(0,l.kt)("em",{parentName:"p"},"You would typically use this command to install packages that you have downloaded manually or obtained from sources other than the official repositories."),' For example, to install a package with the filename "package.tar.zst" located in your current directory, you would use the aliased command. Here\'s a brief explanation of the command:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-U"),": This flag is used to specify that you want to install a package from a local file or a URL.")),(0,l.kt)("h3",{id:"ls"},"LS"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"list files and directories")," in a directory with ",(0,l.kt)("strong",{parentName:"p"},"colored output")," based on file type, you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls --color=auto\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")," command used for listing files and directories in a directory with ",(0,l.kt)("strong",{parentName:"p"},"colored output"),". Running this command in a directory will display a list of files and directories with color-coded formatting based on their types, ",(0,l.kt)("em",{parentName:"p"},"making it easier to distinguish between different types of files"),". Here's an explanation of the flag used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--color=auto"),": This flag enables colored output, but it only applies color when the output is directed to a terminal, not to a file or another program.")),(0,l.kt)("h3",{id:"package-info"},"Package Info"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To obtain detailed information about a specific package installed on your system"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pkg-info package_name\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Qi package_name\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Qi")," command is used to ",(0,l.kt)("strong",{parentName:"p"},"query information about a package"),". Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"package_name")," with the name of the package you want to obtain information about. This command will display detailed information about the specified package, including its ",(0,l.kt)("em",{parentName:"p"},"version, description, installation status, and more"),"."),(0,l.kt)("h3",{id:"remove"},"Remove"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To remove packages from your system"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"remove package_name\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -R package_name\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -R")," command is used to uninstall packages. Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"package_name")," with the name of the package you want to remove. This command will prompt you to confirm the removal of the specified package. After confirmation, the package will be uninstalled from your system. ",(0,l.kt)("strong",{parentName:"p"},"This command will not remove the dependencies of the package"),". ",(0,l.kt)("strong",{parentName:"p"},"To remove the package with the dependencies use ",(0,l.kt)("inlineCode",{parentName:"strong"},"autoremove")," command"),"."),(0,l.kt)("h3",{id:"run-help"},"Run Help"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To access manual pages for various commands")," and get detailed help and documentation, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"man")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"run-help command_name\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"man command_name\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Replace ",(0,l.kt)("inlineCode",{parentName:"em"},"command_name")," with the name of the command or utility")," for which you want to access the manual page. The ",(0,l.kt)("inlineCode",{parentName:"p"},"man")," command opens a page that displays the manual page, providing comprehensive information about the command's usage, options, and functionality. It's a valuable resource for learning how to use and understand various commands on your TCET Linux system. ",(0,l.kt)("em",{parentName:"p"},'You can navigate through the manual page using keyboard commands like arrow keys and the "q" key to exit the pager.')),(0,l.kt)("h3",{id:"search"},"Search"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"search for packages available in the official repositories")," that match a specific search query or keyword, you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"search search_query\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Ss search_query\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Ss")," command is used to search for packages in Arch Linux-based systems. ",(0,l.kt)("em",{parentName:"p"},"Replace ",(0,l.kt)("inlineCode",{parentName:"em"},"search_query")," with the term you want to search for"),". This command will display a list of packages that match the ",(0,l.kt)("em",{parentName:"p"},"search query, including their names and descriptions.")),(0,l.kt)("h3",{id:"search-local"},"Search Local"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To search for packages installed on your system")," that match a specific search query or keyword, you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"search-local search_query\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Qs search_query\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Qs")," command is used to search for installed packages. Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"search_query")," with the term you want to search for. ",(0,l.kt)("em",{parentName:"p"},"This command will display a list of installed packages that match the search query, including their names and descriptions.")),(0,l.kt)("h3",{id:"sync"},"Sync"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Before installing or updating packages, it is recommended to synchronize your package database.")," ",(0,l.kt)("em",{parentName:"p"},"You can achieve this by using the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sync\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Syyy\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Syyy")," command is used to",(0,l.kt)("strong",{parentName:"p"}," refresh the package databases with a full refresh.")," Here's the breakdown of the command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The first ",(0,l.kt)("inlineCode",{parentName:"li"},"y")," refreshes the sync databases, updating the package list from the repositories."),(0,l.kt)("li",{parentName:"ul"},"The second ",(0,l.kt)("inlineCode",{parentName:"li"},"y")," refreshes the package lists again, checking for new versions of packages."),(0,l.kt)("li",{parentName:"ul"},"The third ",(0,l.kt)("inlineCode",{parentName:"li"},"y")," refreshes the package lists a final time, ensuring that all databases are up to date.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Running this command helps ensure that your system's package information is current, allowing you to install or update packages with the most recent data from the repositories.")),(0,l.kt)("h3",{id:"unlock"},"Unlock"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"If you encounter issues related to a locked package database, you can use the following command")," to remove the lock:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"unlock\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm /var/lib/pacman/db.lck\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo rm /var/lib/pacman/db.lck")," command is used to remove the lock file associated with the package database in Arch Linux-based systems, including TCET Linux. The lock file (",(0,l.kt)("inlineCode",{parentName:"p"},"db.lck"),") is created when a package management operation is in progress, and it prevents multiple package operations from occurring simultaneously to avoid conflicts."),(0,l.kt)("p",null,"Running this command is a way to unlock the package database if you believe it is locked incorrectly or if a package operation was interrupted or stalled. ",(0,l.kt)("strong",{parentName:"p"},"Be cautious when using this command and ensure that no other package operations are currently in progress before removing the lock.")),(0,l.kt)("h3",{id:"update"},"Update"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To update the package databases and upgrade installed packages to their latest versions"),", you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"update\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Syyu\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -Syyu")," command is used for ",(0,l.kt)("strong",{parentName:"p"},"updating the system in Arch Linux-based systems.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Syyu"),": These flags together specify that you want to synchronize the package databases (",(0,l.kt)("inlineCode",{parentName:"li"},"-Syy"),") and upgrade all installed packages (",(0,l.kt)("inlineCode",{parentName:"li"},"-u"),").")),(0,l.kt)("p",null,"Running this command will refresh the package databases (",(0,l.kt)("inlineCode",{parentName:"p"},"-Syy"),") to ensure they are up to date and then upgrade (",(0,l.kt)("inlineCode",{parentName:"p"},"-u"),") all installed packages to their latest available versions. It's an essential command to keep your system software current and secure."),(0,l.kt)("h3",{id:"version"},"Version"),(0,l.kt)("p",null,"To ",(0,l.kt)("strong",{parentName:"p"},"display version information about your operating system")," based on the contents of the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/os-release")," file, you can use the following command sequence:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"version\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sed -n 1p /etc/os-release && sed -n 7p /etc/os-release && sed -n 8p /etc/os-release\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sed")," command is used for stream editing and manipulation. Here's how the command sequence works:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sed -n 1p /etc/os-release"),": This part extracts and prints the first line of the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/os-release")," file, which typically contains the operating system's name and version.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sed -n 7p /etc/os-release"),": This part extracts and prints the seventh line of the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/os-release")," file, which often contains version-specific information.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sed -n 8p /etc/os-release"),": This part extracts and prints the eighth line of the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/os-release")," file, which often contains additional version or build information."))),(0,l.kt)("p",null,"Running this command sequence will provide you with version-related information about your operating system based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/os-release")," file. ",(0,l.kt)("em",{parentName:"p"},"It can be helpful for quickly checking your system's version details.")),(0,l.kt)("h3",{id:"which-command"},"Which Command"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To find the location of a command in your system's PATH"),", you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"whence")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"which-command command_name\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"whence command_name\n")),(0,l.kt)("p",null,"Replace ",(0,l.kt)("inlineCode",{parentName:"p"},"command_name")," with the name of the command you want to locate. ",(0,l.kt)("em",{parentName:"p"},"The ",(0,l.kt)("inlineCode",{parentName:"em"},"whence")," command will display the full path to the executable of the specified command if it exists in your system's PATH.")),(0,l.kt)("img",{src:i,style:{border:"2px solid gray"}}),(0,l.kt)("br",null),(0,l.kt)("center",null,(0,l.kt)("b",null,(0,l.kt)("figcaption",null,"All Default Installed Alias Commands"))),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can visit on some learning resources listed on ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/projects/tcet-linux/resources"},"Resource Page"))," of TCET Linux documentation.")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The ",(0,l.kt)("a",{parentName:"em",href:"alias-commands"},(0,l.kt)("strong",{parentName:"a"},"Alias Command"))," was succesfully executed! Let's move on and see how we do ",(0,l.kt)("a",{parentName:"em",href:"system-maintenance"},(0,l.kt)("strong",{parentName:"a"},"System Maintenance"))," of ",(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("a",{parentName:"strong",href:"https://linux.tcetmumbai.in/"},"TCET Linux")),".")))}k.isMDXComponent=!0}}]);