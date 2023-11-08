'use client'

import { checkoutcartaction, checkoutcartstate } from '@CustomTypes/ReduxType';
import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { SelectCartItems, SelectCartStatus } from '@app/redux/feautres/cart/cartslice';
import { CreateCartOrder, SelectOrderStatus } from '@app/redux/feautres/orders/orderslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store';
import MultistepNextButton from '@components/Buttons/MultistepNextButton';

import AddressForm from '@components/Forms/AddressForm';
import MultiStepProgressBar from '@components/Forms/MultiStepProgressBar';
import CouponComponent from '@components/ProductCards/CartCheckout/CouponComponent';

import Paymentinfo from '@components/ProductCards/CartCheckout/PaymentInfo';
import CartProductComponent from '@components/ProductCards/CartProductComponent';
import DownArrowSVG from '@components/icons/Downarrowsvg';
import { inter } from '@styles/fonts';

import '@styles/globals.css';
import { stat } from 'fs';
import { useRouter } from 'next/navigation';
import { type } from 'os';

import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initialState: checkoutcartstate = {
    pageno: 1
};

// Define your reducer function
const reducer = (state: checkoutcartstate, action: checkoutcartaction) => {

    switch (action.type) {
        case 'setpageno':
            return { ...state, pageno: action.payload };
    }
};

const Page = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const cartitems = useSelector(SelectCartItems);
    const Address = useSelector(selectaddress);
    const Orderstatus = useSelector(SelectOrderStatus);
    const dispatchRedux = useDispatch<AppDispatch>();
    const router = useRouter();
    const handleorderclick = async () => {
        if (!Address) {
            alert('please add address');
        } else if (!cartitems || cartitems.length <= 0) {
            alert('please add products');
        } else {
            await dispatchRedux(CreateCartOrder());
            router.push('/payment/success');
        }
    };
    console.log(state.pageno, 'pageno');

    return (
        <div>
            <MultiStepProgressBar state={state} dispatch={dispatch} />
            <div className='mt-5 mx-2'>
                {
                    {
                        1: <div>
                            <AddressForm />
                            <MultistepNextButton state={state} dispatch={dispatch} />
                        </div>,
                        2: <div>
                            <CartProductComponent />
                            <MultistepNextButton state={state} dispatch={dispatch} />
                        </div>,
                        3: <div>
                            <CouponComponent />
                            <MultistepNextButton state={state} dispatch={dispatch} />
                        </div>,
                        4: <div>
                            <Paymentinfo />
                            <div className='flex justify-center'>
                                <button onClick={handleorderclick} className='ripple w-full mt-4'>Order now</button>

                            </div>
                        </div>,
                    }[state.pageno]
                }
            </div>

        </div>
    );
};

export default Page;
