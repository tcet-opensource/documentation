import React from "react";
import CountUp from "react-countup";
import clsx from "clsx";
import img from "../../assets/image.png";
// import styles from "./styles.module.css";

const About = () => {
  return (
    <section id="about" className="bg-[#07001D] ">
      {/* <div className="flex justify-center items-center w-[90%] px-5 m-auto text-slate-50 "> */}
        {/* <div className="flex flex-col items-center gap-12 px-16 py-20 max-sm:px-0 max-sm:py-16 lg:flex-row 2xl:px-32 lg:py-40"> */}
        <div className="flex flex-col items-center gap-12 p-5 lg:flex-row 2xl:px-32 lg:p-16 text-slate-50">
          <div>
            <img src={img} alt="img" />
          </div>
          <div className="flex flex-col items-start gap-4 lg:w-1/2">
            <div>
              <div className="bg-[#1D2939] w-max rounded-3xl py-1 px-2.5 ">About</div>
              <div
                className={clsx(
                  "md:text-4xl w-full text-[2rem] text-start lg:w-[110%] mt-2 font-title font-semibold "
                )}
              >
                TCET-OPEN SOURCE
              </div>
            </div>
            <div className="md:text-xl leading-7  text-[#D0D5DD]">
              The motivation behind formation of the Organization was simple. An initiative undertaken for the students, by the students to streamline software engineering education and development under the banner of a single Organization, and to provide visibility to the projects being undertaken by the student community.
            </div>
            <div className="flex items-start justify-between gap-4 w-full flex-wrap">
              <div className="flex flex-col items-start p-3 w-max flex-1 gap-2 border border-[#60548A] bg-[#302261] rounded-xl">
                <div className=" leading-9 text-3xl font-title w-max">
                  <CountUp start={0} end={20} />+
                </div>
                <div>
                  <div className="text-slate-300 md:text-md text-sm">
                    Number of projects incubated
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start p-3 w-max flex-1 gap-2 border border-[#60548A] bg-[#302261] rounded-xl">
                <div className=" leading-9 text-3xl font-title w-max ">
                  <CountUp start={0} end={100} />+
                </div>
                <div>
                  <div className="text-slate-300 md:text-md text-sm">
                    Number of contributors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
