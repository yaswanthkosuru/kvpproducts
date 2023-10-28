'use client'

import React, { useEffect, useState } from 'react';

import { selectproductwithid, getproduct } from '@app/redux/feautres/products/product-slice';
import { RootState, AppDispatch } from '@app/redux/store';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import BuynowComponent from '@components/Buttons/BuyNowComponent';
import SwiperImagecomponent from '@components/ProductCards/SwiperImagecomponent';
import ProductDetailsComponent from '@components/ProductCards/ProductDetailsComponent';
import AddtoCartComponent from '@components/Buttons/AddtoCartComponent';
import ProductPrefetch from '@components/Skeletons/productprefetch';
import { SelectCartStatus } from '@app/redux/feautres/cart/cartslice';
import DisableandLoadingComponent from '@components/Loading';
export default function Page() {
    const { product_id } = useParams();

    const id = product_id as string;
    const product = useSelector((state: RootState) => selectproductwithid(state, id));
    console.log(product, 'page p/pid');
    const { imageUrls } = product || {};

    const dispatch = useDispatch<AppDispatch>();
    const CartStatus = useSelector(SelectCartStatus);
    const [loadingstatus, setloadingstatus] = useState<'idle' | 'Loading' | 'rejected'>();

    useEffect(() => {
        setloadingstatus(CartStatus);
    }, [CartStatus])
    useEffect(() => {
        if (!product || Object.keys(product).length == 0) {
            dispatch(getproduct({ id }));
        }
    }, [])

    if (!product && loadingstatus === 'Loading') {
        return <div><ProductPrefetch /></div>
    }

    return (
        <div className='mt-4 sm:mx-10'>

            <div className='flex max-m:flex-col  sm:gap-4  '>
                <SwiperImagecomponent
                    imageUrls={imageUrls}
                />
                <ProductDetailsComponent product={product} />
            </div>
            <div className=' grid grid-cols-2 m:w-[55%] gap-4'>
                <AddtoCartComponent />
                <BuynowComponent />

            </div>
            <div className='font-bold text-[24px]'>
                Reviews:
            </div>
        </div>
    )


}
