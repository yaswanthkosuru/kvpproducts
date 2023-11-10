import { createproduct, selectproductstatus } from "@app/redux/feautres/products/product-slice";
import { AppDispatch } from "@app/redux/store";
import { FormInputType } from "@models/ProductModel";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormImageComp } from "./FormImage";
import { ptsans, ptserif, roboto, robotoslab } from "@styles/fonts";
import '@styles/globals.css'
import DisableandLoadingComponent from "@components/PassiveComponents/Loading";
export default function CreateProductFormComponent({ }) {
    const [ImageUrls, setImageUrls] = useState<string[]>([]);
    const productstatus = useSelector(selectproductstatus);
    const [loadingstatus, setloadingstatus] = useState<'idle' | 'Loading' | 'rejected'>()
    useEffect(() => {
        setloadingstatus(productstatus);
    }, [productstatus])
    type datatype = {
        info?: {
            public_id: string
        }
    }
    const handleimageupload = (data: datatype) => {
        const publicId = data?.info?.public_id as string;
        setImageUrls((prev) => {
            if (prev.length < 5) {
                return [...prev, publicId]
            }
            else {
                return [...prev]
            }
        }
        )
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInputType>()
    const dispatch = useDispatch<AppDispatch>()
    const [imagerr, setimagerr] = useState(false)
    const [posterror, setposterror] = useState(false)
    const onSubmit: SubmitHandler<FormInputType> = async (formData) => {
        console.log(ImageUrls, 'imageUrls');
        console.log(formData);
        if (ImageUrls.length > 1 && ImageUrls.length < 5) {
            console.log(formData);
            try {
                await dispatch(createproduct({ formData, ImageUrls }));
                reset();
                setImageUrls([]);
            } catch (error) {
                setposterror(true);
            }
        }
        else {
            setimagerr(true);
        }

    }
    if (loadingstatus === 'rejected') {
        alert('unable to add product');
    }
    return (
        <div className="mt-4">
            {loadingstatus === 'Loading' && <DisableandLoadingComponent />}

            <form
                className={`bg-blue-100 flex flex-col py-6 px-4 mx-auto lg:w-1/2 gap-4 ${roboto.className} ${robotoslab.className}`}
                onSubmit={handleSubmit(onSubmit)}
            >

                <FormImageComp ImageUrls={ImageUrls} />

                <span className="text-red-400 font-semibold">you cannot upload more than 5 images </span>
                {
                    imagerr && <span className="text-red-400 font-semibold">please upload atleast 2 images </span>
                }
                {ImageUrls.length < 5 && (
                    <CldUploadButton
                        uploadPreset="yaswanth9866"
                        onUpload={handleimageupload}
                        options={{
                            sources: ['local'],
                            cropping: true,
                        }}
                        className="ripple  mx-auto"
                    >
                        Upload Image
                    </CldUploadButton>
                )}
                <span className="text-xl font-semibold">Enter Product Name</span>

                <input
                    className="form-input"
                    placeholder="Enter your product name"
                    {...register('name', {
                        required: 'Please enter your product name',
                        maxLength: 50, // Increased maxLength for a product name
                    })}
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
                />
                {/* Errors will return when field validation fails */}
                {errors.description && <div className="text-red-500">This field is required</div>}

                <div className="text-xl font-semibold">Enter Price</div>

                <input
                    {...register("price", { required: 'Product price is required' })}
                    placeholder="Enter Price of Product"
                    className="form-input"
                    type="number" // Consider using a number input for price
                />
                {/* Errors will return when field validation fails */}
                {errors.price && <div className="text-red-500">This field is required</div>}

                <div className="text-xl font-semibold">Enter Product Quantity</div>

                <input
                    {...register("StockQuantity", {
                        required: 'Quantity of product is required',
                    })}
                    placeholder="Enter quantity of product you have"
                    className="form-input"
                    type="number" // Consider using a number input for quantity
                />
                {/* Errors will return when field validation fails */}
                {errors.StockQuantity && (
                    <div className="text-red-500">This field is required</div>
                )}
                {posterror && <span className="text-red-500">something error please contact kvpproducts</span>}
                <button
                    type="submit"
                    className="ripple mx-auto"
                >
                    Submit
                </button>


            </form>
        </div>
    )
}