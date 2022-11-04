import React from "react";

export default function FAQ(props) {
  return (
    <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
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
            What is accessibility?
          </p>
          <p class="text-gray-600 text-left font-poppins">
            This article starts off the module with a good look at what
            accessibility is — this includes what groups of people we need to
            consider and why, what tools different people use to interact with
            the web, and how we can make accessibility part of our web
            development workflow.
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
            CSS and JavaScript accessibility best practices?
          </p>
          <p class="text-gray-600 text-left font-poppins">
            CSS and JavaScript, when used properly, also have the potential to
            allow for accessible web experiences, but if misused they can
            significantly harm accessibility. This article outlines some CSS and
            JavaScript best practices that should be considered to ensure that
            even complex content is as accessible as possible.
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
            WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?
          </p>
          <p class="text-gray-600 text-left font-poppins">
            Following on from the previous article, sometimes making complex UI
            controls that involve unsemantic HTML and dynamic JavaScript-updated
            content can be difficult. WAI-ARIA is a technology that can help
            with such problems by adding in further semantics that browsers and
            assistive technologies can recognize and use to let users know what
            is going on. Here we'll show how to use it at a basic level to
            improve accessibility.
          </p>
        </div>
      </div>
    </section>
  );
}
