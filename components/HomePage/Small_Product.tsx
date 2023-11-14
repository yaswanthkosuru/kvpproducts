import { selectallproducts } from '@app/redux/feautres/products/product-slice'
import { PriceComponent } from '@components/productspage/PriceComponent'
import Product_Component from '@components/productspage/ProductComponent'
import FilteredProductComponent from '@components/searchpage/FilteredProductComponent'
import { alegreya, inter, roboto, robotoslab } from '@styles/fonts'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useSelector } from 'react-redux'

const Small_Product_Component = () => {
    const products = useSelector(selectallproducts);
    return (
        <div className={`${roboto.className} ${robotoslab.className} mx-2 mt-4 `}>
            <span className='font-bold mx-2 text-blue-900 text-[20px] '>
                see our all  products
            </span>
            <div className='border-2  mb-5  border-blue-400 relative rounded-md overflow-hidden p-2 '>

                <div>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-4 py-10 px-4 '>
                            {
                                products.map((product) => {
                                    const { name, description, imageUrls, price, _id, overallrating, usersrated, units } = product;
                                    return <div className='w-full bg-white/80 border border-gray-300 py-2  px-2 rounded-xl h-auto'>
                                        <span className='text-xl'>
                                            {name.toUpperCase()}
                                        </span>
                                        <CldImage
                                            src={imageUrls[0]}
                                            width={150}
                                            height={150}
                                            alt='image'
                                            className=' w-full h-32'
                                        >
                                        </CldImage>
                                        <span>
                                            &#8377;{price} / {units}
                                        </span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <span className='bg-blue-600 px-4 py-2 text-white rounded-md'>
                        explore more &gt;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Small_Product_Component