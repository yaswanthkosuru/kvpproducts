import { selectallproducts } from "@app/redux/feautres/products/product-slice";
import { itemtype } from "@models/Cart_Model";
import { CldImage } from "next-cloudinary";
import { useSelector } from "react-redux";

export const OrderProducts = ({ items }: { items: itemtype[] }) => {
    const products = useSelector(selectallproducts);
    const styled = items.map((item, index) => {
        const product = products.find(p => p._id == item.product_id);
        if (!product) {
            return <></>
        }
        const { imageUrls, name, price, description } = product;
        return (
            <div
                key={index}
                className='grid  grid-cols-10 gap-4 mx-4 '>
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
                    <span className=' font-medium text-[20px]'>&#8377;{price}</span>
                </div>

            </div>
        )
    })
    return (
        <div className='flex flex-col gap-4'>
            {styled}
        </div>
    )
}
