import { SelectCartItems, getcartitems } from "@app/redux/feautres/cart/cartslice";
import { selectallproducts } from "@app/redux/feautres/products/product-slice";
import { AppDispatch } from "@app/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function FindCartProducts() {
    const dispatch = useDispatch<AppDispatch>();

    const cartitems = useSelector(SelectCartItems);
    const products = useSelector(selectallproducts)
    const QuantityMap = new Map();
    cartitems?.forEach(item => QuantityMap.set(item.product_id, item.quantity))
    console.log(QuantityMap, 'cartcompo');
    const cartSet = new Set();
    cartitems?.forEach(item => cartSet.add(item.product_id));
    const arr: Array<string> = []
    cartitems?.forEach(item => arr.push(item.product_id as string));
    const cartproducts = products.filter(product => cartSet.has(product._id));
    useEffect(() => {
        if (!cartitems) {
            dispatch(getcartitems());
        }
    }, []);

    return { cartproducts, QuantityMap }
}