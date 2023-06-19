---
title: Industry Interaction
id: industry-interaction
description: Industry Interaction Component in T&P Website
sidebar_label: Industry Interaction
keywords: [interaction, industry]
---

To bridge the gap between academics and expectations from industries, *TNP cell of TCET* facilitates students to engage with various industries, gain practical exposure and develop industry relevant skills. 
The [**Industry Interaction**](https://tnp.tcetmumbai.in/industry-interaction/) page of *TNP website* provides you insights on various programmes and interactions taking place between industries and students in TCET. This page is accesible through the navigation bar of [**TNP website**](https://tnp.tcetmumbai.in/). 

### Creating a layout 

To set up a basic layout of the page and to create a section that would briefly describe the content of the page, **following steps are executed:**

1. Creating a **"industry-interaction.astro"** file.

2. We need to define an array which will store all the information that will be used throughout the page. The `IndustryInteractionData` array is defined with the following properties:

    ```jsx title="industry-interaction.astro" showLineNumbers
        const IndustryInteractionData: IndustryInteractionType[] = [
            {
                companyLogo: //company logo comes here,
                companyName: //company name,
                themeColor: //define the theme of the card,
                description: //brief description of the event,
                subdescription: //subdescription of the event,
                eventImages: [ //array of images along with alt text
                 {
                    img: ,
                    alt: ,
                },
                {...}
                ],
            },
        ]
    ```

3. The next step is to set the main layout of the page. Within the `<Layout>` component, the _title_ and _description_ of the page is defined. The classes are defined under `<main>` component defining the spacing and padding. 

    ```jsx title="industry-interaction.astro" {2,3,4} showLineNumbers
       <Layout
            title= // Title of the page
            description= //Description of the page
            >
            <main class="block !space-y-6 md:!space-y-12 lg:!space-y-24 w-full px-8 md:px-16"
            >
             // Define the layout of the page
            </main>
        </Layout>
    ```

4. The **Industry Interaction section** of the page is wrapped in a `<div>` component with a class defining a flex container.  Within this container, the first `<div>` element contains `<p>` elements with the title **"Industry Interaction"** and a description text. 

    ```jsx title="industry-interaction.astro" {2-7} showLineNumbers
        <div class="w-full flex flex-col-reverse md:flex-row">
            <div class="h-full xl:w-1/2 md:w-1/2 sm:w-full p-3">
                <p class="text-4xl 2xl:text-6xl font-title mb-4">Industry Interaction</p>
                <p class="text-slate-600">
                // description text
                </p>
            </div>
            // other elements
        </div>
    ```

5. The second `<div>` element inside the container defines classes to create background circles for creating a visually pleasing page. 

    ```jsx title="industry-interaction.astro" showLineNumbers
            <div class="absolute bg-gray-400 w-96 h-96 -left-14 top-25 -z-10 rounded-full flex justify-center bg-gradient-to-l from-gray-100 to-white">
            <div class="bg-white w-72 h-72 rounded-full mt-12"></div>
            </div>

    ```

6. The third `<div>` element is defined with a flex layout to create a container in which the data in `IndustryInteractionData` array will be iterated over to create cards for each data item. 

    ```jsx title="industry-interaction.astro" {5-15} showLineNumbers 
        {
            IndustryInteractionData.slice(0,2).map((data) => (
              <div class={`...`} // a class defining the size and flex layout
                style={{...}} > //setting the border color and bg color according to the theme color
                <img src={data.companyLogo} class="rounded-full w-12" />
                <p class=" mb-1 mt-3 ">{data.companyName}</p>
                <p class="text-slate-600 font-light text-sm">
                  {data.subdescription}
                </p>
                <a
                  href={'#'+data.companyName}
                  class={`...`} 
                >
                  Read More ↓
                </a>
              </div>
            ))
        }  
    ```

Each card contains **company logo**, **name**, **subdescription** and **Read More link**. 

8. After the **"Industry Interaction"** section, a container is defined where event sections for each company will be described based on the array data. 

    ```jsx title="industry-interaction.astro" {10,13,15,18} showLineNumbers
         {
          IndustryInteractionData.map((data) => (
            <div class={`...`}
                 id={data.companyName}
                 style={{'...'}} //set the background color according to the theme color of the data
            >
            <div class={`...`} >
              <img
                  class="rounded-full w-12 mb-4 mt-4"
                  src={data.companyLogo}
               />
                <p class="text-3xl font-title mb-4">
                  {data.companyName} Industry Interaction
                </p>
                <p class="text-sm xl:text-base text-slate-600 ">{data.description}</p>
              </div>
              <div class=" flex justify-center w-full lg:w-1/2">
                <IndustryInteractionSwiper client:load data={data.eventImages} />
              </div>
            </div>
          ))
         }
    ```

Each event section will contain **logo**, **name**, **description** and `IndustryInteractionSwiper` component. The `IndustryInteractionSwiper` component is rendered for each event item using the `data.eventImages` as data drop. 

8. Save your progress. 

<h3>This is what the page's hero section looks like:</h3>

import industryheroImg from "/docs/projects/tnp-website/assets/industryhero.png";


<img src={industryheroImg} style={{border: "2px solid grey"}}/>

<br /><br />

In the next part, we are going to see how we created **"IndustryInteractionSwiper"** component. 

### Creating IndustryInteractionSwiper

In order to create slides of images, we need to create a react functional component. 

**Here's how we implemented this component:**

1. Creating a **IndustryInteractionSwiper.tsx** file. 

2. Importing all the required dependencies, `imageLink` from `../../env` module and necessary CSS styles for **Swiper**. 
    
    ```jsx title="IndustryInteractionSwiper.tsx" showLineNumbers
        import { Swiper, SwiperSlide } from "swiper/react";
        import { Pagination, A11y, Autoplay } from "swiper";
        import type { imageLink } from "../../env";
        import "swiper/css";
        import "swiper/css/pagination";
    ```

3. Creating a react functional component `IndustryInteractionSwiper` in the following way:

    ```jsx title="IndustryInteractionSwiper.tsx" showLineNumbers
        const IndustryInteractionSwiper: React.FC<{
            data: imageLink[];
        }> = ({ data }) => {
            return (
                // Component JSX goes here
            );
        };

        export default IndustryInteractionSwiper;
    ```

4. Creating a `Swiper` component within the component defined above to define the behaviour and appearance of the component. This can be done in the following way:

    ```jsx title="IndustryInteractionSwiper.tsx" {2-5} showLineNumbers
        <Swiper
            modules={[A11y, Autoplay]}
            autoplay={{
            delay: 2500,
            }}
            spaceBetween={50} //Defining the space between slides
            slidesPerView={1} //Specifying how many slides should be visible at a time
        >
        {/* Slides go here */}
        </Swiper>

    ```
 In this step, `"modules"` prop is used to enable additional features like _accesibility_ and _autoplay_. The autoplay prop is defined to advance every other slide in 2.5 seconds.

5. The`data` array is mapped inside the **Swiper component** and `SwiperSlide` component is structured for each data array item.
    
    ```jsx title="IndustryInteractionSwiper.tsx" {2-4} showLineNumbers
        {data.map((d) => (
            <SwiperSlide key={d.alt}>
                {/* Slide content goes here */}
            </SwiperSlide>
        ))}
    ```

6. `SwiperSlide` component is created to define the content for each slide. An `<img>` element is defined as follows: 

    ```jsx title="IndustryInteractionSwiper.tsx" {3,5,7} showLineNumbers
        {data.map((d) => (
            <SwiperSlide key={d.alt}>
                <span className="w-full h-[130%] block" >

                <img src={d.img} alt={d.alt} width={600} height={400}className="w-full aspect-video rounded-2xl" />

                </span>
            </SwiperSlide>
        ))}    
    ```
 The `src` prop is set to the `img` and `alt` property of the current data item.

7. Custom CSS is defined to style the component slides. 

8. Save the changes.

9. Run `yarn dev` to see the changes in your local environment.


<h3>Here's the event section with the Swiper component:</h3>


import industryImg from "/docs/projects/tnp-website/assets/industryInteraction.png";

<img src={industryImg} style={{border: "2px solid grey"}}/>
<br /><br />

_Congratulations, we have successfully implemented the [**Industry Interaction**](industry-interaction) page. Let's continue to find out how we implemented the [**Event Page**](student-award) of the [**TNP website**](https://tnp.tcetmumbai.in/). _