---
title: Event Page
id: event-page
description: Event Page Component in T&P Website
sidebar_label: Event Page
keywords: [astrojs, open-source, docs]
---

The **Event** page of the website gives you information about various training and placement events falling under aptitude training and student development programs. It is accesible through the navigation bar of the [**TNP Website**](https://tnp.tcetmumbai.in/).

### Adding Event to the page

**How to add Image of the event to the page**

1. Opening `HeroCarousel.jsx` file in our projects root directory.

2. The array of objects named `heroSlideObj` that contains the image links and alt text for the event, will be loacted. 

    ```jsx title="HeroCarousel.tsx" {22-25} showLineNumbers
    const heroSlideObj = [
        {
            img: "EventPage.png",
            alt: "Event 1",
        }
    ]
    ```

3. Each object should have a `img` property that specifies the image file name and an`alt` property that specifies the alternative text for the image.

4. Save the changes.

5. Run `yarn dev` on the terminal to see the changes made in your local environment. 

**How to add Purpose of the event to the page**

1. Opening `index.astro` file inside the `Hero` component our projects root directory.

2. Locate the following code snippet inside the component or section where you want to display it.

    ```jsx title="index.astro" {10-14} showLineNumbers
    <p class="lg:text-lg text-sm font-sans font-light text-[#475466]">
        {/* Add your purpose text here */}
    </p>
    ```

3. Replace the `{/* Add your purpose text here */}` comment with the actual purpose text you want to display.

4. Save the changes.

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

**On executing the above steps, the individual cards look like this:**

import Hero_img from "/docs/projects/tnp-website/assets/Hero_img.png";

<img src={Hero_img} style={{ border: "2px solid gray" }} />

<br />
<br />


### Adding Objective 

**How to add Objective to the event**

1. Opening `index.astro` file inside the `Testimonial` component our projects root directory.

2. Insert the following code snippet into your HTML or JSX file where you want to display the objective:

    ```jsx title="index.astro" {4-17} showLineNumbers
    <div class="my-8 xl:my-16 2xl:my-20 block w-full py-8 px-8 md:px-16"
        style={{
            background:
                "radial-gradient(42.83% 57.11% at 50% 100%, rgba(212, 185, 255, 1) 0%, rgba(251, 248, 255, 1) 100%)",
        }}
    >
        <h1 class="font-title text-[42px] mb-[15px]">Objective</h1>
        <p
            class="lg:text-lg text-sm  font-sans font-light text-[#475466] lg:w-[60%] md:w-[70%]"
        >
            {objective}
        </p>
    </div>
    ```

3. Replace `{objective}` in the code with the actual variable or string that contains the `objective` content. This is where you provide the objective text that you want to display on the page.

4. Save the file. 

5. Run `yarn dev` on the terminal to see the changes made in your local environment.


### Adding faculty testimonial

**How to add testimonial to the page**

1. Opening `Testimonial.jsx` file in our projects root directory.

2. Pass the testimonial data to the `Testimonial` component as a prop. This can be done by defining a variable that holds the testimonial data and passing it as a prop to the `Testimonial` component:

    ```jsx title="Testimonial.jsx" {18} showLineNumbers
    const testimonialData = [
        // Array of testimonial objects with properties like review, photo, position, name, and department
        // Add your testimonial objects here
    ];
    ```

3. Make sure you have the testimonial image file available and it's location. Within the function `Testimonial`, insert or edit the following code snippet 

    ```jsx title="Testimonial.jsx" {29} showLineNumbers
    <img src="/misc/purpleTesti.svg" className="h-30" />
    ```
This code snippet adds an image element to the `testimonial`, `img src` displaying the image location inside the `" "` in the svg format.

4. The `h-30` class sets the height of the image to 30 units. You can adjust the height by modifying the class or using inline styles.

5. Save the file. 

6. Run `yarn dev` on the terminal to see the changes made in your local environment.

**How to add faculty information to the testimonial**

1. Opening `index.astro` file in `Testimonial` component in our projects root directory.

2. Inside the `testiObj` array of the code, add a faculty's details which would be defined as follows:

    ```jsx title="index.astro" {4-12} showLineNumbers
    const testiObj = 
    [
        {
            name: "Name of the Faculty",
            photo: "/faculty-image.jpg",
            review:
                "Reviews and detail about the Faculty",
            position: "Position of the Faculty",
            department: "Department of the Faculty"
        }
    ]
    ```

3. Edit the above terms `name`. `photo`, `review`, `position`, `department` to include the faculty information to the testimonial. 

4. Save the file. 

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

**On executing the above steps, the individual cards look like this:**

import Testimonial_img from "/docs/projects/tnp-website/assets/Testimonial_img.png";

<img src={Testimonial_img} style={{ border: "2px solid gray" }} />

<br />
<br />
