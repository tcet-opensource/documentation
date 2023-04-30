import React from "react";

const ProjectPreview = ({ img, tools, name, description }) => {
  return (
    <div>
      {/* <div className="flex flex-col">
        <div className="flex text-xl font-semibold md:text-5xl">
          {name}
        </div>
        <div className="flex text-gray-400">
          {description}
        </div>
      </div> */}
      <div className="relative flex text-white md:px-12">
        <img
          src={"/img/ProjectSection/" + img}
          alt="project-img"
          className="rounded-lg"
        />
        <div className="absolute md:bottom-36 md:left-36 bottom-10 left-10">
          {tools.map(tool =>
            <sapn>
              {tool + " "}
            </sapn>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
