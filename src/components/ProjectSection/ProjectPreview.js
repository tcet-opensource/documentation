import React from "react";

const ProjectPreview = ({ img, tools }) => {
  return (
    <div className="relative flex object-cover h-[90%] text-white md:px-12">
      <img
        src={"/img/ProjectSection/" + img}
        alt="project-img"
        className="object-cover rounded-none md:rounded-3xl"
      />
      <div className="absolute hidden md:block bottom-5 left-5 md:bottom-14 md:left-28">
        <div className="flex justify-start pl-2 font-semibold md:text-2xl">
          TOOL:
        </div>
        {tools.map(tool =>
          <sapn className="px-2 font-light md:text-2xl">
            {tool + " "}
          </sapn>
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
