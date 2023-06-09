---
title: Industry Interaction
id: industry-interaction
description: Industry Interaction Component in T&P Website
sidebar_label: Industry Interaction
keywords: [astrojs, open-source, docs]
---

To bridge the gap between academics and expectations from industries, *TNP cell of TCET* facilitates students to engage with various industries, gain practical exposure and develop industry relevant skills. 
The [**Industry Interaction**](https://tnp.tcetmumbai.in/industry-interaction/) page of *TNP website* provides you insights on various programmes and interactions taking place between industries and students in TCET. This page is accesible through the navigation bar of [**TNP website**](https://tnp.tcetmumbai.in/). 

### Creating image slideshow

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

    ```jsx title="IndustryInteractionSwiper.tsx"
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

### Yay! So we have succesfully executed the above steps and the slider component on the Industry Interaction page looks like this:
 
import industryImg from "../components/assets/industryInteraction.png";

<img src={industryImg} style={{border: "2px solid grey"}}/>

<br /><br />

:::info
   For additional informtion on JSX, refer the [**JSX documentation**](https://legacy.reactjs.org/docs/introducing-jsx.html).
   Also, learn about creating react components from the [**Components and Props**](https://legacy.reactjs.org/docs/components-and-props.html#function-components) documentation.
:::

<br/><br/>

Congratulations, we have successfully implemented the [**Industry Interaction**](industry-interaction) page. Let's continue to find out how we implemented the [**Event Page**](student-award) of the [**TNP website**](https://tnp.tcetmumbai.in/). 