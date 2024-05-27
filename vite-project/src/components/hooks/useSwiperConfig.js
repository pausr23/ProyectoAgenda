import { useState } from 'react';
import { Pagination } from 'swiper/modules';

import "../../index.css";

/**
 * Returns a Swiper configuration object with the following properties:
 * - slidesPerView: The number of slides to be shown per view. Defaults to 3.
 * - spaceBetween: The space between slides in pixels. Defaults to 30.
 * - pagination: An object with the following properties:
 *   - el: The selector for the pagination element. Defaults to ".swiper-pagination".
 *   - clickable: A boolean indicating whether the pagination should be clickable. Defaults to true.
 * - modules: An array containing the Pagination module.
 * - breakpoints: An object with breakpoints and their corresponding Swiper configuration.
 *   - 385: An object with the following properties:
 *     - slidesPerView: The number of slides to be shown per view when the viewport width is 385px or less. Defaults to 1.
 *   - 1000: An object with the following properties:
 *     - slidesPerView: The number of slides to be shown per view when the viewport width is 1000px or more. Defaults to 3.
 *
 * @return {Object} The Swiper configuration object.
 */
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