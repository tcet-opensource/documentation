import React, { useRef, useState } from "react";
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
import clsx from "clsx";

const projects = [
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project2",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project3",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project4",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project5",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  }
];

const ProjectSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [nameDes, setNameDes] = useState({
    name: projects[0].name,
    desc: projects[0].description
  });

  const handleSlideChange = swiper => {
    const tempProjects = [...projects];
    const currentNameDesc = tempProjects.filter(
      project => swiper.activeIndex === tempProjects.indexOf(project)
    );
    setNameDes(p => ({
      ...p,
      name: currentNameDesc[0].name,
      desc: currentNameDesc[0].description
    }));
  };

  const pagination = {
    clickable: true,
    renderBullet: function(_, className) {
      return '<span class="' + className + '">' + "</span>";
    }
  };
  return (
    <div className="relative mx-5 my-10 md:my-10">
      <button className="inline-block px-2 bg-gray-700 md:mx-12 rounded-xl">
        Developed Projects
      </button>
      <div className="flex flex-col my-3 md:gap-3 md:mx-12">
        <div className="text-xl font-semibold md:text-5xl">
          {nameDes.name}
        </div>
        <div className="text-gray-400 ">
          {nameDes.desc}
        </div>
      </div>
      <div className="md:grid md:grid-cols-10">
        <div className="items-center justify-center col-span-8 md:flex">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff"
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="mySwiper2"
            onSlideChange={handleSlideChange}
            pagination={pagination}
          >
            {projects.map(project => {
              return (
                <SwiperSlide>
                  <ProjectPreview
                    img={project.img}
                    tools={project.tools}
                    name={project.name}
                    description={project.description}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="items-center justify-center hidden md:flex md:col-span-2 md:pb-10">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            direction="vertical"
          >
            {projects.map(projectImg =>
              <SwiperSlide className="swiper-vertical">
                <img
                  src={"/img/ProjectSection/" + projectImg.img}
                  className="rounded-lg"
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <div className="hidden md:shadow" />
    </div>
  );
};

export default ProjectSection;
