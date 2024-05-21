import { useState } from 'react';
import { Pagination } from 'swiper/modules';

import "../../index.css";

export const useSwiperConfig = () => {
  const [swiperConfig] = useState({
    slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    modules: [Pagination],
    breakpoints: {
      385: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  return swiperConfig;
};