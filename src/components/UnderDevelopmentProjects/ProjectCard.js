import React from "react";
import styles from "./styles.module.css";

const ProjectCard = ({ data }) => {
  return (
    <div className={`${styles.project_card}`}>
      <div className="px-5 pt-8 pb-12">
        <div className={styles.project_card_inner_box}>
          <div className={styles.inner_box_image}>
            <img
              src={data.image}
              loading="eager"              
              alt="Project Image"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="px-4 pt-6 pb-16 text-left">
            <h6 className="text-white font-semibold text-xl lg:text-2xl ">{data.title}</h6>
            <p className="text-slate-300  text-xs md:text-sm  mt-2">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex text-xs gap-2 md:text-sm font-medium items-center justify-around -mt-5 ">
          <a
          href={data.github}
            className="bg-violet-800 text-lime-100 hover:text-lime-100 hover:bg-violet-600 hover:no-underline py-1  flex items-center px-4 rounded-full"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
