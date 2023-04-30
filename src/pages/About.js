import React from "react";
import CountUp from "react-countup";
import clsx from "clsx";
import img from "../assets/image.png";
import styles from "./index.module.css";

const About = () => {
  return (
    <div className={clsx("", styles.aboutBackground)}>
      <div className='flex justify-center items-center w-[90%] m-auto'>
        <div className='flex flex-col items-center gap-12 px-16 py-20 max-sm:px-0 max-sm:py-16 lg:flex-row 2xl:px-32 lg:py-40'>
          <div>
            <img src={img} alt='img' />
          </div>
          <div className='flex flex-col items-start gap-6 lg:w-1/2'>
            <div
              className={clsx(
                "text-4xl text-center w-full max-xs:text-[2rem] lg:text-start lg:w-[110%]",
                styles.fontSora
              )}
            >
              TCET-OPEN SOURCE
            </div>
            <div className='text-xl leading-7 max-xs:text-sm text-[#D0D5DD]'>
              In the present scenario of globalization there is tremendous
              demand for skilled manpower particularly in the area of
              Engineering and Technology. Therefore, Training and Placement
              (T&P) was set up with a view to provide necessary impetus to
              launch our students into the real world where cut-throat
              competition is the order of the day.{" "}
            </div>
            <div className='flex items-start justify-between w-full'>
              <div className='flex flex-col items-start p-3 w-[45%] gap-2 bg-[#302261] rounded-xl'>
                <div>
                  <CountUp
                    start={0}
                    end={852}
                    className='text-[28px] leading-9 max-xs:text-lg'
                  />
                </div>
                <div>
                  <div className='#D0D5DD text-md max-xs:text-sm'>Number of Line code</div>
                </div>
              </div>
              <div className='flex flex-col items-start p-3 w-[45%] gap-2 bg-[#302261] rounded-xl'>
                <div>
                  {" "}
                  <CountUp
                    start={0}
                    end={7400}
                    className='text-[28px] leading-9 max-xs:text-lg'
                  />
                </div>
                <div>
                  <div className='#D0D5DD text-md max-xs:text-sm'>Number of Line code</div>
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
