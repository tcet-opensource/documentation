import React from 'react';
import Logo from "../../../static/img/logo.png";

const Navbar = () => {
    return (
        <div className="bg-[#07001D]">
            <div className="flex px-20 w-screen flex-col md:flex-row justify-center items-center lg:justify-between flex-wrap">
                <div className="flex items-center">
                    <img src={Logo} alt="tcet-icon" className="h-12 w-12 inline" />
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
                    <button class="bg-transperent hover:bg-gray-800 text-white font-medium py-2 px-4 border rounded-md border-[#475467] mx-4">
                        Contribute
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;