import { productdetails } from '@CustomTypes/ReduxType';
import { updatecart, deletecartitem } from '@app/redux/feautres/cart/cartslice';
import { AppDispatch } from '@app/redux/store';
import React from 'react'
import { useDispatch } from 'react-redux';
import Delete_icon from './Delete';
type props = {
    product: productdetails,
    cartquantity: number,
}
const CartQuantityChange = ({ product, cartquantity }: props) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleupdatecart = ({ product, increment }: { product: productdetails, increment: boolean }) => {
        dispatch(updatecart({ product: product, increment }));
    }
    return (
        <div className="flex gap-4  rounded-md items-center ">
            <button
                onClick={() => handleupdatecart({ product: product, increment: false })}
                className='w-8 h-8 flex justify-center items-center rounded-full border-gray-200 border shadow-inner hover:bg-blue-100 active:bg-blue-500'
            >
                -
            </button>
            <button className='border border-gray-200 px-6'>
                {cartquantity}
            </button>
            <button
                onClick={() => handleupdatecart({ product: product, increment: true })}
                className='w-8 h-8 flex justify-center items-center rounded-full border-gray-200 border shadow-inner hover:bg-blue-100 active:bg-blue-500'>
                +
            </button>
            <button className='active:bg-red-300 p-1' onClick={() => dispatch(deletecartitem({ product_id: product._id.toString() }))}><Delete_icon /></button>
        </div>
    )
}

export default CartQuantityChange


