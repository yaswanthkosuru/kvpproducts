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

const Discount_Component = () => {
    return (
        <div>
            <div className='font-bold'>
                Top Discounts for you
            </div>
            <div className='grid grid-cols-2 gap-4 bg-blue-50 py-10 px-4 '>
                <div className='w-full h-40 bg-red-500'></div>
                <div className='w-full h-40 bg-red-500'></div>
                <div className='w-full h-40 bg-red-500'></div>
                <div className='w-full h-40 bg-red-500'></div>
            </div>
        </div>
    )
}

export default Discount_Component;