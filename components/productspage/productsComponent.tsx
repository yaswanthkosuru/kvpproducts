'use client'
import Fivestar from '@components/productspage/FiveStar';
import { inter, roboto, robotoslab } from '@styles/fonts';
import { motion } from 'framer-motion';
import ProductsPrefetch from '@components/Skeletons/ProductsPrefetch';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { selectallproducts, selectproductstatus } from '@app/redux/feautres/products/product-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { PriceComponent } from '@components/productspage/PriceComponent';
function roundToFirstDecimal(number) {
    if (!isFinite(number)) {
        return 0;
    }
    let roundedNumber = parseFloat(number.toFixed(1));


    // Remove the decimal part if it is '.0'
    return roundedNumber % 1 === 0 ? parseInt(roundedNumber as unknown as string) : roundedNumber;
}
export default function Productscomponent() {
    const products = useSelector(selectallproducts);
    const status = useSelector(selectproductstatus);
    const [loadingstatus, setIsloading] = useState<'rejected' | 'idle' | 'pending'>();
    useEffect(() => {
        setIsloading(status);
    }, [status])

    const productCards = products?.map((product, index) => {
        const { name, description, imageUrls, price, _id, overallrating, usersrated, units } = product;
        var calc = Math.round(overallrating / usersrated)
        var rating = roundToFirstDecimal(calc);


        return (
            <div
                key={index}
                className={`${roboto.className} ${robotoslab.className}`}
            >
                {/* mobileversion */}
                <div className='sm:hidden block'>

                    <Link href={`/product/${_id}`}>
                        <div className='grid bg-white  grid-cols-10 '>
                            <div className=' col-span-4   rounded-md mr-4'>
                                <CldImage
                                    src={imageUrls[0]}
                                    width={600}
                                    height={600}
                                    alt='product image'
                                    className='rounded-md h-[150px] border'
                                />
                            </div>
                            <div className='col-span-6 grid grid-cols-1 gap-1  my-auto '>
                                <span className="font-medium text-[15px] ">{name.toUpperCase()}</span>
                                <p className="text-base line-clamp-1" >{description}</p>
                                <span className='text-xl'> &#8377;{price}
                                    <span className='text-base'>/{units}</span>
                                </span>
                                <div className='flex justify-start gap-2'>
                                    <button className='flex justify-start text-white text-[14px] items-center px-1 bg-green-600'>
                                        {rating}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='white' viewBox="0 0 24 24">
                                            <path d="M12 2l1.95 6.29h6.26l-5.05 3.86 1.95 6.26-5.06-3.87-5.05 3.87 1.95-6.26-5.06-3.86h6.27z" />
                                        </svg>
                                    </button>
                                    {usersrated} users
                                </div>

                            </div>

                        </div>
                    </Link>

                </div>
                {/* desktop version */}
                <div
                    className={`hidden sm:block  m-4 p-4 bg-white border rounded-lg`}
                >
                    <Link href={`/product/${_id}`}>

                        <div className="">
                            <div className='w-full relative h-40'>
                                <CldImage
                                    src={imageUrls[0]}
                                    fill
                                    sizes=''
                                    alt='product image'
                                    className=' '
                                />
                            </div>
                        </div>
                        <div className={`mt-4 `}>
                            <span className='font-medium text-md line-clamp-1'>{name.toUpperCase()}</span>
                            <p className='line-clamp-1'>{description}</p>
                            <div className='flex  gap-2 justify-between'>
                                <span>
                                    <span className='text-xl'> &#8377;{price}</span>
                                    /{units}
                                </span>
                                <button className='flex  justify-center items-center border border-slate-100 bg-gray-100 px-1'>
                                    {rating}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='tomato' viewBox="0 0 24 24">
                                        <path d="M12 2l1.95 6.29h6.26l-5.05 3.86 1.95 6.26-5.06-3.87-5.05 3.87 1.95-6.26-5.06-3.86h6.27z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>


        );
    });
    if (loadingstatus === 'pending') {
        return <ProductsPrefetch />
    }
    return (
        <div >
            <motion.div className='grid m:grid-cols-3 grid-cols-1'>
                {productCards}
            </motion.div>
        </div>
    );
}
