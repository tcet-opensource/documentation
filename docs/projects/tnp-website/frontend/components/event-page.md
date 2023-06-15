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

2. The array of objects named `heroSlideObj` that contains the image links and alt text for the event, will be loacted. For each object in the array, it generates a `<SwiperSlide>` component with an `<img>` element inside.

    ```jsx title="HeroCarousel.tsx" {22-25} showLineNumbers
    const heroSlideObj = [
        {
            img: "EventPage.png",
            alt: "Event 1",
        }
    ]
    ```

3. The `<Swiper>` component is rendered, which is a container for the event images. It accepts several props to configure its behavior and appearance. 

    ```jsx title="HeroCarousel.tsx" {46-56} showLineNumbers
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

    ```jsx title="HeroCarousel.tsx" {58-74} showLineNumbers
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

### Adding purpose of the event to the page

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

import Hero_img from "F:/documentation/docs/projects/tnp-website/frontend/components/assets/Hero_img.png";

<img src={CompanyCard_img} style={{ border: "2px solid gray" }} />

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
3. For each `testimonial` object, it generates a `<SwiperSlide>` component with the testimonial content inside. It has a inline `style`, `<p>`, `<img>` element for applying a radial gradient background, to display the text and the photo respectievely. 

    ```jsx title="Testimonial.jsx" {19-48} showLineNumbers
    return (
      <SwiperSlide
        className=" h-auto border-none rounded-lg xl:rounded-xl"
        style={{
          background:
            "radial-gradient(61.56% 85.33% at 50% 100%, rgba(212, 185, 255, 0.7) 0%, rgba(241, 232, 255, 0.3) 100%)",
        }}
      >
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

    ```jsx title="Testimonial.jsx" {51-96} showLineNumbers
    return (
    <div>
      <Swiper
        className="h-auto my-7"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        // pagination={{
        //     dynamicBullets: true,
        //   }}
        pagination={{ clickable: true }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {TestiSlide}
        <div className="m-10"></div>
        <style>{`
            .swiper-pagination-bullet-active {
              background-color: #344054;
            }
            // .swiper-pagination  {
            //   padding-top: 1rem;
            // }
          `}</style>
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

6. The `h-30` class sets the height of the image to 30 units. You can adjust the height by modifying the class or using inline styles.

7. Save the file. 

8. Run `yarn dev` on the terminal to see the changes made in your local environment.

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
