'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import { SelectCartItems, SelectCartLength, getcartitems } from '@app/redux/feautres/cart/cartslice';
import { usePathname } from 'next/navigation';
import { GetSessionData } from '@utils/GetClientSession';
import { AppDispatch } from '@app/redux/store';
const Navcart = () => {
    const pathname = usePathname();
    const { session, status } = GetSessionData();
    const dispatch = useDispatch<AppDispatch>();

    const cartlen = useSelector(SelectCartLength);


    useEffect(() => {
        if (status === 'authenticated' && !cartlen) {
            dispatch(getcartitems());
        }
    }, []);
    const divColor = pathname == '/cart' ? '#0000CD' : '#080808'
    const border = pathname == '/cart' ? 'border-t-4 border-blue-800' : '';
    return (
        <div
            style={{ color: divColor }}
            className={`active:bg-slate-100  transition-colors  rounded-sm ${border}`}
        >
            <Link className="relative flex flex-col items-center justify-center " href="/cart">
                <svg

                    width="50px" height="25px" viewBox="0 0 30 30" version="1.1" >
                    <g id="icomoon-ignore" >
                    </g>
                    <path d="M30.622 9.602h-22.407l-1.809-7.464h-5.027v1.066h4.188l5.198 21.443c-1.108 0.323-1.923 1.334-1.923 2.547 0 1.472 1.193 2.666 2.666 2.666s2.666-1.194 2.666-2.666c0-0.603-0.208-1.153-0.545-1.599h7.487c-0.337 0.446-0.545 0.997-0.545 1.599 0 1.472 1.193 2.666 2.665 2.666s2.666-1.194 2.666-2.666c0-1.473-1.193-2.665-2.666-2.666v0h-11.403l-0.517-2.133h14.968l4.337-12.795zM13.107 27.196c0 0.882-0.717 1.599-1.599 1.599s-1.599-0.717-1.599-1.599c0-0.882 0.717-1.599 1.599-1.599s1.599 0.718 1.599 1.599zM24.836 27.196c0 0.882-0.718 1.599-1.6 1.599s-1.599-0.717-1.599-1.599c0-0.882 0.717-1.599 1.599-1.599 0.882 0 1.6 0.718 1.6 1.599zM11.058 21.331l-2.585-10.662h20.662l-3.615 10.662h-14.462z"

                        fill=" currentColor"
                    >
                    </path>
                </svg>
                <div className=''>
                    cart
                </div>

                <div className="absolute  text-[9px] font-extrabold  bg-red-500 text-white rounded-full px-1 top-1 right-2 ">
                    {cartlen}
                </div>
            </Link>
        </div>
    )
}

export default Navcart;