'use client'
import { selectaddress } from '@app/redux/feautres/address/addressslice';
import { CreateOrder, SelectOrderStatus } from '@app/redux/feautres/orders/orderslice';
import { AppDispatch } from '@app/redux/store';
import AddressForm from '@components/Forms/AddressForm';
import CheckoutProductComponent from '@components/ProductCards/CheckoutProductComponent';
import DownArrowSVG from '@components/icons/Downarrowsvg'
import { useParams, useRouter } from 'next/navigation';
import router from 'next/router';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'zod';

const Page = () => {
    const [AdressDisplay, setAddressdisplay] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const [productsdisplay, setproductsdisplay] = useState<boolean>(false);
    const Address = useSelector(selectaddress);
    const { product_id } = useParams();


    const Orderstatus = useSelector(SelectOrderStatus);
    const [orderstatus, setorderstatus] = useState<typeof Orderstatus>();
    const router = useRouter();
    useEffect(() => {
        console.log(orderstatus, Orderstatus);
        if (orderstatus == 'loading' && Orderstatus === 'idle') {
            router.push('/payment/success');
        }
        setorderstatus(Orderstatus);
    }, [Orderstatus]);
    const handleorderclick = () => {
        if (!Address) {
            console.log('please add adress');
        }

        else {
            dispatch(CreateOrder({ product_id: product_id as string }));
        }
    }
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-l from-violet-500 to-indigo-700  text-white  py-2 px-6 w-full mx-2 ' onClick={() => { setAddressdisplay((prev) => !prev) }}>
                    <div>Step1: Check Your Address</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>
                {
                    AdressDisplay && <div className='form-transition'><AddressForm /></div>

                }
            </div>
            <div className='flex justify-center font-semibold'>
                <button className='flex justify-between bg-gradient-to-l from-violet-500 to-indigo-700 text-white  py-2 px-4 w-full mx-2 ' onClick={() => { setproductsdisplay((prev) => !prev) }}>
                    <div>Step2:Cross Check Products</div>
                    <DownArrowSVG />
                </button>
            </div>
            <div className='mx-2'>

                {
                    productsdisplay && <div className='form-transition'>
                        <CheckoutProductComponent />
                    </div>
                }

            </div>

            <div className='mx-auto flex justify-center'>

                <button
                    onClick={handleorderclick}
                    className='ripple'
                >
                    Ordernow
                </button>
            </div>
        </div>
    )
}

export default Page