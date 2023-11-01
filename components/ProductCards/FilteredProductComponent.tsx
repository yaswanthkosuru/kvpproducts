import Fivestar from "@components/Buttons/RatingComponent"
import { ProductType } from "@models/ProductModel"
import { roboto, robotoslab, inter } from "@styles/fonts"
import { CldImage } from "next-cloudinary"
import Link from "next/link"

const FilteredProductComponent = ({ products }: { products: ProductType[] }) => {
    if (!products || products.length <= 0) {
        return <div></div>
    }
    return (
        <div>
            {
                products?.map((product, index) => {
                    const { name, description, imageUrls, price, _id, overallrating, usersrated } = product;
                    const rating = Math.round(overallrating / usersrated);
                    return (
                        <div
                            key={index}

                        >
                            {/* mobile version */}
                            <div className='sm:hidden block'>
                                <Link href={`/product/${_id}`}>
                                    <div className='grid bg-white grid-cols-10 gap-4'>
                                        <div className=' col-span-4   rounded-md '>
                                            <CldImage
                                                src={imageUrls[0]}
                                                width={600}
                                                height={600}
                                                alt='product image'
                                                className='rounded-md h-[150px] border hover:scale-105 transition-transform ease-in-out'
                                            />
                                        </div>
                                        <div className='col-span-6 my-auto '>
                                            <span className=" font-semibold">{name.toUpperCase()}</span>
                                            <p className="truncate" >{description}</p>
                                            <span className=' font-medium text-[20px]'>&#8377;{price}</span>
                                            <Fivestar rating={rating} />
                                            <span className='text-[8px] text-gray-400'>upto</span>65% off <span className='text-gray-400 text-[8px]'> on first order</span>
                                        </div>

                                    </div>
                                </Link>

                            </div>
                            {/* desktop version */}
                            <div
                                className={`hidden sm:block  m-4 p-4 bg-white border rounded-lg  hover:scale-[102.5%] hover:drop-shadow-md active:scale-95 transition-all ease-in-out`}
                            >
                                <Link href={`/product/${_id}`}>

                                    <div className="flex justify-center">
                                        <div className=''>
                                            <CldImage
                                                src={imageUrls[0]}
                                                width={600}
                                                height={600}
                                                alt='product image'
                                                className='h-40 lg:h-44 rounded-lg shadow-inner '
                                            />
                                        </div>
                                    </div>
                                    <div className={`mt-4 ${roboto.className} ${robotoslab.className} ${inter.className}`}>
                                        <span className='font-semibold text-md'>{name.toUpperCase()}</span>
                                        <p className=' truncate'>{description}</p>
                                        <span className=' font-extrabold'>&#8377;{price}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    );
                })
            }



        </div>
    )
}

export default FilteredProductComponent