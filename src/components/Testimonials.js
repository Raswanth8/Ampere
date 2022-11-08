import React from "react";

export default function Testimonials(props) {
  return (
    <section class="px-2 py-22 mx-auto" id="testimonials">
      <p className="text-6xl font-roboto text-black">
        Meet our <text className="text-orange-600">Team</text>
      </p>

      <section class="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <div>
            <img
              src="https://i.postimg.cc/LXCqvsQG/Whats-App-Image-2022-11-08-at-9-17-50-AM.jpg"
              alt="Photo 1"
              class="object-cover w-25 h-25 rounded-t-lg"
            />
          </div>
          <br />
          <p class="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase font-poppins">
            Karthick B
          </p>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase font-poppins">
            Head Coach UniBreakers
          </p>
          <br />
          <p class="text-base leading-relaxed text-gray-600 font-poppins text-justify">
            Karthick B, a NIS certified national badminton player (since 2011),
            pursuing this field as a player as well as a coach. Some of his
            achievements are reaching the top 16 in the Tamilnadu state ranking
            (2016) and representing 4 times in all India University Tournaments.
            He has trained a state champion and many national-level players in
            the veteran category. He aims to produce players in juniors and
            seniors categories to fulfill his motto, "Go rock with a racquet".
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://i.postimg.cc/QCKSj51g/Whats-App-Image-2022-11-08-at-10-58-27-PM.jpg"
              alt="Photo 2"
              class="object-cover w-25 h-25 rounded-t-lg"
            />
          </div>
          <br />
          <p class="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase font-poppins">
            Utsav Jain
          </p>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase font-poppins">
            Founder, UniBreakers
          </p>
          <br />
          <p class="text-base leading-relaxed text-gray-600 font-poppins text-justify">
            Utsav Jain, Founder & CEO of UNIBREAKERS is a young entrepreneur who
            is passionate about sports. Being a National level Badminton player
            in his school life he has represented his school at various
            tournaments across India. He was also appointed as the Sports
            Captain of his school. He graduated from Flame University, Pune, and
            built his first ed-tech start-up called Unibreakers. To follow his
            passion for sports, he started his first Badminton Academy at the
            age of 19.
          </p>
        </div>
      </section>
    </section>
  );
}
