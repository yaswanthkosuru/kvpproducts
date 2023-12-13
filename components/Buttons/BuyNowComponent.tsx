import { GetSessionData } from "@utils/GetClientSession";
import Link from "next/link";
import { useParams, usePathname, useRouter } from 'next/navigation';
const BuynowComponent = () => {
    const { product_id } = useParams();

    const { status } = GetSessionData();
    const router = useRouter();
    const handlebuynowclick = () => {
        console.log('clicked');

        if (status === 'unauthenticated') {
            router.push('/loginpage');
        }
        else if (status === 'authenticated') {


            router.push('/checkout');

        }
        else {
            alert('please wait ... and try again');
        }
    }
    return (

        <button
            onClick={handlebuynowclick}
            className='cart-button w-full max-w-md mx-auto'
        >
            Buy Now
        </button>

    )
}

export default BuynowComponent;