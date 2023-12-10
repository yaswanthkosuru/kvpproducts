'use client'

import CreateProductFormComponent from "@components/Forms/CreateProductForm";

export default function page() {






    return (
        /* "handleSubmit" will validate your FormInputType before invoking "onSubmit" */
        <div>

            <div className="">
                <CreateProductFormComponent
                />
            </div>
            <div
                className="flex w-full bg-green-950"
            >
            </div>
        </div>

    )
}