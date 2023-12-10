'use client'

import Slidingbanners from "@components/HomePage/banners"
import Categories from "@components/HomePage/Categories"
import Small_Product_Component from "@components/HomePage/Small_Product"
import Productscomponent from "@components/productspage/productsComponent"
export default function Page() {
    return (
        <div className=''>
            <Slidingbanners />
            <Categories />
            <div className=" block m:hidden"><Small_Product_Component /></div>
            <Productscomponent />
        </div>
    )

}