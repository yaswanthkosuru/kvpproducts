'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import FilteredProductComponent from '@components/searchpage/FilteredProductComponent';
import { motion } from 'framer-motion';
import { filteredproductvariants } from '@framer/Variants';
const page = () => {
    const a = useSearchParams();
    console.log(a.get('name'), 'search results');
    var products = useSelector(selectallproducts);
    console.log(products);

    products = products.filter((product) => product.category === a.get('name'))
    console.log('matched products:', products);


    return (
        <div className=''>
            <motion.div initial='initial' animate='after' variants={filteredproductvariants}>
                <FilteredProductComponent products={products} />
            </motion.div>
        </div>
    )
}

export default page