'use client'
import { store } from '@app/redux/store';
import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { GetSessionData } from '@utils/GetClientSession';
import { getallproducts, } from '@app/redux/feautres/products/product-slice';
import { getcartitems } from '@app/redux/feautres/cart/cartslice';
export default function Reduxprovider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        async function fun() {
            await store.dispatch(getallproducts());
            await store.dispatch(getcartitems());
        } fun();
    }, []);

    return <Provider store={store}>
        {children}
    </Provider>
}