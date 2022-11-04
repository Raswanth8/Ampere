import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return `https://picsum.photos/id/${id}/1920/1080`;
}

function createSlide() {
  return (
    <SwiperSlide>
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}

export default function Gallery() {
  return (
    <section class="px-4 py-24 mx-auto max-w-7xl" id="achieve">
      <p className="text-6xl font-roboto text-black">
        An <text className="text-orange-600">Overview</text>
      </p>
      <br />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide()}
        {createSlide()}
        {createSlide()}
      </Swiper>
    </section>
  );
}
