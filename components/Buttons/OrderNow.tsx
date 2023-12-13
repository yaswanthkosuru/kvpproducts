import { selectaddress } from '@app/redux/feautres/address/addressslice'
import { SelectCartItems, resetCart } from '@app/redux/feautres/cart/cartslice';
import { selectcouponcode } from '@app/redux/feautres/clientside/clientslice';
import { CreateCartOrder } from '@app/redux/feautres/orders/orderslice';
import { AppDispatch } from '@app/redux/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { number } from 'zod';
type props = {
    price: number,

}
const OrderNow = ({ price }: props) => {
    const address = useSelector(selectaddress);
    const cart = useSelector(SelectCartItems);
    const coupon = useSelector(selectcouponcode);
    const dispatch = useDispatch<AppDispatch>();
    const handleorderclick = async () => {
        if (!address) {
            alert('please select an address');
        }
        else if (!cart || !cart.length) {
            alert('please select a cart items ')
        }
        else {
            await dispatch(CreateCartOrder({ price, coupon }))
            dispatch(resetCart());
            alert('ordered successfully')
        }

    }
    return (
        <button
            onClick={handleorderclick}
            className='cart-button m:w-1/2 m:mx-auto'>
            OrderNow
        </button>
    )
}

export default OrderNow