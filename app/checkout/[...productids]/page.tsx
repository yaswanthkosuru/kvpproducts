'use client'

import CheckoutProductComponent from '@components/ProductCards/CheckoutProductComponent';
import '@styles/globals.css';
import { useParams } from 'next/navigation';


const Page = ({ }) => {
    const { productids } = useParams();
    const pids = productids as string[];
    console.log(productids, 'checkoutpage');
    return (
        <CheckoutProductComponent product_ids={pids} />
    )

}

export default Page;
