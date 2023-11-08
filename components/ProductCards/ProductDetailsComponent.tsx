import { SelectOrders } from '@app/redux/feautres/orders/orderslice'
import AddtoCartComponent from '@components/Buttons/AddtoCartComponent'
import BuynowComponent from '@components/Buttons/BuyNowComponent'
import Fivestar from '@components/Buttons/FiveStar'
import { ProductType } from '@models/ProductModel'
import { roboto, robotoslab } from '@styles/fonts'
import React from 'react'
import { useSelector } from 'react-redux'
import { PriceComponent } from './PriceComponent'
type props = {
    product: ProductType
}

const ProductDetailsComponent = ({ product }: props) => {
    const orders = useSelector(SelectOrders);
    const rating = Math.round(product?.overallrating / product?.usersrated);
    if (!product) {
        return <></>
    }
    const { name, description, price, units, caloriespercent, usersrated, overallrating } = product;

    return (
        <div className='w-full text-gray-800'>
            <div className={`${roboto.className} ${robotoslab.className}  text-gray-700  flex flex-col  justify-center gap-2 my-4 text-justify`}>
                <div className="  shadow-slate-100">
                    <span className=' text-xl font '>{name?.toUpperCase()}</span><br />
                    <span className='text-md'> {description}</span>
                </div>
                <div></div>
                <span className='text-2xl'>
                    <PriceComponent price={parseInt(price as string)} units={units} />
                </span>
                <span className=' text-[18px]'>calories obtained:{caloriespercent} per 100 g</span>
                <div>
                    <Fivestar rating={rating} />
                    <span className=''>
                        No of Users rated:{usersrated}
                    </span>
                </div>




            </div>
        </div>
    )
}

export default ProductDetailsComponent