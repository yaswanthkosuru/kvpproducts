import React from 'react'
import digitalagriculture from '@public/cardpage/digitalagri.jpg';
import Image from 'next/image';
const Adds_Component = () => {
    return (
        <div className='mt-4'>
            <span className='font-bold mx-2 text-blue-900 text-[20px] '>
                Please Follow Digital agriculture...
            </span>
            <Image
                src={digitalagriculture}
                width={500}
                height={400}
                className='w-full h-72'
                alt='digital image'
            >

            </Image>
        </div>
    )
}

export default Adds_Component