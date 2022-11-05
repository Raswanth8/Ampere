import React from "react";

export default function Achievements() {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl" id="achieve-page">
      <p className="text-6xl font-roboto text-black">
        Our <text className="text-orange-600">Achievements</text>
      </p>
      <br />
      <div class="grid grid-cols-2 gap-2 text-center lg:grid-cols-3">
        <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light shadow-inner ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965768.png"
            alt="Todoist Logo"
            class="block object-contain h-16"
          />
        </div>
        <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light shadow-inner ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965768.png"
            alt="Slack Logo"
            class="block object-contain h-16"
          />
        </div>
        <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light shadow-inner ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965768.png"
            alt="Typeform Logo"
            class="block object-contain h-16"
          />
        </div>
      </div>
    </section>
  );
}
