import { SelectOrders, getorders } from '@app/redux/feautres/orders/orderslice';
import { selectallproducts } from '@app/redux/feautres/products/product-slice';
import { AppDispatch } from '@app/redux/store'
import DownArrowSVG from '@components/icons/Downarrowsvg';
import { inter, merriweather, playfairdisplay, roboto, robotoslab } from '@styles/fonts';
import { CldImage } from 'next-cloudinary';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RatingInputUserForm from '@components/Forms/RatingForm';
import Noorders from '@components/PassiveComponents/Noorders';

const OrderComponent = () => {
    const dispatchRedux = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatchRedux(getorders());
    }, []);
    const orders = useSelector(SelectOrders);
    console.log(orders, 'orders');
    if (!orders || orders.length === 0) {
        return <div></div>
    }
    return (
        <div className={`container mx-auto mt-8 ${roboto.className} ${robotoslab.className} text-gray-700`}>


            {orders.map((order) => (
                <div key={order._id.toString()} className="border p-4 mb-4 rounded shadow">
                    <div className="">
                        <span>Ordered Items</span>
                        <div className='ml-6'>
                            {order?.orderproducts.map((product_details, index) => {
                                const { product, orderstatus } = product_details;
                                return (
                                    <div key={index} className='border-b drop-shadow-md border-dashed border-gray-300'>
                                        <div className=" ">Product Name: <span>{product.name}</span></div>
                                        <div className="">Quantity: <span>{product.cartquantity}&nbsp;&#10005;&nbsp;{product.units}</span></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <p className="mt-2">
                        <span className=" ">Time:</span> {new Date(order.time).toLocaleString()}
                    </p>

                    <p>
                        <span className=" ">Order Type:</span> {order.ordertype}
                    </p>

                    <p>
                        <span className=" ">Address:</span> {order.address.street}, {order.address.city}, {order.address.state} - {order.address.postalCode}
                    </p>

                    <p>
                        <span className=" ">Order Status:</span> {order.orderstatus}
                    </p>

                    <p>
                        <span className=" font-bold">Amount to be Paid: {order.discountedprice} only</span>
                    </p>
                </div>
            ))}
        </div>

    );

};





export default OrderComponent