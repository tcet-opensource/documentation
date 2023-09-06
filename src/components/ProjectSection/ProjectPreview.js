import React from "react";

const ProjectPreview = ({ img, tools }) => {
  return (
    <div className="relative object-cover px-10 h-[90%] text-white md:px-12 overflow-hidden">
      <img  
        src={`/img/ProjectSection/${img}`}
        alt="project-img"
        className="object-cover overflow-hidden rounded-none md:rounded-3xl"
      />
        <div 
          className="absolute rounded-md px-2 text-left hidden md:block bottom-0 left-5 md:bottom-14 md:left-28 outline-none"
          style={{
            "--bg-opacity": 0.2,
            "backdrop-filter": "blur(7px)",
            "background": "linear-gradient(to top, rgb(17 24 39 / var(--bg-opacity)), transparent), linear-gradient(to right, rgb(17 24 39 / var(--bg-opacity)), transparent 70%)",
          }}
        >
          <div className="flex justify-start pl-2 font-semibold md:text-2xl">
            TOOL:
          </div>
          {tools.map(tool =>
            <span className="px-2 font-light md:text-2xl">
              {tool + " "}
            </span>
          )}
        </div>
    </div>
  );
};

export default ProjectPreview;
