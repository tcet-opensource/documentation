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

const projects = [
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  },
  {
    name: "project1",
    description: "random project description",
    img: "project.jpg",
    tools: ["react", "tailwind css", "brainkfu**"]
  }
];

const ProjectSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [nameDes, setNameDes] = useState({
    name: "name",
    desc: "description"
  });
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex text-xl font-semibold md:text-5xl">
          {"yeah"}
        </div>
        <div className="flex text-gray-400">
          {"desc"}
        </div>
      </div>
      <div className="md:grid md:grid-cols-4">
        <div className="flex items-center justify-center col-span-3">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff"
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="mySwiper2"
          >
            {projects.map(project => {
              return (
                <SwiperSlide>
                  <ProjectPreview img={project.img} tools={project.tools} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="items-center justify-center hidden md:flex md:col-span-1">
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
                <img src={"/img/ProjectSection/" + projectImg.img} />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
