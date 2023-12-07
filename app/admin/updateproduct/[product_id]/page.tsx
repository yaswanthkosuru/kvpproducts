'use client'
import { updatecart } from '@app/redux/feautres/cart/cartslice';
import { selectproductwithid, updateproduct } from '@app/redux/feautres/products/product-slice';
import { AppDispatch, RootState } from '@app/redux/store';
import { FormImageComp } from '@components/Forms/FormImage';
import DisableandLoadingComponent from '@components/PassiveComponents/Disablepageandloading';
import { FormInputType } from '@models/productModel';
import { roboto, robotoslab } from '@styles/fonts';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Page = () => {
    const { product_id } = useParams();
    const product = useSelector((state: RootState) => selectproductwithid(state, product_id as string));

    const dispatchRedux = useDispatch<AppDispatch>();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputType>()

    const onSubmit: SubmitHandler<FormInputType> = (data) => {
        dispatchRedux(updateproduct({ imageurls: imageurls, formData: data }));
    }

    type datatype = {
        info?: {
            public_id: string
        }
    }
    const [imageurls, setimageurls] = useState(product?.imageUrls);
    const handleimageupload = (data: datatype) => {
        const publicId = data?.info?.public_id as string;
        setimageurls((prev) => {
            if (prev.length < 5) {
                return [...prev, publicId]
            }
            else {
                return [...prev]
            }
        }
        )
    }

    useEffect(() => {
        setimageurls(product?.imageUrls);
    }, [product])
    const handledeleteimage = ({ imageurl }) => {
        const newimageurls = [...imageurls];
        const filteredimageurls = newimageurls.filter((url) => url != imageurl);
        setimageurls(prev => [...filteredimageurls])
    }
    if (!product) {
        return <div>invalid url</div>
    }
    return (
        <div>

            <div className='grid grid-cols-4 gap-4 ml-5'>
                {
                    imageurls?.map((imageurl) => {
                        return <div className='border border-gray-500 grid place-items-center rounded-xl py-1 px-1'>
                            <CldImage
                                src={imageurl}
                                width={200}
                                height={200}
                                alt='none'
                                className=' w-auto h-36'
                            >
                            </CldImage>
                            <div
                                onClick={() => handledeleteimage({ imageurl })}
                                className="bg-red-100 w-32 text-red-600 text-center px-4 py-2 mt-2 hover:underline cursor-pointer mx-auto">
                                Delete image
                            </div>
                        </div>
                    })
                }
                <CldUploadButton
                    uploadPreset="yaswanth9866"
                    onUpload={handleimageupload}
                    options={{
                        sources: ['local'],
                        cropping: true,
                    }}
                    className="mx-auto"
                >
                    <div className="w-28 h-28 bg-stone-100 flex justify-center items-center">
                        +
                    </div>
                    add image
                </CldUploadButton>
            </div>
            <div className="mt-4">

                <form
                    className={` bg-blue-50 rounded-md flex flex-col py-6 px-4 mx-auto lg:w-3/4 gap-4 ${roboto.className} ${robotoslab.className}`}
                    onSubmit={handleSubmit(onSubmit)}
                >


                    <span className="text-xl font-semibold">Enter Product Name</span>

                    <input
                        className="form-input"
                        placeholder="Enter your product name"
                        {...register('name', {
                            required: 'Please enter your product name',
                            maxLength: 50, // Increased maxLength for a product name
                        })}
                        defaultValue={product?.name}
                    />

                    {errors.name?.type == 'required' && (
                        <div className="text-red-500">
                            This field is required
                        </div>
                    )}
                    {errors.name?.type == 'maxLength' && (
                        <div className="text-red-500">
                            ProductName does not exceed 50 characters
                        </div>
                    )}

                    {/* Include validation with required or other standard HTML validation rules */}
                    <div className="text-xl font-semibold">Enter Product Description</div>

                    <textarea
                        {...register("description", { required: 'Product description is required' })}
                        placeholder="Enter your product description"
                        className="form-input"
                        defaultValue={product?.description}
                    />
                    {/* Errors will return when field validation fails */}
                    {errors.description && <div className="text-red-500">This field is required</div>}

                    <div className="text-xl font-semibold">Enter Price</div>

                    <input
                        {...register("price", { required: 'Product price is required' })}
                        placeholder="Enter Price of Product"
                        className="form-input"
                        defaultValue={product?.price}
                        type="number" // Consider using a number input for price
                    />
                    {/* Errors will return when field validation fails */}
                    {errors.price && <div className="text-red-500">This field is required</div>}

                    <div className="text-xl font-semibold">Enter units of product</div>

                    <input
                        {...register("units", { required: 'Product units is required' })}
                        placeholder="ex:kgs or liters etc"
                        className="form-input"
                        defaultValue={product?.units}
                        type="string" // Consider using a number input for price
                    />
                    {/* Errors will return when field validation fails */}
                    {errors.units && <div className="text-red-500">This field is required</div>}

                    <div className="text-xl font-semibold">Enter Product Quantity</div>

                    <input
                        {...register("StockQuantity", {
                            required: 'Quantity of product is required',
                        })}
                        placeholder="Enter quantity of product you have"
                        className="form-input"
                        type="number"
                        defaultValue={product?.StockQuantity}
                    />
                    {/* Errors will return when field validation fails */}
                    {errors.StockQuantity && (
                        <div className="text-red-500">This field is required</div>
                    )}

                    <button
                        type="submit"
                        className="bg-violet-600 text-white px-4 py-2 rounded-md  mx-auto"
                    >
                        Update
                    </button>


                </form>
            </div>
        </div>
    )
}

export default Page