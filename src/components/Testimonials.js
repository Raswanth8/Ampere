import React from "react";

export default function Testimonials(props) {
  return (
    <section class="px-2 py-22 mx-auto" id="testimonials">
      <p className="text-6xl font-roboto text-black">
        Customer <text className="text-orange-600">Testimonials</text>
      </p>

      <section class="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div class="avatar">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Photo 1"
            />
          </div>

          <p class="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase font-poppins">
            Name
          </p>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase font-poppins">
            Designation
          </p>
          <br />
          <p class="text-base leading-relaxed text-gray-600 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi
            esse praesentium cupiditate vitae tenetur quos eveniet! Similique
            labore, tempore sit ea illo, unde, totam tempora quis earum dolores
            sed!
          </p>
        </div>
        <div>
          <div class="avatar">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Photo 2"
            />
          </div>

          <p class="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase font-poppins">
            Name
          </p>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase font-poppins">
            Designation
          </p>
          <br />
          <p class="text-base leading-relaxed text-gray-600 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi
            esse praesentium cupiditate vitae tenetur quos eveniet! Similique
            labore, tempore sit ea illo, unde, totam tempora quis earum dolores
            sed!
          </p>
        </div>
        <div>
          <div class="avatar">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Photo 2"
            />
          </div>

          <p class="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase font-poppins">
            Name
          </p>
          <p class="text-xs font-semibold tracking-widest text-gray-500 uppercase font-poppins">
            Designation
          </p>
          <br />
          <p class="text-base leading-relaxed text-gray-600 font-poppins">
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
