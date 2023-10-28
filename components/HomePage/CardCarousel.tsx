// Import Swiper React components
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

const CardCarousel = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={
                    {
                        delay: 5000,
                        disableOnInteraction: false
                    }
                }
                cubeEffect={{
                    slideShadows: false
                }}

                pagination={{
                    clickable: true,

                }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className='block m:hidden'>
                <div className='mt-8'>


                    <SwiperSlide className='each-slide-effect'>
                        <div className="  w-full  flex flex-row items-center bg-slate-800 py-4 px-2 text-white justify-around  ">
                            <div className={`text-white font-bold text-[16px]`}>
                                Elevate your dishes with the colors and flavors<br />
                                only fresh vegetables can provide
                                ready to brighten your meal
                            </div>
                            <Image
                                src={cardimage}
                                width={100}
                                alt='card image'
                                height={100}
                                className="z-10"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='each-slide-effect'>
                        <div className="  w-full  flex flex-row items-center  bg-zinc-800 py-4 px-2 text-white justify-around  ">
                            <div className={`text-white font-bold text-[16px]`}>
                                The farmer's market is a treasure trove of inspiration
                                offering a rainbow of   ready to brighten your meals
                            </div>
                            <Image
                                src={cardimage}
                                width={100}
                                alt='card image'
                                height={100}
                                className="z-10"
                            />
                        </div>
                    </SwiperSlide>


                </div>

            </Swiper>
        </div>
    )
}

export default CardCarousel