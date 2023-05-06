import React from "react";
import Logo from "../../../static/img/logo.png";
import Instagram from "../../../static/img/FooterSectionIcons/instagram.svg";
import Linkedin from "../../../static/img/FooterSectionIcons/linkedin.svg";
import Twitter from "../../../static/img/FooterSectionIcons/twitter.svg";
import Youtube from "../../../static/img/FooterSectionIcons/youtube.svg";

function Footer() {

  return (
    <div className="bg-[#07001D]">
      <div className="flex px-10 pt-10 w-screen flex-col md:flex-row justify-center items-center lg:justify-between flex-wrap">
        <div className="flex items-center">
          <img src={Logo} alt="tcet-icon" className="h-12 w-12 inline" />
          <div className="inline text-[#FCFCFD] font-semibold text-2xl mx-4">
            TCET Open Source
          </div>
        </div>
        <div className="text-[#FCFCFD] flex flex-col items-center md:flex-row text-base font-light my-4">
          <a
            href="*"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            Docs
          </a>
          <a
            href="*"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            Blogs
          </a>
          <a
            href="*"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            Live Projects
          </a>
          <a
            href="*"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            Cooking Projects
          </a>
          <a
            href="*"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            Teams
          </a>
          <a
            href="*"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="h-px bg-[#EBE9FE] bg-opacity-10 mx-10 my-5" />
      <div className="flex px-10 pb-12 w-screen flex-col md:flex-row justify-center items-center lg:justify-between flex-wrap">
        <div className="text-[#FCFCFD] text-sm mr-8 lg:mx-0">
          Copyright 2022-2023 @ TCET Opensource.
        </div>
        <div className="text-[#FCFCFD] flex flex-row font-light my-4">
          <a
            href="https://linkedin.com/company/tcet-opensource/"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
           <Linkedin/>
          </a>
          <a
            href="https://www.youtube.com/@TCETMumbaiOfficial"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            <Youtube />
          </a>
          <a
            href="https://twitter.com/tcetopensource"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com/tcetopensource/"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
          >
            <Instagram />
          </a>

        </div>
      </div>

    </div>
  );
}

export default Footer;
