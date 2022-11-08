import React from "react";

export default function About() {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl " id="about-page">
      <div
        class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        id="bad-mint"
      >
        <div>
          <center>
            <img
              src="https://i.ibb.co/bspHRnx/new-png.png"
              className="w-55 h-40"
              alt="bad"
            ></img>
          </center>
          <br />
          <h2 class="mb-4 text-5xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-center md:text-5xl font-roboto">
            UniBreakers &nbsp;
            <text className="text-orange-600">Badminton</text>
            &nbsp; Academy
          </h2>
          <p class="mb-5 text-base text-justify font-poppins text-gray-600 sm:text-justify md:text-lg">
            Unibreakers Badminton Academy was founded on{" "}
            <text className="text-orange-600 font-semibold underline italic">
              24th October 2020
            </text>
            , the aim of the academy is to take players to the next level.
            Currently all the players are training and competing for{" "}
            <text className="text-orange-600 font-semibold underline italic">
              State and National level.
            </text>{" "}
            The long term visionary about academy is to take players at
            Olympics.
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
        <div class="w-full h-full">
          <img
            src="https://i.postimg.cc/634RkMvj/Untitled-design-1.png"
            border="0"
            alt="Untitled-design-1"
          />
        </div>
      </div>
      <br />
      <div
        class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24"
        id="pickle-ball"
      >
        <div class="order-none md:order-2">
          <center>
            <img
              src="https://iili.io/mq5zLQ.md.png"
              className="w-50 h-40"
              alt="bad"
            ></img>
          </center>
          <br />
          <h2 class="mb-4 text-5xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-center md:text-5xl font-roboto">
            UniBreakers &nbsp;
            <text className="text-emerald-700">Pickleball</text>
            &nbsp; <br /> Club
          </h2>
          <p class="mb-5 text-base text-justify font-poppins text-gray-600 sm:text-justify md:text-lg">
            Unibreakers Pickleball Club is a club mainly to promote{" "}
            <text className="text-emerald-700 font-semibold underline italic">
              Pickleball culture
            </text>{" "}
            in the country. The club goal is to bring in more new young players
            and make the sport competitive. The club has already produced{" "}
            <text className="text-emerald-700 font-semibold underline italic">
              2 national medalists and 4 state medalists
            </text>{" "}
            and also have plans to bring in more players.
          </p>
          <br />
          <div class="grid grid-cols-3 gap-3">
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8526/8526653.png"
                alt="coach"
                class="w-16 h-18"
              />
              <p className="font-poppins text-sm text-orange-600 ">
                <b>Kids Programs</b>
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5588/5588847.png"
                alt="coach"
                class="w-14 h-18 "
              />
              <p className="font-poppins text-sm text-orange-600 ">
                <b>Social Play</b>
              </p>
            </div>
            <div class="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2996/2996997.png"
                alt="coach"
                class="w-14 h-18"
              />
              <p className="font-poppins text-sm  text-orange-600">
                <b> Peers and Competitions</b>
              </p>
            </div>
          </div>
        </div>
        <div class="w-full h-full">
          <img
            src="https://i.postimg.cc/DZN8HZRq/Untitled-design-2.png"
            border="0"
            alt="Untitled-design-1"
          />
        </div>
      </div>
    </section>
  );
}
