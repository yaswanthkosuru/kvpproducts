'use client'

import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { SelectCartItems } from '@app/redux/feautres/cart/cartslice';

import AddressForm from '@components/Forms/AddressForm';
import Paymentinfo from '@components/ProductCards/CartCheckout/PaymentInfo';
import CartProductComponent from '@components/ProductCards/CartProductComponent';

import '@styles/globals.css';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function DownArrowSVG() {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 10l5 5 5-5H7z"
                fill="#000" // You can set the fill color here
            />
        </svg>
    );
}


const Page = ({ }) => {
    const cartitems = useSelector(SelectCartItems);
    const Address = useSelector(selectaddress);
    const [Addressdisplay, setAddressdisplay] = useState<boolean>(false);
    const [productsdisplay, setproductsdisplay] = useState<boolean>(false);
    const [paymentinfo, setpaymentinfodisplay] = useState<boolean>(false);
    const [error, seterror] = useState('')

    const handleorderclick = () => {
        if (!Address) {
            console.log('please add adress');
        }
        else if (!cartitems || cartitems.length <= 0) {
            console.log('please add products');
        }
        else if (cartitems.length > 0) {
            //check valid product ids

        }
        if ('cod means') {
            //simply add product
        }
        else if ('stripe means') {
            //go to stripe dashboard
        }

    }
    return (
        <div className='flex flex-col mt-5 gap-4'>


            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-4 w-full mx-2 ' onClick={() => { setAddressdisplay((prev) => !prev) }}>
                    <div>Step1: Check Your Address</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {
                    Addressdisplay && <div className='form-transition'><AddressForm /></div>

                }
            </div>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-4 w-full mx-2 ' onClick={() => { setproductsdisplay((prev) => !prev) }}>
                    <div>Step2:Cross Check Products</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>

                {
                    productsdisplay && <div className='form-transition'> <CartProductComponent /></div>
                }
            </div>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100  py-2 px-4 w-full mx-2 ' onClick={() => { setpaymentinfodisplay((prev) => !prev) }}>
                    <div>Step3:Payment Info</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>

                {
                    paymentinfo && <div className='form-transition'> <Paymentinfo /></div>
                }
            </div>
            <div className='flex justify-center'>

                <button
                    onClick={handleorderclick}
                    className='ripple w-1/2'

                >
                    Ordernow
                </button>
            </div>
        </div>
    )

}

export default Page;
