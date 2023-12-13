import { selectcouponcode } from "@app/redux/feautres/clientside/clientslice"
import { useSelector } from "react-redux"

type props = {
    price: number

}
export function calculateDiscount({ price }: props) {
    const coupon = useSelector(selectcouponcode);
    console.log(coupon);
    if (coupon === 'FirstThreeOrders') {
        const eightyoff = Math.ceil(price * 0.6);
        return Math.min(eightyoff, 100);

    }
    else if (coupon === 'TryYourLuck') {
        const luckoff = Math.floor(Math.random() * (45 - 15 + 1)) + 10;
        const discountbyluckoff = Math.ceil(price * (luckoff / 100));
        console.log(discountbyluckoff);

        return Math.min(discountbyluckoff, 80);
    }
    return 0;


}