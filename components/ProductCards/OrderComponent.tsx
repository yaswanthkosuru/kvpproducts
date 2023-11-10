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
    if (!orders || orders.length == 0) {
        return <div>
            <div className=''>
                <svg
                    className='relative top-48 left-20'
                    width="200px" height="200px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#715df2" fill="none"><polyline points="34.48 54.28 11.06 54.28 11.06 18.61 23.02 5.75 48.67 5.75 48.67 39.42" /><polyline points="23.04 5.75 23.02 18.61 11.06 18.61" /><line x1="16.21" y1="45.68" x2="28.22" y2="45.68" /><line x1="16.21" y1="39.15" x2="31.22" y2="39.15" /><line x1="16.21" y1="33.05" x2="43.22" y2="33.05" /><line x1="16.21" y1="26.95" x2="43.22" y2="26.95" /><circle cx="42.92" cy="48.24" r="10.01" stroke-linecap="round" /><line x1="39.05" y1="44.36" x2="46.8" y2="52.11" /><line x1="39.05" y1="52.11" x2="46.8" y2="44.36" /></svg>
                <div>no orders availible</div>
            </div>
        </div>
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className={`${roboto.className} ${robotoslab.className} font-bold`}></div>
            {styledorders}
        </div>
    )
}

export default OrderComponent