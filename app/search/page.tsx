'use client'
import React, { useState } from 'react'
import '@styles/globals.css'
import { Fusesearch } from '@utils/Fusesearch'
import { useSelector } from 'react-redux';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import Product_Component from '@components/ProductCards/ProductComponent';
import { ProductType } from '@models/ProductModel';
import FilteredProductComponent from '@components/ProductCards/FilteredProductComponent';
import Link from 'next/link';

const Page = () => {
    const products = useSelector(selectallproducts);
    const [filterproducts, setfilterproducts] = useState<ProductType[]>([]);
    const [inputval, setinputval] = useState<string>('');
    const handlechange = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        console.log(target.value);
        const option = Fusesearch(products, target.value as string);
        const temparr: ProductType[] = []
        option.forEach((o) => temparr.push(o.item));
        console.log(option);
        setfilterproducts(temparr);
        setinputval(target.value);
    }

    return (
        <div>
            <input
                className='border border-gray-900 w-full h-10  focus:outline-none'
                placeholder='search products'
                onChange={handlechange}
                value={inputval}
            >
            </input>

            <FilteredProductComponent products={filterproducts} />
        </div>
    )
}

export default Page