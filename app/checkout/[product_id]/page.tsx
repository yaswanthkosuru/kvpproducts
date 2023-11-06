'use client'
import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { CreateOrder, SelectOrderStatus } from '@app/redux/feautres/orders/orderslice';
import { AppDispatch } from '@app/redux/store';
import AddressForm from '@components/Forms/AddressForm';
import CheckoutProductComponent from '@components/ProductCards/CheckoutProductComponent';
import DownArrowSVG from '@components/icons/Downarrowsvg'
import { useParams, useRouter } from 'next/navigation';
import router from 'next/router';
import { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'zod';

// Define your initial state
const initialState = {
    addressDisplay: false,
    productsDisplay: false,
    orderStatus: 'idle',
};

// Define your reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'ToggleAddress':
            return { ...state, addressDisplay: !state.addressDisplay };
        case 'ToggleProducts':
            return { ...state, productsDisplay: !state.productsDisplay };
        case 'SetOrderStatus':
            return { ...state, orderStatus: action.payload };
        default:
            return state;
    }
};

const Page = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const Address = useSelector(selectaddress);
    const { product_id } = useParams();
    const Orderstatus = useSelector(SelectOrderStatus);
    const router = useRouter();

    useEffect(() => {
        if (state.orderStatus === 'loading' && Orderstatus === 'idle') {
            // from loading to idle means payment success
            router.push('/payment/success');
        }
        dispatch({ type: 'SetOrderStatus', payload: Orderstatus });
    }, [Orderstatus, state.orderStatus]);

    const handleorderclick = () => {
        if (!Address) {
            console.log('Please add address');
        } else {
            dispatch(CreateOrder({ product_id: product_id as string }));
        }
    };

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-6 w-full mx-2' onClick={() => dispatch({ type: 'ToggleAddress' })}>
                    <div>Step1: Check Your Address</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {state.addressDisplay && <div className='form-transition'><AddressForm /></div>}
            </div>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 py-2 px-4 w-full mx-2' onClick={() => dispatch({ type: 'ToggleProducts' })}>
                    <div>Step2: Cross Check Products</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {state.productsDisplay && (
                    <div className='form-transition'>
                        <CheckoutProductComponent />
                    </div>
                )}
            </div>

            <div className='mx-auto flex justify-center'>
                <button onClick={handleorderclick} className='ripple'>
                    Order Now
                </button>
            </div>
        </div>
    );
};




export default Page