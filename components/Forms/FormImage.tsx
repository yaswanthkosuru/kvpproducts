import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '@styles/globals.css'
import { CldImage } from "next-cloudinary";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export const FormImageComp = ({ ImageUrls }: { ImageUrls: string[] }) => {
    if (ImageUrls.length == 0) {
        return <></>
    }
    return (
        <div className='w-full lg:w-1/2 lg:mx-auto h-40'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="relative h-40 w-full">
                {ImageUrls.map((imageurl, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <CldImage
                            src={imageurl}
                            fill={true}
                            className="h-40"
                            alt="imageuploaded"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>


    );
};
