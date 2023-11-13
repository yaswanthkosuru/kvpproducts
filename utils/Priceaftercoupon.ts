type props = {
    price: number | string
    couponcode: string
}
export function calculatepriceaftercoupon({ price, couponcode }: props) {
    let discount = 0
    let originalprice = parseInt(price as string)
    if (couponcode == 'FirstThreeOrders') {
        discount = Math.round(0.6 * originalprice);
        if (discount > 80) {
            discount = 80;
        }
    }
    else if (couponcode === 'WinIndia') {
        discount = Math.round(0.2 * originalprice);
        if (discount > 80) {
            discount = 80;
        }
    }
    return originalprice - discount;
}