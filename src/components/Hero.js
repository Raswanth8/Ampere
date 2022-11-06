import React from "react";
import { Link } from "react-scroll";

export default function Hero(props) {
  return (
    <div>
      <section class="px-4 py-20 mx-auto max-w-7xl" id="home">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <p className="text-6xl font-roboto text-black">UNIBREAKERS</p>
          <br />
          <p class="px-0 mb-6 text-lg text-gray-600 lg:px-24 font-poppins text-center">
            Unibreakers is a{" "}
            <text className="text-orange-600 font-semibold underline italic">
              sports club
            </text>{" "}
            which aims to promote niche sports in India. <br></br>
            The club has two major sports as of now which includes{" "}
            <text className="text-orange-600 font-semibold underline italic">
              Badminton and Pickleball.
            </text>{" "}
            Unibreakers club believes in building a sporting culture pan India.
            Not only that the club also helps training students and taking them
            to the next level. We also help organize sporting events for clubs,
            community and organize our own events.
          </p>
          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <button class="text-white bg-orange-600 btn hover:bg-orange-700 font-poppins">
              <Link to="bad-mint" smooth={true} offset={-70} duration={1200}>
                Badminton Academy
              </Link>
            </button>
            <button class="text-white bg-orange-600 btn hover:bg-orange-700 font-poppins">
              <Link to="pickle-ball" smooth={true} offset={-70} duration={1200}>
                Pickleball Club
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
