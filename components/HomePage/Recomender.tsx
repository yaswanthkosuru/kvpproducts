import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Image from 'next/image';

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar, A11y, FreeMode } from 'swiper/modules';
import { CldImage } from 'next-cloudinary';
import { useSelector } from 'react-redux';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import Link from 'next/link';
import { lato, playfairdisplay } from '@styles/fonts';

const Recomended_Component = () => {
    let products = useSelector(selectallproducts);
    products = products.slice(-5);
    if (!products || products.length == 0) {
        return <></>
    }
    return (
        <div className='relative'>

            <span className='font-bold mx-2 text-blue-900 text-[20px] '>
                Recommended for you
            </span>
            <div className='bg-blue-600/70 pb-8 px-1 overflow-hidden'>
                <div className='absolute right-0 blur-md bottom-5 w-4 h-60 bg-white'>

                </div>
                <Link
                    href='/products'
                    className='flex text-white justify-end font-bold text-[20px] underline underline-offset-4'>
                    <span className={`${playfairdisplay.className}`}>
                        See more Like these
                    </span>
                </Link>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    modules={[]}
                    autoplay={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className='mt-8'
                >

                    {
                        products.map((product, index) => {
                            const { name, description, imageUrls, price, _id, overallrating, usersrated, units } = product;
                            return (
                                <SwiperSlide
                                    className='h-auto bg-white
                                    rounded-xl
                                     '>
                                    <Link
                                        href={`/product/${product._id}`}
                                    >
                                        <div className='flex  text-left text-base p-2 flex-col'>
                                            <span className='text-lg'>{name.toUpperCase()}</span>
                                            <CldImage
                                                src={imageUrls[0]}
                                                alt='none'
                                                width={150}
                                                height={100}
                                                className='w-full h-32'
                                            >

                                            </CldImage>
                                            <span>&#8377;{product.price} / -{units}</span>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default Recomended_Component;