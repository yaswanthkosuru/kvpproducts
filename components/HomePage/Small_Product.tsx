import { selectallproducts } from '@app/redux/feautres/products/product-slice'
import { PriceComponent } from '@components/productspage/PriceComponent'
import Product_Component from '@components/productspage/productsComponent'
import FilteredProductComponent from '@components/searchpage/FilteredProductComponent'
import { alegreya, inter, roboto, robotoslab } from '@styles/fonts'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const Small_Product_Component = () => {

    var products = useSelector(selectallproducts);
    products = products?.slice(0, 4);
    if (!products || products.length == 0) {
        return <></>
    }
    return (
        <div className={`${roboto.className} ${robotoslab.className} mx-2 mt-4 `}>
            <span className='font-bold mx-2 text-blue-900 text-[20px] '>
                see our all  products
            </span>
            <div className='border-2  mb-5  border-blue-400 relative rounded-md overflow-hidden p-2 '>
                <div className='flex justify-end'>
                    <Link
                        href='/products'
                        className='bg-blue-600 px-4 py-2 text-white rounded-md'>
                        explore more &gt;
                    </Link>
                </div>
                <div>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-4  py-1 px-3 '>
                            {
                                products.map((product) => {
                                    const { name, description, imageUrls, price, _id, overallrating, usersrated, units } = product;
                                    return <Link
                                        key={_id.toString()}
                                        href={`/product/${product._id}`}
                                        className=' mx-auto w-full m:w-1/2 bg-white/80 border border-gray-300 py-2  px-2 rounded-xl h-auto'>
                                        <span className='text-lg'>
                                            {name.toUpperCase()}
                                        </span>
                                        <CldImage
                                            src={imageUrls[0]}
                                            width={150}
                                            height={150}
                                            alt='image'
                                            className=' w-full m:w-1/2 h-24 '
                                        >
                                        </CldImage>
                                        <span>
                                            &#8377;{price} / {units}
                                        </span>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Small_Product_Component