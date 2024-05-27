import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperConfig } from '../hooks/useSwiperConfig';

import 'swiper/css';
import 'swiper/css/pagination';

import { Card } from '../ui/Card'

import "../../index.css";

/**
 * Renders a swiper component with cards for each item in the given array.
 *
 * @param {Object[]} items - An array of objects containing the properties:
 *   - id: A unique identifier for each item.
 *   - course: The course name for each item.
 *   - taskDescription: The description of the task for each item.
 *   - daysLeft: The number of days left for each item.
 *   - textColor: The color of the text for each item.
 * @return {JSX.Element} A swiper component with cards for each item in the array.
 */
export function SwiperCards({items}) {

    const swiperConfig = useSwiperConfig();

    return(
            <Swiper {...swiperConfig} className="mySwiper">
                {items.map(item => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="rounded-2xl">
                            <Card 
                                course={item.course} 
                                taskDescription={item.taskDescription} 
                                daysLeft={item.daysLeft} 
                                textColor={item.textColor}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    )
}