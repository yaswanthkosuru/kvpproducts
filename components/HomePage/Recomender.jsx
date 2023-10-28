import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/globals.css'
import Image from 'next/image';
import cardimage from '@public/cardpage/heroine.png'
// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';

const Recomended_Component = () => {
    return (
        <div>
            <div className='font-bold'>Recomended for you</div>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
            >
                <SwiperSlide
                    className='w-28 h-40 bg-green-400'
                >

                </SwiperSlide>
                <SwiperSlide
                    className='w-28 h-40 bg-green-400'
                >

                </SwiperSlide>
                <SwiperSlide
                    className='w-28 h-40 bg-green-400'
                >

                </SwiperSlide>
                <SwiperSlide
                    className='w-28 h-40 bg-green-400'
                >

                </SwiperSlide>
                <SwiperSlide
                    className='w-28 h-40 bg-green-400'
                >

                </SwiperSlide>
                <SwiperSlide
                    className='w-28 h-40 bg-green-400'
                >

                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Recomended_Component;