import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Mousewheel, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

type props = {
    imageUrls: string[]
}
const SwiperImagecomponent = ({ imageUrls }: props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    return (
        <>
            <div className='hidden  lg:w-[18%] lg:inline-block'>
                <div className='h-screen max-h-[350px]'>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        direction={'vertical'}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        navigation={true}
                        className="vertical-swiper1"
                    >
                        {
                            imageUrls?.map((imageurl, index) => {
                                return <SwiperSlide key={index}>
                                    <CldImage
                                        src={imageurl}
                                        alt='image'
                                        fill={true}
                                        className='rounded-md px-2 py-2'
                                    />

                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className='w-full max-h-[350px] flex items-center justify-center bg-white/50 m:w-[40%] h-screen  sm:max-h-[400px]'>
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Thumbs, FreeMode, Navigation]}
                    className="horizontal-swiper1 w-full "
                >
                    {
                        imageUrls?.map((imageurl, index) => {
                            return <SwiperSlide key={index}>
                                <div className=''>
                                    <CldImage
                                        src={imageurl}
                                        alt='image'
                                        fill={true}
                                        className=' h-[320px] m:h-[350px] rounded-md '
                                    />
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>

            </div>
        </>

    )
}

export default SwiperImagecomponent