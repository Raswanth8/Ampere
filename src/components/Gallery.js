import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import silde2 from "../assets/slides/slide2.jpeg";
import silde3 from "../assets/slides/slide3.jpeg";
import silde4 from "../assets/slides/slide4.jpeg";
import silde5 from "../assets/slides/slide5.jpeg";
import silde6 from "../assets/slides/slide6.jpeg";
import silde7 from "../assets/slides/slide7.jpeg";
import silde8 from "../assets/slides/slide8.jpeg";

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
            <img src={silde2} alt="slide1" />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img src={silde3} alt="slide2" />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img src={silde4} alt="slide3" />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img src={silde5} alt="slide4" />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img src={silde6} alt="slide5" />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img src={silde7} alt="slide6" />
          </center>
        </SwiperSlide>
        <SwiperSlide>
          <center>
            <img src={silde8} alt="slide7" />
          </center>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
