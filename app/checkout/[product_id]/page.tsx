'use client'

import { checkoutcartaction, checkoutcartstate } from '@CustomTypes/ReduxType';
import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { SelectCartItems, SelectCartStatus } from '@app/redux/feautres/cart/cartslice';
import { CreateCartOrder, SelectOrderStatus } from '@app/redux/feautres/orders/orderslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store';
import MultistepNextButton from '@components/Buttons/MultistepNextButton';

import AddressForm from '@components/Forms/AddressForm';
import MultiStepProgressBar from '@components/Buttons/MultiStepProgressBar';
import CouponComponent from '@components/checkoutcards/CartCheckout/CouponComponent';

import Paymentinfo from '@components/checkoutcards/CartCheckout/PaymentInfo';
import CartProductComponent from '@components/cartpage/CartProductComponent';

import '@styles/globals.css';


import React, { useReducer, useState } from 'react';
import CheckoutProductComponent from '@components/checkoutcards/singleproductcheckout/CheckoutProductComponent';
import PaymentInfo from '@components/checkoutcards/singleproductcheckout/PaymentInfo';

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
                            <CheckoutProductComponent />
                            <MultistepNextButton state={state} dispatch={dispatch} />
                        </div>,
                        3: <div>
                            <CouponComponent />
                            <MultistepNextButton state={state} dispatch={dispatch} />
                        </div>,
                        4: <div>
                            <PaymentInfo />
                            <div />

                        </div>,
                    }[state.pageno]
                }
            </div>

        </div>
    );
};

export default Page;
