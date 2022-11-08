import React from "react";

export default function Testimonials(props) {
  return (
    <section class="px-2 py-22 mx-auto" id="testimonials">
      <p className="text-6xl font-roboto text-black">
        Meet our <text className="text-orange-600">Team</text>
      </p>

      <section class="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
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
              src="https://i.postimg.cc/P5PSML3n/Whats-App-Image-2022-11-06-at-11-27-09-PM.jpg"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi
            esse praesentium cupiditate vitae tenetur quos eveniet! Similique
            labore, tempore sit ea illo, unde, totam tempora quis earum dolores
            sed!
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Photo 3"
              class="object-cover w-25 h-25 rounded-t-lg"
            />
          </div>
          <br />
          <p class="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase font-poppins">
            Name
          </p>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase font-poppins">
            Designation
          </p>
          <br />
          <p class="text-base leading-relaxed text-gray-600 font-poppins text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi
            esse praesentium cupiditate vitae tenetur quos eveniet! Similique
            labore, tempore sit ea illo, unde, totam tempora quis earum dolores
            sed!
          </p>
        </div>
      </section>
    </section>
  );
}
