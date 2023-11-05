import React, { useEffect, useState } from 'react'
import '@styles/globals.css'
import { useDispatch, } from 'react-redux'
import { AppDispatch } from '@app/redux/store'
import { AddCartItem, } from '@app/redux/feautres/cart/cartslice'
import { useParams, useRouter } from 'next/navigation'
import { GetSessionData } from '@utils/GetClientSession'

const AddtoCartComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { product_id } = useParams();
    const p_id = product_id as string;
    const { status, session } = GetSessionData();
    const router = useRouter();
    const Addtocart = async () => {
        if (status === 'unauthenticated') {

            router.push('/loginpage');
        }
        else if (status === 'authenticated') {
            dispatch(AddCartItem({ p_id }))
        }
        else {
            alert('please wait... and try again');
        }
    }

    return (
        <button
            onClick={Addtocart}
            className='ripple flex w-full justify-center gap-1 m:gap-6   items-center'
        >

            Add To Cart
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>



        </button>
    )
}

export default AddtoCartComponent