---
title: Event Page
id: event-page
description: Event Page Component in T&P Website
sidebar_label: Event Page
keywords: [event, purpose, objective]
---

The **Event** page of the website gives you information about various training and placement events falling under aptitude training and student development programs. It is accesible through the navigation bar of the [**TNP Website**](https://tnp.tcetmumbai.in/).

### Adding Carousel to the Hero Section

**Here are the steps we performed to add a Caraousel in our Event page**

1. Opening `HeroCarousel.tsx` file in our projects root directory.

2. The array of objects named `heroSlideObj` that contains the image links and alt text for the event, will be loacted. For each object in the array, it generates a `<SwiperSlide>` component with an `<img>` element inside.

    ```jsx title="HeroCarousel.tsx" {3-4} showLineNumbers
    const heroSlideObj = [
        {
            img: "EventPage.png",
            alt: "Event 1",
        }
    ]
    ```

3. The `<Swiper>` component is rendered, which is a container for the event images. It accepts several props to configure its behavior and appearance. 

    ```jsx title="HeroCarousel.tsx" {4-7} showLineNumbers
    const heroSlide = heroSlideObj.map((data) => {
        return (
            <SwiperSlide>
                <img
                src={`/EventsPage/${data.img}`}
                className="object-cover h-full w-full"
                alt={data.alt}
            />
        </SwiperSlide>
        );
    });
    ```

4. The `modules` prop is used to specify additional modules for the `Swiper` library. The `autoplay` prop is used to enable autoplay for the slideshow. The `spaceBetween` prop defines the spacing between each slide. The `slidesPerView` prop sets the number of slides to display at once. The `onSwiper` and `onSlideChange` props are optional event handlers. 

    ```jsx title="HeroCarousel.tsx" {5-13} showLineNumbers
    return (
        <Swiper
            className="h-auto xl:w-[540px] lg:w-[480px] md:w-full border rounded-lg xl:rounded-xl "
            // install Swiper modules
            modules={[Autoplay]}
            autoplay={{
                delay: 3000,
            }}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            {heroSlide}
        </Swiper>
    );
    ```

5. Each object should have a `img` property that specifies the image file name and an`alt` property that specifies the alternative text for the image.

6. Save the changes.

7. Run `yarn dev` on the terminal to see the changes made in your local environment. 

### Adding Purpose of the Event Section

**After adding Carousel, let's have a look at  how we implemented the Purpose of the Event Section**

1. Opening `index.astro` file inside the `Hero` component our projects root directory.

2. Locate the following code snippet inside the component or section where you want to display it.

    ```jsx title="index.astro" {5-7,9-11} showLineNumbers
    <div>
      //Other styling
        <div class="md:w-1/2 pr-8">
          <h1 class="text-[42px] font-title">Purpose</h1>
          <p class="lg:text-lg text-sm  font-sans font-light text-[#475466]">
            {purpose}
          </p>
        </div>
        <div class="md:w-1/2 w-full h-full lg:mt-0 mt-6">
          <Hero heroSlideObj={heroSlideObj} client:load />
        </div>
      // Other parts of the component
    </div>
    ```

3. Replace the `{/* Add your purpose text here */}` comment with the actual purpose text you want to display.

4. Save the changes.

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

**On executing the above steps, the individual cards look like this:**

import Hero_img from "/docs/projects/tnp-website/assets/Hero_img.png";

<img src={Hero_img} style={{ border: "2px solid gray" }} />

<br />
<br />


### Adding Objective of the Event Section

**Let's have a look at how we integrated this section in our Event page.**

1. Opening `index.astro` file inside the `Testimonial` component our projects root directory.

2. Insert the following code snippet into your HTML or JSX file where you want to display the objective:

    ```jsx title="index.astro" {3-6} showLineNumbers
    <div>
      // Other parts and styling of the container
        <h1 class="font-title text-[42px] mb-[15px]">Objective</h1>
        <p class="lg:text-lg text-sm  font-sans font-light text-[#475466] lg:w-[60%] md:w-[70%]">
            {objective}
        </p>
      // Other parts of the container
    </div>
    ```

3. Replace `{objective}` in the code with the actual variable or string that contains the `objective` content. This is where you provide the objective text that you want to display on the page.

4. Save the file. 

5. Run `yarn dev` on the terminal to see the changes made in your local environment.

import Objective from "/docs/projects/tnp-website/assets/objective.png";

<img src={Objective} style={{ border: "2px solid gray" }} />

### Adding Faculty Testimonial Section

1. Opening `Testimonial.jsx` file in our projects root directory.

2. Pass the testimonial data to the `Testimonial` component as a prop. This can be done by defining a variable that holds the testimonial data and passing it as a prop to the `Testimonial` component:

    ```jsx title="Testimonial.jsx" {18} showLineNumbers
    const testimonialData = [
        // Array of testimonial objects with properties like review, photo, position, name, and department
        // Add your testimonial objects here
    ];
    ```
3. For each `testimonial` object, it generates a `<SwiperSlide>` component with the testimonial content inside. It has a inline `style`, `<p>`, `<img>` element for applying a radial gradient background, to display the text and the photo respectievely. 

    ```jsx title="Testimonial.jsx" {6,8-13,15,18,21} showLineNumbers
    return (
      <SwiperSlide>
        // Other styling properties for SwiperSlide
        <div className="flex flex-col items-center text-center p-8">
          <div className="absolute bottom-28 left-8 hidden md:block ">
            <img src="/misc/purpleTesti.svg" className="h-30 " />
          </div>
          <p className="mb-8 md:text-lg text-slate-800">{data.review}</p>
          <img
            src={`/EventsPage/${data.photo}`}
            className="object-cover h-20 w-20 rounded-full"
            alt=""
          />
          <div className="bg-white text-sm text-slate-700 py-px px-2 mt-4 mb-1 rounded-full">
            {data.position}
          </div>
          <div className="my-1 font-semibold text-lg">
            {data.name}
          </div>
          <div className="text-slate-500">
            {data.department}
          </div>
        </div>
      </SwiperSlide>
    );
    ```
4. The `<Swiper>` component is rendered, which is a container for the `testimonials`. It accepts several props to configure its behavior and appearance. The `modules` prop is used to specify additional modules for the `Swiper` library. The `autoplay` prop is used to enable autoplay for the testimonials. The `pagination` prop configures the pagination component for the testimonials. The `clickable` property is set to true, enabling clickable pagination bullets. The `spaceBetween` prop defines the spacing between each testimonial. The `slidesPerView` prop sets the number of testimonials to display at once. 

    ```jsx title="Testimonial.jsx" {6-8,11-17,20-21,23,} showLineNumbers
    return (
    <div>
      <Swiper
        className="h-auto my-7"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
        }}

        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          // Other config properties
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {TestiSlide}
        <div className="m-10"></div>
        // Styling Files
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
  ```

3. Make sure you have the testimonial image file available and it's location. Within the function `Testimonial`, insert or edit the following code snippet 

    ```jsx title="Testimonial.jsx" {1} showLineNumbers
        <img src="/misc/purpleTesti.svg" className="h-30" />
    ```

This code snippet adds an image element to the `testimonial`, `img src` displaying the image location inside the `" "` in the svg format.

7. Save the file. 

8. Run `yarn dev` on the terminal to see the changes made in your local environment.

**How to add faculty information to the testimonial**

1. Opening `index.astro` file in `Testimonial` component in our projects root directory.

2. Inside the `testiObj` array of the code, add a faculty's details which would be defined as follows:

    ```jsx title="index.astro" {4-9} showLineNumbers
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

_Congratulations, we have successfully implemented the [**Event Page**](event-page). Let's continue to find out how we implemented the [**Companies**](companies) Section of the [**TNP website**](https://tnp.tcetmumbai.in/). _