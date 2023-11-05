import { SelectOrders } from '@app/redux/feautres/orders/orderslice'
import AddtoCartComponent from '@components/Buttons/AddtoCartComponent'
import BuynowComponent from '@components/Buttons/BuyNowComponent'
import Fivestar from '@components/Buttons/RatingComponent'
import { ProductType } from '@models/ProductModel'
import { roboto, robotoslab } from '@styles/fonts'
import React from 'react'
import { useSelector } from 'react-redux'
type props = {
    product: ProductType
}

const ProductDetailsComponent = ({ product }: props) => {
    const orders = useSelector(SelectOrders);
    const rating = Math.round(product?.overallrating / product?.usersrated);
    return (
        <div className='w-full '>
            <div className={`${roboto.className} ${robotoslab.className}  text-gray-700 font-[900px] flex flex-col  justify-center gap-2 my-4 text-justify`}>
                <div className="  shadow-slate-100">
                    <span className=' text-2xl font font-semibold'>{product?.name?.toUpperCase()}</span><br />
                    <span className='font-medium'> {product?.description}</span>
                </div>
                <div></div>
                {orders?.length > 0 ?
                    (<div>
                        <span className=' font-bold text-[28px] mr-2'>&#8377;{product.price}  </span>
                    </div>
                    )
                    : (
                        <div>
                            <span className=' font-bold  text-[28px]  decoration-rose-500 line-through decoration-2 mr-2'>&#8377;{product.price}  </span>
                            <span className=' font-bold text-[28px]'>&#8377;{parseInt(product.price as string) - Math.ceil(0.6 * parseInt(product.price as string))} <span className='text-[8px] text-gray-400'> just for you</span></span>
                        </div>
                    )}
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