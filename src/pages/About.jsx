import React from "react";
import CountUp from "react-countup";
import clsx from 'clsx';
import styles from './index.module.css';

const About = () => {
  return (
    <div className='flex'>
      <div>
        <img src='' alt='' />
      </div>
      <div>
        <div className={clsx('', styles.fontSora)}>TCET-OPEN SOURCE</div>
        <div>
          In the present scenario of globalization there is tremendous demand
          for skilled manpower particularly in the area of Engineering and
          Technology. Therefore, Training and Placement (T&P) was set up with a
          view to provide necessary impetus to launch our students into the real
          world where cut-throat competition is the order of the day.{" "}
        </div>
        <div>
          <div className='grid grid-cols-2 gap-6 justify-evenly w-full lg:w-2/5'>
            <div>
              <CountUp start={0} end={852} />
            </div>
            <div>
              <div className='text-slate-500'>Number of Line code</div>
            </div>

            <div>
              <CountUp start={0} end={7400} />
            </div>
            <div>
              <div className='text-slate-500'>Number of Line code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
