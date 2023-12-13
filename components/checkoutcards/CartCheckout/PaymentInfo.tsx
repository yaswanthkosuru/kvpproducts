

import React from 'react'
import { useSelector } from 'react-redux';
import { calculateDiscount } from '@utils/CalculateDiscount';

import { SelectCartItems } from '@app/redux/feautres/cart/cartslice';
import BuynowComponent from '@components/Buttons/BuyNowComponent';
import OrderNow from '@components/Buttons/OrderNow';

const Paymentinfo = () => {
    const cartproducts = useSelector(SelectCartItems);
    var totalcartprice = 0
    const styledpricecart = cartproducts?.map((product) => {
        const { name, cartquantity, price, units } = product;
        totalcartprice += cartquantity * price;
        return (
            <div
                key={product._id.toString()}
                className='border-b border-gray-400 '>
                <div className='text-lg font-semibold'>{name}</div>
                <div className='text-gray-600 flex justify-between'><div>Unit Price:</div> <div>&#8377;{price}/{units}</div></div>

                <div className='text-gray-600 flex justify-between'><div>quantity</div> <div>{cartquantity}</div></div>

                <div className='text-gray-600 flex justify-between'><div>Final Product Price</div> <div>&#8377;{cartquantity * price}</div></div>

            </div>
        );
    });
    const discount = calculateDiscount({ price: totalcartprice });
    const finalorderprice = totalcartprice + 40 - discount;
    return (
        <div className=' grid grid-flow-row gap-2'>
            <h1 className='text-2xl font-bold mb-4'>Payment Information</h1>
            {styledpricecart}
            <div className=' flex justify-between text-gray-600 font-medium'><div>Total Price</div> <div>&#8377;{totalcartprice} </div></div>
            <div className=' flex justify-between text-gray-600 font-medium'><div>Delivery Fee</div> <div>&#8377;{40} </div></div>
            <div className=' flex justify-between text-gray-600 font-medium'><div>Discount</div> <div className='text-red-500'>-&#8377;{discount} </div></div>
            <div className=' flex justify-between text-2xl  font-medium'><div>Final price</div> <div className=''>&#8377;{finalorderprice}<span className='text-base'>only</span> </div></div>
            {cartproducts?.length > 0 && <OrderNow price={finalorderprice} />}
        </div>
    );
}


export default Paymentinfo;