import React from "react";
import { Link } from "react-scroll";
export default function Footer(props) {
  return (
    <footer class="px-4 py-12 mx-auto max-w-7xl" id="contact-us">
      <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div class="col-span-2">
          <img
            src="https://iili.io/mfsM92.md.png"
            alt="logo"
            className="h-12 w-50"
          ></img>
          <p class="my-4 text-xs leading-normal text-gray-600 font-poppins text-center">
            Unibreakers Badminton Academy, <br /> 1 oil Mil street,
            Thatangullam, Choolai, Chennai - 600112 <br />{" "}
            <b>Utsav Jain - 9840667858</b> <br />{" "}
            <a href="mailto:unibreakersoff@gmail.com">
              unibreakersoff@gmail.com
            </a>
          </p>
        </div>

        <nav class="col-span-2 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-bold tracking-wider text-gray-400 uppercase font-poppins">
            Socials
          </p>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="https://www.instagram.com/unibreakers.badminton.academy/?igshid=YmMyMTA2M2Y%3D"
          >
            Instagram
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="mailto:unibreakersoff@gmail.com"
          >
            Email
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="https://www.instagram.com/unibreakers.badminton.academy/?igshid=YmMyMTA2M2Y%3D"
          >
            Facebook
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="https://wa.me/9840667858?text="
          >
            WhatsApp
          </a>
        </nav>
        <nav class="col-span-1 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-bold tracking-wider text-gray-400 uppercase font-poppins">
            Company
          </p>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#about-page"
          >
            <Link to="about-page" smooth={true} offset={-70} duration={1200}>
              About Us
            </Link>
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#contact-us"
          >
            <Link to="achieve-page" smooth={true} offset={-70} duration={1200}>
              Achievements
            </Link>
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#faq-page"
          >
            <Link to="faq-page" smooth={true} offset={-70} duration={1200}>
              FAQs
            </Link>
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#contact-us"
          >
            <Link to="contact-us" smooth={true} offset={-70} duration={1200}>
              Contact Us
            </Link>
          </a>
        </nav>
      </div>
      <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p class="mb-2 text-xs text-left text-gray-600 md:mb-0 font-poppins">
          Built with ❤️ by <a href="https://github.com/Raswanth8">Raswanth</a>
        </p>
        <p class="mb-0 text-xs text-left text-gray-600 md:mb-0 font-poppins">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
