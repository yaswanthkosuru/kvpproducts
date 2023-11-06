import { GetSessionData } from "@utils/GetClientSession";
import Link from "next/link";
import { useParams, usePathname, useRouter } from 'next/navigation';
const BuynowComponent = () => {
    const { product_id } = useParams();
    const path = usePathname()
    var url = '';
    console.log(path.startsWith('/product'), 'is startswith /product');
    const id = product_id as string;
    const { status } = GetSessionData();
    const router = useRouter();
    const handlebuynowclick = () => {
        console.log('clicked');

        if (status === 'unauthenticated') {
            router.push('/loginpage');
        }
        else if (status === 'authenticated') {
            if (path.startsWith('/product')) {
                router.push('/checkout/' + product_id);
            }
            else if (path.startsWith('/cart')) {
                router.push('/checkout/cart');
            }
        }
        else {
            alert('please wait ... and try again');
        }
    }
    return (

        <button
            onClick={handlebuynowclick}
            className='ripple w-full max-w-md mx-auto'
        >
            Buy Now
        </button>

    )
}

export default BuynowComponent;