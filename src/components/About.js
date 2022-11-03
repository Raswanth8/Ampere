import React from "react";

export default function About() {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl">
      <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 class="mb-4 text-5xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-center md:text-5xl font-roboto">
            UniBreakers &nbsp;
            <text className="text-orange-600">Badminton</text>
            &nbsp; Academy
          </h2>
          <p class="mb-5 text-base text-justify font-poppins text-gray-600 sm:text-justify md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
            hic aliquid, ipsum iusto aut ducimus totam! Modi nemo, voluptas
            velit, laudantium quasi quod vel nobis, architecto nulla accusantium
            laborum!
          </p>
          <br />
          <div class="grid grid-cols-3 gap-3">
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10/10880.png"
                alt="coach"
                class="w-16 h-18"
              />
              <p className="font-poppins text-sm text-emerald-700 ">
                <b>Professional Coaches</b>
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2965/2965768.png"
                alt="coach"
                class="w-14 h-18 "
              />
              <p className="font-poppins text-sm text-emerald-700 ">
                <b>Sportive Environment</b>
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3288/3288919.png"
                alt="coach"
                class="w-14 h-18"
              />
              <p className="font-poppins text-sm  text-emerald-700">
                <b> Peers and Competitions</b>
              </p>
            </div>
          </div>
        </div>
        <div class="w-full h-full py-48 bg-gray-200"></div>
      </div>
    </section>
  );
}
