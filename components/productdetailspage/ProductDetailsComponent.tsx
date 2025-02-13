import { SelectOrders } from '@app/redux/feautres/orders/orderslice'
import AddtoCartComponent from '@components/Buttons/AddtoCartComponent'
import BuynowComponent from '@components/Buttons/BuyNowComponent'
import Fivestar from '@components/productspage/FiveStar'
import { productType } from '@models/product'
import { roboto, robotoslab } from '@styles/fonts'
import React from 'react'
import { useSelector } from 'react-redux'
import { PriceComponent } from '../productspage/PriceComponent'
type props = {
    product: productType
}

const ProductDetailsComponent = ({ product }: props) => {
    const orders = useSelector(SelectOrders);
    const rating = Math.round(product?.overallrating / product?.usersrated);
    if (!product) {
        return <></>
    }
    const { name, description, price, units, caloriespercent, usersrated, overallrating, stockQuantity } = product;

    return (
        <div className='w-full text-gray-800'>
            <div className={`${roboto.className} ${robotoslab.className}  text-gray-700  flex flex-col  justify-center gap-2 my-4 text-justify`}>
                <div className="  shadow-slate-100">
                    <span className=' text-xl font '>{name?.toUpperCase()}</span><br />
                    <span className='text-md'> {description}</span>
                </div>
                <div></div>
                <span className='text-2xl'>
                    <PriceComponent price={price} units={units} />
                </span>
                <span className=' text-[18px]'>calories obtained:{caloriespercent} per 100 g</span>
                <div>

                    <span className=''>
                        No of Users rated:{usersrated}
                    </span>
                </div>
                <AddtoCartComponent stockQuantity={stockQuantity} />



            </div>
        </div>
    )
}

export default ProductDetailsComponent