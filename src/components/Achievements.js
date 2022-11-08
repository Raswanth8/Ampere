import React from "react";

export default function Achievements() {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl" id="achieve-page">
      <p className="text-6xl font-roboto text-black">
        Our <text className="text-orange-600">Achievements</text>
      </p>
      <br />
      <br />
      <div class="grid grid-cols-2 gap-2 text-center lg:grid-cols-3">
        <div class="flex items-center justify-center">
          <text class="text-5xl font-poppins">
            <b>40+</b> <br />{" "}
            <text class="text-3xl text-gray-600">Training Players</text>
          </text>
        </div>
        <div class="flex items-center justify-center  ">
          <text class="text-5xl font-poppins">
            <b>10</b> <br />
            <text class="text-3xl text-gray-600">State Level Players</text>
          </text>
        </div>
        <div class="flex items-center justify-center ">
          <text class="text-5xl font-poppins">
            <b>4</b> <br />
            <text class="text-3xl text-gray-600">National Level Players</text>
          </text>
        </div>
      </div>
    </section>
  );
}
