import React, { useState } from "react";
// import Swiper core and required modules
import "./swiper.css";
import { Navigation, Thumbs, FreeMode, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectPreview from "./ProjectPreview";

const projects = [
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"],
  },
  {
    name: "project2",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"],
  },
  {
    name: "project3",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"],
  },
  {
    name: "project4",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"],
  },
  {
    name: "project5",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"],
  },
];

const ProjectSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [nameDes, setNameDes] = useState({
    name: projects[0].name,
    desc: projects[0].description,
  });

  const handleSlideChange = (swiper) => {
    const tempProjects = [...projects];
    const currentNameDesc = tempProjects.filter(
      (project) => swiper.activeIndex === tempProjects.indexOf(project)
    );
    setNameDes((previousNameDesc) => ({
      ...previousNameDesc,
      name: currentNameDesc[0].name,
      desc: currentNameDesc[0].description,
    }));
  };

  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section id="live" className="relative px-5  pt-10 xl:pt-20"
    style={{
      background: "linear-gradient(180deg, #000000 0%, #291A60 78.96%, #060314 100%)"
    }}
    >
      <span className="inline-block px-3 bg-gray-700 md:mx-12 rounded-xl text-slate-50">
        Developed Projects
      </span>
      <div className="flex flex-col my-3 md:gap-3 md:mx-12">
        <div className="text-3xl font-semibold md:text-5xl text-stone-50 font-title">{nameDes.name}</div>
        <div className="text-gray-400 ">{nameDes.desc}</div>
      </div>
      <div className="md:grid md:grid-cols-10 items-center mt-4 lg:mt-8">
        <div className="items-center justify-center col-span-8 ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="mySwiper2 rounded-xl lg:rounded-3xl"
            onSlideChange={handleSlideChange}
            pagination={{
              el: ".project-pagination",
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
              disabledClass: "swiper-button-disabled",
            }}
          >
            {projects.map((project) => {
              return (
                <SwiperSlide className="" >
                  <ProjectPreview
                    img={project.img}
                    tools={project.tools}
                    name={project.name}
                    description={project.description}
                  />
                </SwiperSlide>
              );
            })}
            <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 rounded-full">
              <img src="/img/misc/Left.svg" alt="prev-image-btn" />
            </div>
            <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 rounded-full">
              <img src="/img/misc/Right.svg" alt="next-image-btn" />
            </div>
          </Swiper>
          <div>
            <div className="project-pagination flex items-center justify-center gap-2 mt-5"></div>
          </div>
        </div>
        <div className="items-center justify-center hidden md:flex md:col-span-2 md:pb-10">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={
              20 // loop={true}
            }
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            direction="vertical"
          >
            {projects.map((projectInfo) => (
              <SwiperSlide className="swiper-vertical">
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white ">
                  {projectInfo.name}
                </span>
                <img
                  src={"/img/ProjectSection/" + projectInfo.img}
                  className="bg-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img src="/img/ProjectSection/shadow.svg" />
    </section>
  );
};

export default ProjectSection;
