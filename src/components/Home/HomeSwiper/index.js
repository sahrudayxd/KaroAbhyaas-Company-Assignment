import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperImages = [
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/KaroAbhayaas/carousel-1-img",
    name: "online learning",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/KaroAbhayaas/carousel-2-img",
    name: "convenient learning",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dtkwvlezz/image/upload/f_auto,q_auto/v1/KaroAbhayaas/carousel-3-img",
    name: "our courses matter",
  },
];

const HomeSwiper = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        className="mySwiper"
      >
        {swiperImages.map((swiperImage, index) => (
          <SwiperSlide key={index}>
            <img
              className="swiper-img"
              src={swiperImage.imgUrl}
              alt={swiperImage.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSwiper;
