import { SelectOrders, getorders } from '@app/redux/feautres/orders/orderslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store'
import DownArrowSVG from '@components/icons/Downarrowsvg';
import { inter, merriweather, playfairdisplay, roboto, robotoslab } from '@styles/fonts';
import { CldImage } from 'next-cloudinary';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OrderProducts } from './OrderProducts';
import RatingInputUserForm from '@components/Forms/RatingForm';

const OrderComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getorders());
    }, [])
    const orders = useSelector(SelectOrders);
    const mp = {};
    //usestate for moredetails and reviews 

    const [moredetails, setmoredetails] = useState({});

    const styledorders = orders?.map((order, index) => {
        const currentDate = new Date(order.time);
        const formattedDate = currentDate.toLocaleDateString();
        const { address, orderstatus } = order;
        let str = ''
        for (const key in address) {
            str += address[key];
            str += ',  '
        }
        return (
            <div
                key={index}
                className=' py-2 max-w-md mx-auto  text-gray-800 bg-slate-200/60 '>
                <div className='text-center  font-medium mx-auto'>

                    <span className=''>
                        ORDERED ON: {formattedDate}
                    </span>
                </div>
                <OrderProducts
                    items={order?.items}
                />
                <div onClick={() => setmoredetails(prev => {
                    const newarr = { ...prev };
                    newarr[order._id.toString()] = !newarr[order._id.toString()];
                    return newarr;
                })}
                    className='flex items-center px-4 mx-4 bg-white/70 justify-between cursor-pointer py-2 mt-4'
                >
                    <div className='text-[18px] '>more details</div>
                    <DownArrowSVG />
                </div>


                {
                    moredetails[order._id.toString()] && (
                        <div className={`${roboto.className} ${robotoslab.className} ${inter.className} bg-white/60 mx-4 px-4  form-transition`}>
                            <div>
                                Total amount :
                                <span >
                                    &#8377;{order.amount}
                                </span>
                            </div>

                            <div>
                                Ordertype :
                                <span >
                                    {order.ordertype}
                                </span>
                            </div>
                            <div >
                                AddressDetails:
                                <span >
                                    {str}
                                </span>
                            </div>
                            <div >
                                Orderstatus:
                                <span >
                                    {orderstatus}
                                </span>
                            </div>
                        </div>
                    )
                }



            </div>
        )
    })
    if (!orders) {
        return <div></div>
    }
    return (
        <div className='flex flex-col gap-6'>
            <div className={`${roboto.className} ${robotoslab.className} font-bold`}></div>
            {styledorders}
        </div>
    )
}

export default OrderComponent