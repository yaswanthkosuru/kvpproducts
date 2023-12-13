'use client'

import React, { use, useEffect, useState } from 'react';

import { selectproductwithid, getproduct } from '@app/redux/feautres/products/product-slice';
import { RootState, AppDispatch } from '@app/redux/store';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import SwiperImagecomponent from '@components/productdetailspage/SwiperImagecomponent';
import ProductDetailsComponent from '@components/productdetailspage/ProductDetailsComponent';
import AddtoCartComponent from '@components/Buttons/AddtoCartComponent';
import ProductPrefetch from '@components/Skeletons/productprefetch';
import { SelectCartStatus } from '@app/redux/feautres/cart/cartslice';
import DisableandLoadingComponent from '@components/PassiveComponents/Disablepageandloading';
import ReviewComponent from '@components/PassiveComponents/ReviewComponent';


export default function Page() {
    const { product_id } = useParams();

    const id = product_id as string;
    console.log(id, 'pageproductid');

    const product = useSelector((state: RootState) => selectproductwithid(state, id));
    console.log(product, 'page p/pid');
    const { imageUrls } = product || {};

    const dispatchRedux = useDispatch<AppDispatch>();
    const CartStatus = useSelector(SelectCartStatus);
    const [loadingstatus, setloadingstatus] = useState<'idle' | 'pending' | 'rejected'>();
    useEffect(() => {
        setloadingstatus(CartStatus);
    }, [CartStatus])



    return (
        <div className='mt-4 sm:mx-10'>
            {!product && loadingstatus === 'pending' && <ProductPrefetch />}

            {product && <div>
                <div className='flex max-m:flex-col  sm:gap-4  '>
                    <SwiperImagecomponent
                        imageUrls={imageUrls}
                    />

                    <ProductDetailsComponent product={product} />


                </div>
                <div className=''>
                    <div className='font-bold text-[24px]'>
                        Reviews:
                    </div>
                    <div>
                        <hr />
                        <ReviewComponent />
                    </div>
                </div>
            </div>}


        </div>
    )


}
