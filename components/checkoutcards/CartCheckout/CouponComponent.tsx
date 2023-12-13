import { selectcouponcode, setcoupon } from '@app/redux/feautres/clientside/clientslice';
import { AppDispatch } from '@app/redux/store';
import list from '@coupon.json';
import { useDispatch, useSelector } from 'react-redux';

const CouponComponent = () => {
    const { coupons } = list;
    const dispatchRedux = useDispatch<AppDispatch>();
    const coupon = useSelector(selectcouponcode);
    const jsxcoupons = coupons.map((c) => {
        const ischecked = coupon == c.name;
        return <div
            key={c.name}
            className=''>
            <input
                onChange={() => dispatchRedux(setcoupon(c.name))}
                type='checkbox'
                checked={ischecked}
                className='w-4 h-4 rounded-md'
            ></input>
            <span className='ml-1'>{c.name}</span>
            <br />
            <span className='ml-5 font-medium'>{c.desc}</span>
        </div>
    })
    return <div className='grid place-content-center'>
        <div className='flex flex-col gap-4 bg-slate-100 rounded-md p-4'>
            {jsxcoupons}
        </div>
    </div>


}

export default CouponComponent