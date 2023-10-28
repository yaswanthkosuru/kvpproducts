import AddtoCartComponent from '@components/Buttons/AddtoCartComponent'
import BuynowComponent from '@components/Buttons/BuyNowComponent'
import Fivestar from '@components/Buttons/RatingComponent'
import { ProductType } from '@models/ProductModel'
import { roboto, robotoslab } from '@styles/fonts'
import React from 'react'
type props = {
    product: ProductType
}
const ProductDetailsComponent = ({ product }: props) => {

    const rating = Math.round(product?.overallrating / product?.usersrated);
    return (
        <div className='w-full '>
            <div className={`${roboto.className} ${robotoslab.className}  text-gray-800 font-[900px] flex flex-col  justify-center gap-2 my-4 text-justify`}>
                <div className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-rose-50 to-teal-50  border-none  outline-none shadow-slate-100">
                    <span className=' text-2xl font'>{product?.name?.toUpperCase()}</span><br />
                    <span> {product?.description}</span>
                </div>
                <div></div>
                <span className=' text-[30px] font-extrabold'>&#8377; {product?.price} </span>
                <span className=' text-[18px]'>calories obtained:{product?.caloriespercent} per 100 g</span>
                <div>
                    <Fivestar rating={rating} />
                    <span className='font-bold'>
                        No of Users rated:{product?.usersrated}
                    </span>
                </div>




            </div>
        </div>
    )
}

export default ProductDetailsComponent