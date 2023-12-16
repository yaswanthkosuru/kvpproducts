import React, { useEffect, useState } from 'react'
import '@styles/globals.css'
import { useDispatch, useSelector, } from 'react-redux'
import { AppDispatch, RootState } from '@app/redux/store'
import { AddCartItem, SelectCartItems, } from '@app/redux/feautres/cart/cartslice'
import { useParams, useRouter } from 'next/navigation'
import { GetSessionData } from '@utils/GetClientSession'
import { selectproductwithid } from '@app/redux/feautres/products/product-slice'
import Link from 'next/link'
type props = {
    stockQuantity: number
}
const AddtoCartComponent = ({ stockQuantity }: props) => {
    const dispatch = useDispatch<AppDispatch>();
    const { product_id } = useParams();
    const p_id = product_id as string;
    const product = useSelector((state: RootState) => selectproductwithid(state, p_id));
    console.log(product, 'insideaddtocart');
    const { status, session } = GetSessionData();
    const router = useRouter();
    const Addtocart = async () => {
        if (status === 'unauthenticated') {

            router.push('/loginpage');
        }
        else if (status === 'authenticated') {
            dispatch(AddCartItem({ product: product }))
        }
        else {
            alert('please wait... and try again');
        }
    }
    if (stockQuantity < 0) {
        return <span className='text-red-500 text-xl text-center'>Not availible</span>
    }
    const cartitems = useSelector(SelectCartItems);
    const isfound = cartitems?.find((c) => c._id.toString() == p_id);
    console.log(isfound, 'isfound');

    if (isfound) {
        return < Link
            href='/cart'
            className=' cart-button flex w-full justify-center gap-1 m:gap-6   items-center'
        >


            Go To Cart

            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>



        </Link >
    }

    return (
        <button
            onClick={Addtocart}
            className=' cart-button flex w-full justify-center gap-1 m:gap-6   items-center'
        >

            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Add To Cart



        </button>
    )
}

export default AddtoCartComponent