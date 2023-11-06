'use client'

import { checkoutcartaction, checkoutcartstate } from '@CustomTypes/ReduxType';
import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { SelectCartItems, SelectCartStatus } from '@app/redux/feautres/cart/cartslice';
import { CreateCartOrder, SelectOrderStatus } from '@app/redux/feautres/orders/orderslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store';

import AddressForm from '@components/Forms/AddressForm';
import Paymentinfo from '@components/ProductCards/CartCheckout/PaymentInfo';
import CartProductComponent from '@components/ProductCards/CartProductComponent';
import DownArrowSVG from '@components/icons/Downarrowsvg';

import '@styles/globals.css';
import { useRouter } from 'next/navigation';

import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initialState: checkoutcartstate = {
    addressDisplay: false,
    productsDisplay: false,
    paymentInfoDisplay: false,
    couponDisplay: false,
};

// Define your reducer function
const reducer = (state: checkoutcartstate, action: checkoutcartaction) => {

    switch (action.type) {

        case 'ToggleAddress':
            return { ...state, addressDisplay: !state.addressDisplay };
        case 'ToggleProducts':
            return { ...state, productsDisplay: !state.productsDisplay };
        case 'TogglePaymentInfo':
            return { ...state, paymentInfoDisplay: !state.paymentInfoDisplay };
        case 'ToggleCouponDisplay':
            return { ...state, couponDisplay: !state.couponDisplay };
        default:
            return state;
    }
};

const Page = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const cartitems = useSelector(SelectCartItems);
    const Address = useSelector(selectaddress);
    const Orderstatus = useSelector(SelectOrderStatus);
    const dispatchRedux = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleorderclick = () => {
        if (!Address) {
            console.log('please add address');
        } else if (!cartitems || cartitems.length <= 0) {
            console.log('please add products');
            alert('no items');
        } else {
            dispatchRedux(CreateCartOrder());
            if (Orderstatus === 'idle') {
                router.push('/payment/success');
            }
        }
    };

    return (
        <div className='flex flex-col mt-5 gap-4'>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-4 w-full mx-2' onClick={() => dispatch({
                    type: 'ToggleAddress',

                })}>
                    <div>Step1: Check Your Address</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {state.addressDisplay && <div className='form-transition'><AddressForm /></div>}
            </div>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-4 w-full mx-2' onClick={() => dispatch({
                    type: 'ToggleProducts',

                })}>
                    <div>Step2: Cross Check Products</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {state.productsDisplay && <div className='form-transition'><CartProductComponent /></div>}
            </div>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-4 w-full mx-2' onClick={() => dispatch({
                    type: 'TogglePaymentInfo',

                })}>
                    <div>Step3: Payment Info</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {state.paymentInfoDisplay && <div className='form-transition'><Paymentinfo /></div>}
            </div>
            <div className='flex justify-center'>
                <button onClick={handleorderclick} className='ripple w-1/2'>
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Page;
