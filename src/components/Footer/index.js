import React from "react";
import Logo from "../../../static/img/logo.png";
import Instagram from "../../../static/img/FooterSectionIcons/instagram.svg";
import Linkedin from "../../../static/img/FooterSectionIcons/linkedin.svg";
import Twitter from "../../../static/img/FooterSectionIcons/twitter.svg";
import Youtube from "../../../static/img/FooterSectionIcons/youtube.svg";
import Discord from "../../../static/img/FooterSectionIcons/Discord.svg";
import { navLinks } from "../Navbar";
function Footer() {
  return (
    <div className="bg-[#07001D] p-5 xl:p-16">
      <div className="flex flex-col md:flex-row justify-center items-center lg:justify-between flex-wrap">
        <div className="flex items-center">
          <img src={Logo} alt="tcet-icon" className="h-12 w-12 inline" />
          <div className="inline text-[#FCFCFD] font-semibold text-2xl mx-4 text-center">
            TCET Open Source
          </div>
        </div>
        <div className="text-[#FCFCFD] flex flex-col items-center md:flex-row text-base font-light my-4">
          {navLinks.map((n) => (
            <a
              href={n.href}
              className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3"
            >
              {n.title}
            </a>
          ))}
        </div>
      </div>
      <div className="h-px bg-[#EBE9FE] bg-opacity-10 my-5" />
      <div className="flex flex-col md:flex-row justify-center items-center lg:justify-between flex-wrap">
        <div className="text-[#FCFCFD] text-sm lg:mx-0 text-center">
          Copyright 2022-2023 @ TCET Opensource.
        </div>
        <div className="text-[#FCFCFD] flex flex-row font-light my-4">
          <a
            href="https://linkedin.com/company/tcet-opensource/"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3 hover:scale-110"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.youtube.com/@TCETMumbaiOfficial"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3  hover:scale-110"
          >
            <Youtube />
          </a>
          <a
            href="https://twitter.com/tcetopensource"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3  hover:scale-110"
          >
            <Twitter />
          </a>
          <a
            href="https://instagram.com/tcetopensource/"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3  hover:scale-110"
          >
            <Instagram />
          </a>
          <a
            href="https://discord.com/invite/r7ZhAREg2M"
            className="hover:no-underline hover:text-[#FCFCFD] mx-4 my-3 hover:scale-110"
          >
            <Discord />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
