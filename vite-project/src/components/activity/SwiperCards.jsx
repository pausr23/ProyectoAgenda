import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperConfig } from '../hooks/useSwiperConfig';

import 'swiper/css';
import 'swiper/css/pagination';

import { Card } from '../ui/Card'

import "../../index.css";

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