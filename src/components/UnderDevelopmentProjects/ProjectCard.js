import React from 'react';
import styles from './styles.module.css';

const ProjectCard = ({data}) => {
    return (
        <div className="w-full">
            <div className={styles.project_card}>
                <div className='px-5 pt-8 pb-12'>
                    <div className={styles.project_card_inner_box}>
                        <div className="px-4 pt-12 pb-16">
                            <h6 className='text-white font-semibold text-lg'>{data.title}</h6>
                            <p className="text-gray-500 font-medium text-sm text-justify mt-2">{data.description}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around -mt-5'>
                        <button className='bg-[#D5FFB5] py-2 px-8 rounded-full'>Button1</button>
                        <button className='bg-white py-2 px-8 rounded-full'>Button2</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;