'use client'

import Nav from "@components/HeaderFooter/Desktop/DesktopNav"
import Slidingbanners from "@components/HomePage/banners"
import Categories from "@components/HomePage/Categories"
import CeoImage from "@components/HomePage/Ceoimage"
import Services from "@components/HomePage/Services"
import Small_Product_Component from "@components/HomePage/Small_Product"
import Productscomponent from "@components/productspage/productsComponent"
import { lato, merriweather, montsterrat, playfairdisplay, ptserif } from "@styles/fonts"
export default function Page() {
    return (
        <div className='m:w-3/4 mx-auto pb-20 m:pb-0'>
            <Nav />

            <Slidingbanners />
            <Categories />
            <div className=" block m:hidden"><Small_Product_Component /></div>

            <div className=" block m:hidden">

                <CeoImage />
            </div>

            <Productscomponent />
        </div>
    )

}