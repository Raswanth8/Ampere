import React from "react";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-800 p-6 shadow-none rounded-lg">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <div className="text-xl">logo</div>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-black mr-4 font-poppins"
          >
            <Link to="/">Home</Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-black mr-4 font-poppins"
          >
            <Link to="feature-page" smooth={true} offset={-70} duration={1200}>
              About Us
            </Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-black mr-4 font-poppins"
          >
            <Link to="prod-display" smooth={true} offset={-70} duration={1200}>
              Achievements
            </Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-orange-500 hover:text-black mr-4 font-poppins"
          >
            <Link to="prod-display" smooth={true} offset={-70} duration={1200}>
              Contact Us
            </Link>
          </a>
        </div>
        <div>
          <button class="text-white bg-orange-600 btn hover:bg-orange-700  font-poppins">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
