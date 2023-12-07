'use client'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getallproducts, selectproductstatus } from "@app/redux/feautres/products/product-slice";
import { AppDispatch } from "@app/redux/store";

import Product_Component from '@components/productspage/ProductComponent';
import "@styles/globals.css";
import DisableandLoadingComponent from '@components/PassiveComponents/Disablepageandloading';

export default function Home() {
  // Use local state for status
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log('inside useEffect');
    dispatch(getallproducts());
  }, []);


  return (
    <div>
      <div className="">
        <Product_Component />
      </div>
    </div>
  );
}
