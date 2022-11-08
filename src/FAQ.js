import React from "react";

export default function FAQ(props) {
  return (
    <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2" id="faq-page">
      <p className="text-6xl font-roboto text-black">
        Frequently <text className="text-orange-600">Asked</text> Questions
      </p>
      <br />
      <div class="flex items-start justify-start mb-12">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="flex-none w-6 h-6 mr-4 text-gray-700"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <p class="mt-0 mb-3 font-semibold text-gray-900 text-left font-poppins">
            What is Program Fee?
          </p>
          <p class="text-gray-600 text-left font-poppins">
            The players have been split into two categories according to their
            previous experience. For Beginners, it costs ₹ 3500 and for advanced
            players, it costs ₹ 6000.
          </p>
        </div>
      </div>
      <div class="flex items-start justify-start mb-12">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="flex-none w-6 h-6 mr-4 text-gray-700"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <p class="mt-0 mb-3 font-semibold text-gray-900 text-left font-poppins">
            Who can join the coaching class?
          </p>
          <p class="text-gray-600 text-left font-poppins">
            We encourage every passionate sports person who belongs to either
            beginner level or advanced level player to pursue training from our
            top instructors to achieve their goals in high level sports
            competitions.
          </p>
        </div>
      </div>
      <div class="flex items-start justify-start mb-12">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="flex-none w-6 h-6 mr-4 text-gray-700"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <p class="mt-0 mb-3 font-semibold text-gray-900 text-left font-poppins">
            What are time slots available for the coaching?
          </p>
          <p class="text-gray-600 text-left font-poppins">
            The players have been split into two categories according to their
            previous experience. For Beginners, we conduct coaching classes in
            two batch slots. The first batch starts from 3:30 pm - 4:30 pm,
            followed by the second batch starting from 4:30 pm - 5:30 pm. For
            advanced players, we conduct coaching classes in two batch slots.
            The first batch starts from 5:30 pm - 7 pm, followed by the second
            batch starting from 7 pm - 9 pm.
          </p>
        </div>
      </div>
    </section>
  );
}
