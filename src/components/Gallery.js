import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

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
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/JzFqDHMk/Whats-App-Image-2022-11-05-at-11-08-16-PM.jpg"
              alt="slide1"
            />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/ydmXbf9m/Whats-App-Image-2022-11-06-at-11-25-09-PM.jpg"
              alt="slide2"
            />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/6qBLJdLD/Whats-App-Image-2022-11-06-at-11-25-10-PM.jpg"
              alt="slide3"
            />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/SRVLyJgj/Whats-App-Image-2022-11-06-at-11-27-13-PM-1.jpg"
              alt="slide4"
            />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/05C0GB9x/Whats-App-Image-2022-11-06-at-11-27-09-PM-1.jpg"
              alt="slide5"
            />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/0NCDPh78/Whats-App-Image-2022-11-08-at-12-28-52-PM.jpg"
              alt="slide6"
            />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img
              src="https://i.postimg.cc/Jh7vrVSx/Whats-App-Image-2022-11-08-at-11-32-49-AM.jpg"
              alt="slide7"
            />
          </center>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
