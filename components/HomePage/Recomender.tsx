import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/globals.css'
import 'swiper/css/free-mode';
import Image from 'next/image';

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import { CldImage } from 'next-cloudinary';
import { useSelector } from 'react-redux';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';

const Recomended_Component = () => {
    const products = useSelector(selectallproducts);
    return (
        <div>
            <div className='font-bold'>Recomended for you</div>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                modules={[Pagination, Navigation]}
                pagination={true}
                autoplay={true}
            >

                {
                    [1, 2, , 4, 6, 3].map((val, index) => {
                        return (
                            <SwiperSlide className='w-[30%] h-20 bg-green-600 text-white'>
                                hello {val}
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default Recomended_Component;