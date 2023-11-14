'use client'

import Adds_Component from '@components/HomePage/Adds';
import CardCarousel from '@components/HomePage/CardCarousel';
import Discount_Component from '@components/HomePage/Discount';
import Recomended_Component from '@components/HomePage/Recomender';
import Small_Product_Component from '@components/HomePage/Small_Product';
import Product_Component from '@components/productspage/ProductComponent';
export default function Page() {
    return (
        <div className=''>
            <CardCarousel />
            <Small_Product_Component />
            <div className='my-40'></div>
        </div>
    )

}