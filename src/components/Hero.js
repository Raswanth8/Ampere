import React from "react";

export default function Hero(props) {
  return (
    <div>
      <section class="px-4 py-24 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <p className="text-6xl font-roboto text-black">UNIBREAKERS</p>
          <br />
          <p class="px-0 mb-6 text-lg text-gray-600 lg:px-24 font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            ratione ipsa cumque earum? Aliquid nobis commodi asperiores facere?
            Illo similique quia amet iusto reiciendis doloremque quibusdam dicta
            doloribus tempore itaque!
          </p>
          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <button class="text-white bg-orange-600 btn hover:bg-orange-700 font-poppins">
              Badminton Academy
            </button>
            <button class="text-white bg-orange-600 btn hover:bg-orange-700 font-poppins">
              Pickle Ball Club
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
