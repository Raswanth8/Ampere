import React from "react";

export default function Footer(props) {
  return (
    <footer class="px-4 py-12 mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div class="col-span-2">
          <img
            src="https://iili.io/mfsM92.md.png"
            alt="logo"
            className="h-12 w-44"
          ></img>
          <p class="my-4 text-xs leading-normal text-gray-600 font-poppins">
            Address Phone Email
          </p>
        </div>

        <nav class="col-span-2 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-bold tracking-wider text-gray-400 uppercase font-poppins">
            Socials
          </p>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
          >
            Instagram
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
          >
            Email
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
          >
            Facebook
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
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
            href="#"
          >
            About Us
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
          >
            Achievements
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
          >
            FAQ
          </a>
          <a
            class="flex mb-3 text-sm font-semibold text-gray-800 transition md:mb-2 hover:text-orange-600 font-poppins"
            href="#"
          >
            Contact Us
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
