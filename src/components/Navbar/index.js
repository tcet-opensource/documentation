import React, { useRef, useState } from "react";
import Logo from "../../../static/img/logo.png";

export const navLinks = [
  {
    title: "Docs",
    href: "/docs/about-tcetopensource",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Live Projects",
    href: "/#live",
  },
  {
    title: "Cooking Projects",
    href: "/#cooking",
  },
  {
    title: "About us",
    href: "/#about",
  },
  {
    title: "Team",
    href: "/#team",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const ref = useRef(null);
  return (
    <div className="bg-[#070419]">
      <div className="flex px-4 lg:px-20 pt-4 w-screen flex-row justify-between items-center">
        {/* Logo  */}
        <div className="flex items-center">
          <img src={Logo} alt="tcet-icon" className="h-12 w-12 inline" />
        </div>

        {/* Nav Links  */}
        <div className="hidden md:block text-[#FCFCFD] items-center flex-row text-base font-light my-4">
          {navLinks.map((n) => (
            <a href={n.href} className=" hover:text-blue-300 mx-2 lg:mx-4 my-3">
              {n.title}
            </a>
          ))}
          <a
            href="https://github.com/tcet-opensource"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-transperent hover:bg-gray-800 text-white hover:text-white font-medium py-2 px-4 border rounded-md border-[#475467] mx-2 lg:mx-4"
          >
            Contribute
          </a>
        </div>

        {/* Hamburger Menu Button  */}
        <div className="block md:hidden">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg  focus:outline-none"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <span ref={ref}>
              {!navOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar  */}
      {navOpen && (
        <div class="transition duration-300">
          <ul class="font-medium text-white text-sm text-center bg-[#070419] ">
            {navLinks.map((n) => (
              <li>
                <a href={n.href} class="block px-2 py-2">
                  {n.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/tcet-opensource"
                target="_blank"
                rel="noopener noreferrer"
                class="block px-2 py-2"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* Mobile Nav Bar End */}
    </div>
  );
};

export default Navbar;
