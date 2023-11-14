// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/globals.css'
import '@styles/homepage/styles.css'
import Image from 'next/image';
import diwalilamp from '@public/cardpage/diwalilamp.png'
// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { alegreya, inter, playfairdisplay, roboto, robotoslab } from '@styles/fonts';

const CardCarousel = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                modules={[Pagination, Autoplay]}
                autoplay={true}
                pagination={true}
            >
                <SwiperSlide
                    className='w-full h-auto  bg-slate-900'
                >
                    <div className='grid grid-flow-row mx-0 p-2'>
                        <div
                            className={`text-white  text-xl ${alegreya.className} ${inter.className}  text-[16x] flex p-2`}>
                            <span>
                                Elevate your dishes with the colors and flavors
                                only fresh vegetables can provide
                                ready to brighten your meal
                            </span>
                            <Image
                                src={diwalilamp}
                                width={100}
                                height={100}
                                alt='none'
                                className='glow-image'
                            />
                        </div>
                        <span className={`text-[16px]  text-white/90 glow ${robotoslab.className} ${roboto.className}`}>
                            I yaswanth  wishing happy sankranti
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='w-full h-auto  bg-slate-900'
                >
                    <div className='grid grid-flow-row mx-0 p-2'>
                        <div
                            className={`text-white  text-xl ${alegreya.className} ${inter.className}  text-[16x] flex p-2`}>
                            <span>
                                Elevate your dishes with the colors and flavors
                                only fresh vegetables can provide
                                ready to brighten your meal
                            </span>
                            <Image
                                src={diwalilamp}
                                width={100}
                                height={100}
                                alt='none'
                                className='glow-image'
                            />
                        </div>
                        <span className={`text-[16px]  text-white/90 glow ${robotoslab.className} ${roboto.className}`}>
                            I yaswanth  wishing happy sankranti
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CardCarousel