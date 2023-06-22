"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a=n.p+"assets/images/hero-e477545eaaabcaa1a5d43f85fc67a576.png",i=n.p+"assets/images/heroswiper-d27bc7fc08eef963253d0bdb522c9148.png",p={title:"Hero",id:"hero",description:"Hero Component in T&P Website",sidebar_label:"Hero",keywords:["countup","hero","swiper"]},s=void 0,l={unversionedId:"projects/tnp-website/frontend-components/hero",id:"projects/tnp-website/frontend-components/hero",title:"Hero",description:"Hero Component in T&P Website",source:"@site/docs/projects/tnp-website/frontend-components/hero.mdx",sourceDirName:"projects/tnp-website/frontend-components",slug:"/projects/tnp-website/frontend-components/hero",permalink:"/docs/projects/tnp-website/frontend-components/hero",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tnp-website/frontend-components/hero.mdx",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1687183790,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"Hero",id:"hero",description:"Hero Component in T&P Website",sidebar_label:"Hero",keywords:["countup","hero","swiper"]},sidebar:"docs",previous:{title:"Header",permalink:"/docs/projects/tnp-website/frontend-components/header"},next:{title:"Training",permalink:"/docs/projects/tnp-website/frontend-components/training"}},m={},c=[{value:"CountUp Component",id:"countup-component",level:2},{value:"Hero Section",id:"hero-section",level:2},{value:"HeroSwiper Component",id:"heroswiper-component",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Hero component represents the first section of the T&P Home page. It is one of the most crucial component as it is designed in a certain way which can grab attention of the target audience. The page likely presents data on the ",(0,o.kt)("strong",{parentName:"p"},"number of students successfully placed"),", the ",(0,o.kt)("strong",{parentName:"p"},"count of companies that have visited")," and ",(0,o.kt)("strong",{parentName:"p"},"the count of students securing 10+ LPA packages"),". This page provides a perfect platform to display the pictures of the namely events conducted. The above factors of this components emphasizes it to be the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hero component")," of the website."),(0,o.kt)("h2",{id:"countup-component"},"CountUp Component"),(0,o.kt)("p",null,"The program for this component is a React component in JavaScript which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-countup")," library to display a count-up animation of numbers. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here's a breakdown of the code to understand it's functionality:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Imported the ",(0,o.kt)("inlineCode",{parentName:"p"},"CountUp")," component from the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-countup")," library. This library renders a simple way to create attractive count-up animations in React."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CountUpComponent.jsx" showLineNumbers',title:'"CountUpComponent.jsx"',showLineNumbers:!0},'    import CountUp from "react-countup";\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This line of the program defines a functional component called ",(0,o.kt)("inlineCode",{parentName:"p"},"CountUpComponent"),". It receives the props: ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),". These props are used to configure the count-up animation."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CountUpComponent.jsx" {1} showLineNumbers',title:'"CountUpComponent.jsx"',"{1}":!0,showLineNumbers:!0},"    const CountUpComponent = ({ start, end, title }) => {\n        return (\n      // Sections of CountUp component\n      );\n  };\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," element represents the ",(0,o.kt)("strong",{parentName:"p"},"main container")," of the component. It has several CSS classes that apply styling to the container, such as background color, padding, border, and spacing between child elements. In the empty curly brackets, the required content is filled in."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CountUpComponent.jsx" {4-5} showLineNumbers',title:'"CountUpComponent.jsx"',"{4-5}":!0,showLineNumbers:!0},'   const CountUpComponent = ({ start, end, title }) => {\n      return (\n            // Other Sections of CountUp component\n         <div className="bg-slate-50 p-4 pr-12  rounded-2xl border  border-slate-200 space-y-2">\n             {" "}\n            // Other Sections of CountUp component\n         );\n   };\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The div element used in the below code itself contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"Count-up number"),". It has CSS classes applied. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," element includes the start and end props used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Count-up"),"component. These props are used to ",(0,o.kt)("strong",{parentName:"p"},"animate")," the number from the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," value."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CountUpComponent.jsx" {4-6} showLineNumbers',title:'"CountUpComponent.jsx"',"{4-6}":!0,showLineNumbers:!0},'   const CountUpComponent = ({ start, end, title }) => {\n      return (\n            // Other Sections of CountUp component\n         <div className="font-title text-2xl">\n            <CountUp start={start} end={end} />+\n         </div>\n            // Other Sections of CountUp component\n         );\n   };\n')),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," used above is a static text that follows the count-up number, it indicates that the number is increasing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This div element displays the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," passed on to the component. It has CSS class applied to set the specific shade. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CountUpComponent.jsx" {4} showLineNumbers',title:'"CountUpComponent.jsx"',"{4}":!0,showLineNumbers:!0},'   const CountUpComponent = ({ start, end, title }) => {\n      return (\n            // Other Sections of CountUp component\n         <div className="text-slate-500">{title}</div>\n            // Other Sections of CountUp component\n         );\n   };\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The last line of the code exports the ",(0,o.kt)("inlineCode",{parentName:"p"},"CountUpComponent")," as the default export of the module, making it available to use in other parts of the application."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CountUpComponent.jsx" {8} showLineNumbers',title:'"CountUpComponent.jsx"',"{8}":!0,showLineNumbers:!0},'   import CountUp from "react-countup";\n\n      const CountUpComponent = ({ start, end, title }) => {\n         return (\n            // Sections of CountUp component\n         );\n      };\n   export default CountUpComponent;  \n')))),(0,o.kt)("h2",{id:"hero-section"},"Hero Section"),(0,o.kt)("p",null,"The code involved in this section is a blend of JavaScript and HTML language. JavaScript is used for the dynamic logic and functionality, while HTML is used to structure and display the content on the web page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here's a breakdown of the code to understand it's functionality:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here, we have imported the ",(0,o.kt)("inlineCode",{parentName:"p"},"CountUpComponent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HeroSwiper")," components. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSection.astro" showLineNumbers',title:'"HeroSection.astro"',showLineNumbers:!0},'    import CountUpComponent from "./CountUpComponent.jsx";\n    import HeroSwiper from "./HeroSwiper.tsx";\n')),(0,o.kt)("p",{parentName:"li"},"The detailed information about the ",(0,o.kt)("strong",{parentName:"p"},"CountUpComponent")," is provided in the above section of this document. Whereas, the description regarding ",(0,o.kt)("strong",{parentName:"p"},"HeroSwiper")," component will be explained in the further document.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An array is created with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," which contains the images names. This data will be passed as a prop element to ",(0,o.kt)("inlineCode",{parentName:"p"},"HeroSwiper")," component."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSection.astro" showLineNumbers',title:'"HeroSection.astro"',showLineNumbers:!0},'    const data = [\n      "swiperImage1.png",\n      "swiperImage1.png",\n      "swiperImage1.png",\n      "swiperImage1.png",\n    ];\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here's the description of the below code section: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSection.astro" {5-8,9,11-25} showLineNumbers',title:'"HeroSection.astro"',"{5-8,9,11-25}":!0,showLineNumbers:!0},'   <section class="space-y-4 xl:space-y-8 2xl:space-y-12 3xl:space-y-24 " >\n      {/* Text of the HeroSection */}\n         <div class="flex flex-col md:flex-row gap-6 lg:gap-20 ">\n            <div class="w-full space-y-2 md:w-2/4">\n               <button\n               class="flex items-center bg-gray-100 text-sm lg:text-base px-2 py-1 rounded-full\n               hover:bg-gray-200 active:bg-gray-100 transition-all "\n               >\n                  <a href="/guidelines" class="px-3">Visit Our Guidelines</a>\n                     {/* Svg for arrow in button */}\n                 <svg\n                  width="24"\n                  height="24"\n                  viewBox="0 0 24 24"\n                  fill="none"\n                  xmlns="http://www.w3.org/2000/svg"\n                 >\n                  <rect width="24" height="24" rx="12" fill="#E4E7EC"></rect>\n                  <path\n                     d="M6.16663 12H17.8333M17.8333 12L12 6.16669M17.8333 12L12 17.8334"\n                     stroke="#101828"\n                     stroke-width="1.5"\n                     stroke-linecap="round"\n                     stroke-linejoin="round"></path>\n                 </svg>\n               </button>\n   </section>\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," element in this section represents a ",(0,o.kt)("strong",{parentName:"p"},"clickable")," button. It has styles applied as per our requirements. It is represented by the lines ",(0,o.kt)("strong",{parentName:"p"},"5-8"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inside this section there is an ",(0,o.kt)("inlineCode",{parentName:"p"},"<a> anchor")," element representing the ",(0,o.kt)("inlineCode",{parentName:"p"},"hyperlink")," wrapped in the button. It has the text displaying ",(0,o.kt)("strong",{parentName:"p"},'"Visit Our Guidelines"')," which is linked to the ",(0,o.kt)("a",{parentName:"p",href:"https://tnp.tcetmumbai.in/guidelines/"},(0,o.kt)("em",{parentName:"a"},"Guidelines")),". It is represented by line ",(0,o.kt)("strong",{parentName:"p"},"9"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Introducing the ",(0,o.kt)("inlineCode",{parentName:"p"},"svg")," icon, it is a ",(0,o.kt)("strong",{parentName:"p"},"graphical icon")," which has made in use for the arrow in button. It's code is provided with the specifications of svg's ",(0,o.kt)("inlineCode",{parentName:"p"},"structures")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"attributes"),". It is represented by the lines ",(0,o.kt)("strong",{parentName:"p"},"11-25"),"."))),(0,o.kt)("p",null,"The result of this code represents the SVG as a rounded rectangle with a light gray fill, and it has three lines forming an arrow shape. The arrow points horizontally in a direction from left to right, and its lines have a dark gray stroke with rounded endpoints and corners."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," element used here is for the purpose to display a custom font with varying text size based on screen size. It displays quoted text. We have used it to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"Headlines")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"paragraph")," in our web page."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSection.astro" {3-5} showLineNumbers',title:'"HeroSection.astro"',"{3-5}":!0,showLineNumbers:!0},'   <section\n   // Other Sections of HeroSection component\n      <div class="font-title text-2xl lg:text-3xl xl:text-[2.75rem] xl:leading-tight">\n         "Unlock Your Career Potential with Training And Placement Cell - Where Dreams Meet Opportunities!"\n      </div>\n   // Other Sections of HeroSection component\n   </section>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"View more")," element in this section, is programmed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"<a> anchor")," element. The CSS classes are applied to it including the ",(0,o.kt)("strong",{parentName:"p"},"hover effect"),". The anchor element here is representing the ",(0,o.kt)("inlineCode",{parentName:"p"},"hyperlink")," which is redirecting to ",(0,o.kt)("a",{parentName:"p",href:"https://tnp.tcetmumbai.in/about-us/"},(0,o.kt)("em",{parentName:"a"},"About Us")),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSection.astro" {4-10} showLineNumbers',title:'"HeroSection.astro"',"{4-10}":!0,showLineNumbers:!0},'   <section\n      // Other Sections of HeroSection component\n         <div>\n            <a\n               href="/about-us"\n               class="px-4 py-2 text-slate-600 rounded-xl mr-auto border border-gray-300 \n               hover:bg-gray-100 active:bg-gray-50 transition-all "\n            >\n           View More\n            </a>\n         </div>\n      // Other Sections of HeroSection component\n   </section>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The  CountUpComponent displayed in the code handles the ",(0,o.kt)("strong",{parentName:"p"},"counting animation")," of numbers. There are props passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"CountUpComponent"),", which are as follows:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'client:only="react":')," It has a specific purpose within the CountUpComponent component. It is used to determine whether the code is running or not on the client side with React.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'title="Number of students placed":')," This provides title for the count. Here it represents the number of students placed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"start={0}:")," It determines the starting value of the count.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"end={}:")," This prop determined the ending value."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSection.astro" {4-9} showLineNumbers',title:'"HeroSection.astro"',"{4-9}":!0,showLineNumbers:!0},'<section\n      // Other Sections of HeroSection component\n         <div>\n            <CountUpComponent\n               client:only="react"\n               title="Number of students placed"\n               start={0}\n               end={852}\n            />\n         </div>\n      // Other Sections of HeroSection component\n</section>\n')))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Similar steps were carried out for adding multiple ",(0,o.kt)("strong",{parentName:"p"},"CountUp Components"),".")),(0,o.kt)("figure",null,(0,o.kt)("img",{src:a,style:{border:"2px solid gray"}}),(0,o.kt)("center",null,(0,o.kt)("b",null,(0,o.kt)("figcaption",null,"Hero Section")))),(0,o.kt)("h2",{id:"heroswiper-component"},"HeroSwiper Component"),(0,o.kt)("p",null,"The code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"HeroSwiper")," Component is programmed using Swiper library for creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"swiper carousel"),". It is a custom implementation based on Swiper library."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Importing the necessary components and modules from the ",(0,o.kt)("strong",{parentName:"p"},'"swiper"')," library. ",(0,o.kt)("strong",{parentName:"p"},"SwiperSlide")," and ",(0,o.kt)("strong",{parentName:"p"},"Swiper")," are components used for creating a swiper carousel. For enabling autoplay functionality we have used ",(0,o.kt)("strong",{parentName:"p"},"Autoplay")," module. To import the CSS styles in swiper library, ",(0,o.kt)("strong",{parentName:"p"},'"swiper/css"')," is imported."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSwiper.tsx" showLineNumbers',title:'"HeroSwiper.tsx"',showLineNumbers:!0},'     import { SwiperSlide, Swiper } from "swiper/react";\n     import { Autoplay } from "swiper";\n    \n     import "swiper/css";\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The below code declares the name ",(0,o.kt)("inlineCode",{parentName:"p"},"HeroSwiper")," to a functional component and take ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," as imput. ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," is an array of strings."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSwiper.tsx" {1} showLineNumbers',title:'"HeroSwiper.tsx"',"{1}":!0,showLineNumbers:!0},"     const HeroSwiper = ({ data }: { data: string[] }) => {\n        return (\n         // Other Sections of HeroSwiper component\n         );\n   };\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Swiper")," component is used here to create carousel. The program between the opening and closing tags of the Swiper component will enclose the content of the carousel in it."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSwiper.tsx" {3-6} showLineNumbers',title:'"HeroSwiper.tsx"',"{3-6}":!0,showLineNumbers:!0},"   const HeroSwiper = ({ data }: { data: string[] }) => {\n      return (\n         <Swiper\n            // Other Sections of HeroSwiper component\n            >\n         </Swiper>\n         );\n   };\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Here's the code description for the below code section:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSwiper.tsx" {6-8,9,19,20,21} showLineNumbers',title:'"HeroSwiper.tsx"',"{6-8,9,19,20,21}":!0,showLineNumbers:!0},'   const HeroSwiper = ({ data }: { data: string[] }) => {\n      return (\n         <>\n            <Swiper\n\n               autoplay={{\n                  delay: 2500,\n               }}\n               slidesPerView={1}\n               // added breakpoints to swiper. mobile one photo, tablet 2 photos\n               breakpoints={{\n                  1024: {\n                     slidesPerView: 2,\n                  },\n                  1720: {\n                     slidesPerView: 3,\n                  }\n               }}\n               spaceBetween={50}\n               loop={true}\n               modules={[Autoplay]}\n               className="rounded-xl"\n               // onSwiper={(swiper) => console.log(swiper)}\n               // onSlideChange={() => console.log("slide change")}\n            >\n            </Swiper>\n          </>\n      );\n   };\n')))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The below code describes the ",(0,o.kt)("inlineCode",{parentName:"p"},"autoplay")," prop. This prop accepts various options. Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"delay")," option is set to 2500 ms, which means it will directly transition to the next slide in every 2.5 secs. It is represented by lines ",(0,o.kt)("strong",{parentName:"p"},"6-8"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"slidesPerView")," prop component to 1 means only one slide will be visible at a particular time. It is represented by line ",(0,o.kt)("strong",{parentName:"p"},"9"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"spaceBetween")," prop of the Swiper component to 50 means it adds a space of 50 pixels between each slide. It is represented by line ",(0,o.kt)("strong",{parentName:"p"},"19"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loop")," prop set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," enables the carousel to loop continuously. Once it reaches the last slide, it will jump back to the first one. It is represented by line ",(0,o.kt)("strong",{parentName:"p"},"20"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," prop containing ",(0,o.kt)("inlineCode",{parentName:"p"},"Autoplay")," enables the autoplay functionality.  It is represented by line ",(0,o.kt)("strong",{parentName:"p"},"21"),"."))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the code, we have used ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," function which ",(0,o.kt)("strong",{parentName:"p"},"iterates")," over the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," array. For each item in data, it creates ",(0,o.kt)("inlineCode",{parentName:"p"},"SwiperSlide")," component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," prop is set to d, which uniquely identifies each slide. There is an ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," element rendered inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"SwiperSlide"),". There is also an ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," attribute which is used to generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," for the image used. There are CSS classes applied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," element."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="HeroSwiper.tsx" {7-12,18} showLineNumbers',title:'"HeroSwiper.tsx"',"{7-12,18}":!0,showLineNumbers:!0},'   const HeroSwiper = ({ data }: { data: string[] }) => {\n      return (\n         <>\n            <Swiper\n               // Other Sections of HeroSwiper component\n            >\n               {data.map((d) => (\n                  <SwiperSlide key={d} >\n                     <img className="w-full md:w-3/4 lg:w-max mx-auto" src={`/Hero/${d}`} alt="image" \n                     width={844} height={448} />\n                  </SwiperSlide>\n               ))}\n            </Swiper>\n         </>\n            );\n   };\n\nexport default HeroSwiper;\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The code statement represented by line ",(0,o.kt)("strong",{parentName:"p"},"18")," exports the ",(0,o.kt)("inlineCode",{parentName:"p"},"HeroSwiper")," component as the default export of this module. Which means it is allowed to be imported and used in other parts of the program."))),(0,o.kt)("figure",null,(0,o.kt)("img",{src:i,style:{border:"2px solid gray"}}),(0,o.kt)("center",null,(0,o.kt)("b",null,(0,o.kt)("figcaption",null,"Hero SwiperSlide")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more comprehensive and detailed information, you can refer the official Swiper library documentation-",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://swiperjs.com/get-started"},"Swiper.js")))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The ",(0,o.kt)("a",{parentName:"em",href:"hero"},(0,o.kt)("strong",{parentName:"a"},"Hero Section of Home Page"))," was succesfully executed! Let's move on and see how we created the ",(0,o.kt)("a",{parentName:"em",href:"training"},(0,o.kt)("strong",{parentName:"a"},"Training"))," component of the ",(0,o.kt)("strong",{parentName:"em"},(0,o.kt)("a",{parentName:"strong",href:"https://tnp.tcetmumbai.in"},"TNP Website")),".")))}h.isMDXComponent=!0}}]);