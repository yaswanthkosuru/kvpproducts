import { selectallproducts } from "@app/redux/feautres/products/product-slice";
import RatingInputUserForm from "@components/Forms/RatingForm";
import DownArrowSVG from "@components/icons/Downarrowsvg";
import { itemtype } from "@models/Cart_Model";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PriceComponent } from "./PriceComponent";

export const OrderProducts = ({ items }: { items: itemtype[] }) => {
    const products = useSelector(selectallproducts);
    const [reviewstate, setreviewstate] = useState({});
    const styled = items.map((item, index) => {
        const product = products.find(p => p._id == item.product_id);
        if (!product) {
            return <></>
        }
        const { imageUrls, name, price, description } = product;
        const product_id = item.product_id as string;
        return (
            <div key={index}>
                <div

                    className='grid  grid-cols-10 gap-4 '>
                    <div className=' col-span-4   rounded-md '>
                        <CldImage
                            src={imageUrls[0]}
                            width={600}
                            height={600}
                            alt='product image'
                            className='rounded-md h-[120px] border hover:scale-105 transition-transform ease-in-out'
                        />
                    </div>
                    <div className='col-span-6  my-auto  flex flex-col '>
                        <span className=" font-semibold">{name.toUpperCase()}</span>
                        <span className=" font-semibold truncate">{description}</span>
                        <span className=" font-semibold">quantity:{item.quantity}</span>
                        <PriceComponent price={parseInt(price as string)} units='' />
                    </div>

                </div>
                <button
                    className="flex"
                    onClick={() => setreviewstate((prev) => {
                        const newarr = { ...prev }
                        newarr[product._id.toString()] = !newarr[product._id.toString()];
                        console.log(newarr);
                        return newarr;
                    })}>
                    Review and Rate
                    <DownArrowSVG />
                </button>
                {
                    reviewstate[product._id.toString()] && <RatingInputUserForm product_id={product_id} />
                }
            </div>
        )
    })
    return (
        <div className='flex flex-col gap-4 mx-4'>
            {styled}
        </div>
    )
}
