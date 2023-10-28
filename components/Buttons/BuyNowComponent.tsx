import Link from "next/link";
import { useParams, usePathname } from 'next/navigation';
const BuynowComponent = () => {
    const { product_id } = useParams();
    const path = usePathname()
    var url = '';
    console.log(path.startsWith('/product'), 'is startswith /product');
    if (path.startsWith('/product')) {
        url = '/checkout/' + product_id
    }
    else if (path.startsWith('/cart')) {
        url = '/checkout/cart'
    }
    const id = product_id as string;
    return (
        <Link
            className="flex justify-center"
            href={url}
        >
            <button
                className='ripple w-full max-w-sm mx-auto'
            >
                Buy Now
            </button>
        </Link>
    )
}

export default BuynowComponent;