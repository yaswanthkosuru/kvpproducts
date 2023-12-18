import React from 'react'
import service1 from '@public/category/services.png';
import Image from 'next/image';
import { playfairdisplay, roboto } from '@styles/fonts';
const Services = () => {
    return (
        <div className=''>
            <div className='flex flex-col justify-start '>
                <Image src={service1} width={200} height={200} alt='services'></Image>
                <div className={`${roboto.className} `}>
                    farming services
                </div>
            </div>
        </div >
    )
}

export default Services