import React from 'react'

const ProductPrefetch = () => {

    return (
        <div className='flex flex-col mx-1 gap-4 lg:flex-row mt-4 sm:mx-10'>
            <div className=' h-72 mb-4 w-full animate-pulse bg-gradient-to-r from-rose-100 to-teal-100'></div>
            <div className=' w-full flex flex-col mt-4 gap-2 justify-between'>
                <div className=' animate-pulse w-[50%] h-4 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                <div className=' animate-pulse w-full h-4 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                <div className=' animate-pulse w-full h-4 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                <div className=' animate-pulse w-full h-4 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                <div className=' animate-pulse w-full h-4 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className=' animate-pulse w-full h-8 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                    <div className=' animate-pulse w-full h-8 bg-gradient-to-r from-rose-100 to-teal-100 rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

export default ProductPrefetch