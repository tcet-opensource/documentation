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
              className="object-cover w-full h-full rounded-t-2xl"
            />
          </div>
          <div className="px-4 pt-6 pb-16 text-left">
            <h6 className="text-xl font-semibold text-white lg:text-2xl ">{data.title}</h6>
            <p className="mt-2 text-xs text-slate-300 md:text-sm">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around gap-2 -mt-5 text-xs font-medium md:text-sm text-violet-300 ">
          <a
          href={data.github}
          className="flex items-center px-6 py-2 font-bold text-sm rounded-full bg-violet-800 hover:text-lime-100 hover:bg-violet-600 hover:no-underline"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
