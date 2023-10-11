import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      let parallaxElements = document.getElementsByClassName("parallax");
      let scrollPosition = window.pageYOffset;

      for (let i = 0; i < parallaxElements.length; i++) {
        let element = parallaxElements[i];
        let speed = parseFloat(element.dataset.speed);
        let offset = -(scrollPosition * speed);

        element.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative text-white bg-slate-950 bg-hero-pattern bg-cover bg-no-repeat bg-bottom p-6 pb-0">
      <div className="flex flex-col items-center justify-center mx-auto">
        <p className="px-3 pb-0.5 text-gray-200 bg-slate-800 rounded-full z-10 lg:mb-3 mb-6 pt-1">TCET Open Source</p>
        <h1 className="lg:text-7xl sm:text-6xl text-5xl text-center font-semibold z-10 lg:mb-6 mb-9
        font-title">Empowering students via<br />Open Source, in Education</h1>
        <p className="sm:text-lg text-sm text-slate-400  text-center z-10 lg:mb-9 mb-12">
          Community-driven efforts by the students of TCET <br />
          to create, build and promote open source software.
        </p>
        <a
        href="/#live"
          className="group hover:no-underline hover:text-white flex items-center justify-center text-white gap-x-2 p-2 pl-4 
        md:mb-0 mb-3 shadow-1xl shadow-indigo-400 font-semibold rounded-full 
        bg-indigo-600 hover:scale-110 cursor-pointer hover:bg-indigo-700 duration-300
        active:bg-indigo-600 z-10"
        >
          View Projects
          <div className="group-hover:bg-indigo-600 group-hover:rotate-[360deg] duration-300 bg-indigo-800 px-2 pt-1 rounded-full">
            <img src={`/img/HeroImages/arrow-down.svg`} alt="arrow-down" />
          </div>
        </a>
      </div>
      <img
        src={`/img/HeroImages/hero-section-left.svg`}
        className="absolute lg:scale-100 sm:scale-75 scale-50 z-2 origin-left md:top-48 sm:top-44 top-28 left-0 "
        data-speed="0.15"
        alt="hero-section-left"
      />
      <img src={`/img/HeroImages/hero-section-center.svg`} className="mx-auto pointer-events-none -z-10 block parallax lg:w-2/4" data-speed="0.2" alt="hero-section-center" />
      <img
        src={`/img/HeroImages/hero-section-right.svg`}
        className="absolute lg:scale-100 sm:scale-75 scale-50 origin-right md:top-56 sm:top-56 top-36 right-0 "
        data-speed="0.18"
        alt="hero-section-right"
      />
    </section>
  );
}
