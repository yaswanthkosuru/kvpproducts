'use client'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getallproducts, selectproductstatus } from "@app/redux/feautres/products/product-slice";
import { AppDispatch } from "@app/redux/store";

import ProductsComponent from '@components/productspage/productsComponent';
import "@styles/globals.css";

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
        <ProductsComponent />
      </div>
    </div>
  );
}
