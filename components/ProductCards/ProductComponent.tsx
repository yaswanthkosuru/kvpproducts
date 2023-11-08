'use client'
import Fivestar from '@components/Buttons/FiveStar';
import { inter, roboto, robotoslab } from '@styles/fonts';
import ProductsPrefetch from '@components/Skeletons/ProductsPrefetch';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { selectallproducts, selectproductstatus } from '@app/redux/feautres/products/product-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { SelectOrders, getorders } from '@app/redux/feautres/orders/orderslice';
import { AppDispatch } from '@app/redux/store';
import { GetSessionData } from '@utils/GetClientSession';
import { PriceComponent } from '@components/ProductCards/PriceComponent';
export default function Product_Component() {
    const products = useSelector(selectallproducts);
    const status = useSelector(selectproductstatus);
    const [loadingstatus, setIsloading] = useState<"idle" | "Loading" | "rejected">();
    useEffect(() => {
        setIsloading(status);
    }, [status])

    const productCards = products?.map((product, index) => {
        const { name, description, imageUrls, price, _id, overallrating, usersrated, units } = product;
        const rating = Math.round(overallrating / usersrated);

        return (
            <div
                key={index}

            >
                {/* mobile version */}
                <div className='sm:hidden block'>
                    <Link href={`/product/${_id}`}>
                        <div className='grid bg-white  grid-cols-10 '>
                            <div className=' col-span-4   rounded-md mr-4'>
                                <CldImage
                                    src={imageUrls[0]}
                                    width={600}
                                    height={600}
                                    alt='product image'
                                    className='rounded-md h-[150px] border hover:scale-105 transition-transform ease-in-out'
                                />
                            </div>
                            <div className='col-span-6 grid grid-cols-1 gap-1  my-auto '>
                                <span className="font-medium text-lg ">{name.toUpperCase()}</span>
                                <p className="text-base line-clamp-1" >{description}</p>
                                <span className='flex'>
                                    <Fivestar rating={rating} /> ({usersrated})
                                </span>
                                <span className='text-xl flex items-end'>
                                    <PriceComponent price={parseInt(price as string)} units={units} />

                                </span>

                            </div>

                        </div>
                    </Link>

                </div>
                {/* desktop version */}
                <div
                    className={`hidden sm:block  m-4 p-4 bg-white border rounded-lg  hover:scale-[102.5%] hover:drop-shadow-md active:scale-95 transition-all ease-in-out`}
                >
                    <Link href={`/product/${_id}`}>

                        <div className="flex justify-center">
                            <div className=''>
                                <CldImage
                                    src={imageUrls[0]}
                                    width={600}
                                    height={600}
                                    alt='product image'
                                    className='h-40 lg:h-44 rounded-lg shadow-inner '
                                />
                            </div>
                        </div>
                        <div className={`mt-4 ${roboto.className} ${robotoslab.className} ${inter.className}`}>
                            <span className='font-medium text-md'>{name.toUpperCase()}</span>
                            <p className='line-clamp-1'>{description}</p>
                            <span className='flex text-xl gap-2'>
                                <PriceComponent price={parseInt(price as string)} units={units} />

                            </span>
                        </div>
                    </Link>
                </div>
            </div>


        );
    });
    return (
        <div className={` `}>
            {loadingstatus === 'Loading' && <ProductsPrefetch />}
            <div className={`flex flex-col items-center justify-center sm:grid sm:grid-cols-2  m:grid  m:grid-cols-3 gap-4 `}>
                {productCards}
            </div>
        </div>
    );
}
