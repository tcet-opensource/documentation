import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Zoom } from "swiper";
import React from 'react';
import styles from './styles.module.css';
import ProjectCard from './ProjectCard';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";


const UnderDevelopmentProjects = () => {
    const underDevelopmentProjects = [
        {
            "image": "/img/project_image.jpg",
            "title": "Project 1",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!",
            "github": "#"
        },
        {
            "image": "/img/project_image.jpg",
            "title": "Project 2",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!",
            "github": "#"
        },
        {
            "image": "/img/project_image.jpg",
            "title": "Project 3",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!",
            "github": "#"
        },
        {
            "image": "/img/project_image.jpg",
            "title": "Project 4",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!",
            "github": "#"
        },
    ];

    const mappedSlides = underDevelopmentProjects.map((data) => {
        return (
            <SwiperSlide key={data.title} zoom={true}>
                <ProjectCard data={data}  />
            </SwiperSlide>
        );
    });

    return (
        <section id="cooking" className="overflow-hidden bg-[url('/img/under_development_projects_bg.png')] bg-no-repeat bg-cover bg-center  p-12 lg:p-20 flex flex-col">
            <h1 className="text-slate-50 font-semibold text-[2rem] lg:text-7xl font-title">Under Development Projects</h1>
            <h6 className="text-slate-300 font-normal text-lg mt-4">These are some projects under development</h6>
            <div className="flex items-center justify-center py-32 px-0 lg:px-24 lg:mt-10 ">
                <Swiper
                    className="w-full !overflow-visible "
                    id="under-development-projects"
                    // install Swiper modules
                    modules={[Navigation, FreeMode, A11y]}
                    freeMode={true}
                    spaceBetween={40}
                    slidesPerView={1}
                    breakpoints={{
                        420: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    navigation={{
                        prevEl: ".swiper-prev",
                        nextEl: ".swiper-next",
                        disabledClass: "swiper-button-disabled",
                    }}
                    // zoom={true}
                >
                    {mappedSlides}
                    <div className="swiper-prev flex items-center justify-center shadow-md 
                    absolute z-10 top-1/2 -left-7 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full"
                    
                    >
                        <img src="/img/chevron-left.svg" alt="prev-image-btn" />
                    </div>
                    <div className="swiper-next flex items-center justify-center shadow-md 
                     absolute z-10 top-1/2 -right-7 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
                        <img src="/img/chevron-right.svg" alt="next-image-btn" />
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default UnderDevelopmentProjects;