import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper";
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
            "image": "",
            "title": "Project 1",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!"
        },
        {
            "image": "",
            "title": "Project 2",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!"
        },
        {
            "image": "",
            "title": "Project 3",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!"
        },
        {
            "image": "",
            "title": "Project 4",
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus cum iure cupiditate quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, omnis repellendus similique atque consectetur dicta aliquam veniam saepe deleniti. Eos praesentium et amet quibusdam voluptas!"
        },
    ];

    const mappedSlides = underDevelopmentProjects.map((data) => {
        return (
            <SwiperSlide key={data.title} className="border  rounded-lg  ">
                <ProjectCard data={data} />
            </SwiperSlide>
        );
    });

    return (
        <div className="bg-[url('/img/under_development_projects_bg.png')] bg-no-repeat bg-cover bg-center min-h-screen p-12 flex flex-col">
            <h1 className="text-white font-semibold text-7xl">Under Development Projects</h1>
            <h6 className="text-white font-normal text-lg mt-4">These are some projects under development</h6>
            <div className="flex items-center justify-center h-full grow px-0 lg:px-20">
                <Swiper
                    className="w-full  mb-6"
                    // install Swiper modules
                    modules={[Navigation, FreeMode, A11y]}
                    freeMode={true}
                    spaceBetween={100}
                    slidesPerView={1}
                    breakpoints={{
                        420: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                    }}
                    navigation={{
                        prevEl: ".swiper-prev",
                        nextEl: ".swiper-next",
                        disabledClass: "swiper-button-disabled",
                    }}
                >
                    {mappedSlides}
                    <div className="swiper-prev flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
                        <img src="/img/chevron-left.svg" alt="prev-image-btn" />
                    </div>
                    <div className="swiper-next flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
                        <img src="/img/chevron-right.svg" alt="next-image-btn" />
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default UnderDevelopmentProjects;