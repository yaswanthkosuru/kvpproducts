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
import { playfairdisplay, roboto } from '@styles/fonts';
import { useRouter } from 'next/navigation';

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
    const router = useRouter()
    const handlebackclick = () => {
        router.back();
    }

    return (
        <div>

            <div className='flex m-1'>
                <button onClick={handlebackclick} className='border border-gray-500 h-10 px-2 font-bold'>
                    <span className={`text-xl ${roboto.className} ${playfairdisplay.className}`}>&#8592;</span>
                </button>
                <input
                    className='border border-gray-900 w-full h-10  pl-2 focus:outline-none'
                    placeholder='search products'
                    onChange={handlechange}
                    value={inputval}
                >
                </input>


            </div>
            <FilteredProductComponent products={filterproducts} />
        </div>
    )
}

export default Page