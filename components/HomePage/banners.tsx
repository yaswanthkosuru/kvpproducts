import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/globals.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation, } from 'swiper/modules';
import Image from 'next/image';
import banner1 from '@public/cardpage/poster1.jpg'
import banner2 from '@public/cardpage/poster2.jpg'
import { motion } from 'framer-motion'
import { bannervariants } from '@framer/Variants';
export default function slidingbanners() {
    return (
        <motion.div variants={bannervariants} initial='initial' animate='after'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                spaceBetween={40}
                modules={[Autoplay, Pagination, Navigation]}

                breakpoints={{
                    650: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 2500,

                }}
            >
                <SwiperSlide className='relative h-60'>
                    <Image
                        alt='None'
                        src={banner2}
                        fill
                        className='rounded-xl'
                    >
                    </Image>
                </SwiperSlide>
                <SwiperSlide className='relative   h-60 lg:h-60'>
                    <Image
                        alt='None'
                        src={banner1}
                        className='rounded-xl'
                        fill
                    >
                    </Image>
                </SwiperSlide>
                <SwiperSlide className='relative h-60'>
                    <Image
                        alt='None'
                        src={banner2}
                        fill
                        className='rounded-xl'
                    >
                    </Image>
                </SwiperSlide>

            </Swiper>

        </motion.div>
    )
}

