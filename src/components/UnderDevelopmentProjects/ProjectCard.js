import React from 'react';
import styles from './styles.module.css';

const ProjectCard = ({ data }) => {
    return (
        <div className={`${styles.project_card}`}>
            <div className='px-5 pt-8 pb-12'>
                <div className={styles.project_card_inner_box}>
                    <div className={styles.inner_box_image}>
                        <img src={data.image} loading='eager' alt="Project Image" className='w-full h-full object-cover rounded-t-2xl' />
                    </div>
                    <div className="px-4 pt-6 pb-16">
                        <h6 className='text-white font-semibold text-lg'>{data.title}</h6>
                        <p className="text-slate-300 font-medium text-sm text-justify mt-2">{data.description}</p>
                    </div>
                </div>
                <div className='flex text-sm font-medium items-center justify-around -mt-5'>
                    <button className='bg-lime-200 text-lime-950 pb-1  flex items-center px-4 rounded-full'>Button1</button>
                    <button className='bg-white text-black pb-1  flex items-center px-4 rounded-full'>Button2</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;