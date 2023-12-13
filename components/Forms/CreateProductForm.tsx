import { createproduct, selectproductstatus } from "@app/redux/feautres/products/product-slice";
import { AppDispatch } from "@app/redux/store";
import { createproductformtype } from "@CustomTypes/ReduxType";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormImageComp } from "./FormImage";
import { ptsans, ptserif, roboto, robotoslab } from "@styles/fonts";
import '@styles/globals.css'
import { categoryvalues, measurings } from "@models/product";
import DisableandLoadingComponent from "@components/PassiveComponents/Disablepageandloading";
export default function CreateProductFormComponent({ }) {
    const [ImageUrls, setImageUrls] = useState<string[]>([]);

    const productstatus = useSelector(selectproductstatus);
    const [loadingstatus, setloadingstatus] = useState<'idle' | 'pending' | 'rejected'>()
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
        watch,
        formState: { errors },
    } = useForm<createproductformtype>()


    const dispatch = useDispatch<AppDispatch>()
    const [imagerr, setimagerr] = useState(false)
    const [posterror, setposterror] = useState(false)
    const onSubmit: SubmitHandler<createproductformtype> = async (formData) => {
        console.log(ImageUrls, 'imageUrls');
        console.log(formData);

        if (ImageUrls.length > 1 && ImageUrls.length < 5) {
            console.log(formData);
            try {
                formData.imageUrls = ImageUrls;
                console.log(formData);

                // await dispatch(createproduct({ formData }));
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

            <form
                className={` flex flex-col py-6 px-4 mx-auto lg:w-1/2 gap-4 ${roboto.className} ${robotoslab.className}`}
                onSubmit={handleSubmit(onSubmit)}
            >

                <FormImageComp ImageUrls={ImageUrls} />

                <span className="form-error">you cannot upload more than 5 images </span>
                {
                    imagerr && <span className="form-error">please upload atleast 2 images </span>
                }
                {ImageUrls.length < 5 && (
                    <CldUploadButton
                        uploadPreset="yaswanth9866"
                        onUpload={handleimageupload}
                        options={{
                            sources: ['local'],
                            cropping: true,
                        }}
                        className="btn mx-auto"
                    >
                        Upload Image
                    </CldUploadButton>
                )}
                <label className="">Enter Product Name</label>

                <input
                    className="form-input"
                    placeholder="Enter your product name"
                    {...register('name', {
                        required: 'Please enter your product name',
                        maxLength: 50, // Increased maxLength for a product name
                    })}
                />

                {errors.name?.type == 'required' && (
                    <div className="">
                        This field is required
                    </div>
                )}
                {errors.name?.type == 'maxLength' && (
                    <div className="">
                        ProductName does not exceed 50 characters
                    </div>
                )}


                <label className="">Enter Product Description</label>

                <textarea
                    {...register("description", { required: 'Product description is required' })}
                    placeholder="Enter your product description"
                    className="form-input"
                />
                {/* Errors will return when field validation fails */}
                {errors.description && <div className="">This field is required</div>}

                <label className="">Enter Price</label>

                <input
                    {...register("price", { required: 'Product price is required' })}
                    placeholder="Enter Price of Product"
                    className="form-input"
                    type="number"
                />
                {/* Errors will return when field validation fails */}
                {errors.price && <div className="">This field is required</div>}

                <label className="">Enter Quantity you have</label>

                <input
                    {...register("stockQuantity", {
                        required: 'Quantity of product is required',
                    })}
                    placeholder="Enter quantity of product you have"
                    className="form-input"
                    type="number" // Consider using a number input for quantity
                />
                <label className="">Enter calories per 100g</label>

                <input
                    {...register("caloriespercent", {
                        required: 'Quantity of product is required',
                    })}
                    placeholder="Enter calories obtined per 100g"
                    className="form-input"
                    type="number" // Consider using a number input for quantity
                />
                {/* Errors will return when field validation fails */}
                {errors.caloriespercent && (
                    <div className="">This field is required</div>
                )}

                <label className="">Enter category</label>

                <select {...register("category")} className="form-input">
                    {categoryvalues?.map((category) => {
                        return <option key={category} value={category}>{category}</option>
                    })}
                </select>
                <label className="">Enter units </label>

                <select {...register("units")} className="form-input">
                    {measurings?.map((measure) => {
                        return <option key={measure} value={measure}>{measure}</option>
                    })}
                </select>

                <button
                    type="submit"
                    className="mx-auto btn"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}