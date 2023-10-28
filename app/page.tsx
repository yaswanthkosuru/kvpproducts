'use client'
import Adds_Component from '@components/HomePage/Adds';
import Recomended_Component from '@components/HomePage/Recomender';
import CardCourseral from "@components/HomePage/CardCarousel"
import Discount_Component from '@components/HomePage/Discount';
import Small_Product_Component from '@components/HomePage/Small_Product';
import Product_Component from '@components/ProductCards/ProductComponent';
export default function Page() {
    return (
        <div className='mx-2 mt-4'>
            <Product_Component />
        </div>
    )

}