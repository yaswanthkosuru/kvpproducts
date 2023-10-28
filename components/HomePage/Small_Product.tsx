import React from 'react'

const Small_Product_Component = () => {
    return (
        <div>
            <div className='font-bold'>
                Explore more
            </div>
            <div className='grid grid-cols-2 gap-4 bg-blue-50 py-10 px-4 '>
                <div className='w-full h-40 bg-red-500'></div>
                <div className='w-full h-40 bg-red-500'></div>
                <div className='w-full h-40 bg-red-500'></div>
                <div className='w-full h-40 bg-red-500'></div>
            </div>
        </div>
    )
}

export default Small_Product_Component