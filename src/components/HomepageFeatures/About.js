import React from "react";
import CountUp from "react-countup";
import clsx from "clsx";
import img from "../../assets/image.png";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={clsx("", styles.aboutBackground)}>
      <div className='flex justify-center items-center w-[90%] m-auto'>
        <div className='flex flex-col items-center gap-12 px-16 py-20 max-sm:px-0 max-sm:py-16 lg:flex-row 2xl:px-32 lg:py-40'>
          <div>
            <img src={img} alt='img' />
          </div>
          <div className='flex flex-col items-start gap-6 lg:w-1/2'>
            <div className="bg-[#1D2939] rounded-3xl py-1 px-2.5">About</div>
            <div
              className={clsx(
                "md:text-4xl w-full text-[2rem] text-start lg:w-[110%]",
                styles.fontSora
              )}
            >
              TCET-OPEN SOURCE
            </div>
            <div className='md:text-xl leading-7 text-sm text-[#D0D5DD]'>
              In the present scenario of globalization there is tremendous
              demand for skilled manpower particularly in the area of
              Engineering and Technology. Therefore, Training and Placement
              (T&P) was set up with a view to provide necessary impetus to
              launch our students into the real world where cut-throat
              competition is the order of the day.
            </div>
            <div className='flex items-start justify-between w-full'>
              <div className='flex flex-col items-start p-3 w-[45%] gap-2 border border-[#60548A] bg-[#302261] rounded-xl'>
                <div className=' leading-9 text-lg md:text-3xl'>
                  <CountUp
                    start={0}
                    end={852}
                  />+
                </div>
                <div>
                  <div className='text-slate-300 md:text-md text-sm'>Number of Line code</div>
                </div>
              </div>
              <div className='flex flex-col items-start p-3 w-[45%] gap-2 border border-[#60548A] bg-[#302261] rounded-xl'>
                <div className=' leading-9 text-lg md:text-3xl'>
                  <CountUp
                    start={0}
                    end={7400}
                  />+
                </div>
                <div>
                  <div className='text-slate-300 md:text-md text-sm'>Number of Line code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
