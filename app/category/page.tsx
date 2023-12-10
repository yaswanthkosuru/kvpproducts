'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import FilteredProductComponent from '@components/searchpage/FilteredProductComponent';
import { motion } from 'framer-motion';
import { filteredproductvariants } from '@framer/Variants';
import ProductsPrefetch from '@components/Skeletons/ProductsPrefetch';
import { inter } from '@styles/fonts';
const page = () => {
    const a = useSearchParams();
    console.log(a.get('name'), 'search results');
    var products = useSelector(selectallproducts);
    console.log(products);

    products = products?.filter((product) => product.category === a.get('name'))
    console.log('matched products:', products);
    if (!products) {
        return <ProductsPrefetch />
    }
    return (
        <div className=''>
            <motion.div initial='initial' animate='after' variants={filteredproductvariants}>
                <div className=''>
                    <span className='text-gray-600'>showing</span>
                    <span className={`text-xl font-sans`}> {a.get('name')}</span>
                    <FilteredProductComponent products={products} />
                </div>
            </motion.div>
        </div>
    )
}

export default page