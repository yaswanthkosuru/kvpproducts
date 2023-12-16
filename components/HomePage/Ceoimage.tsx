import React from 'react'
import ceoimage from "@public/ceo.jpg"
import Image from 'next/image'
const Ceoimage = () => {
  return (
    <div className='relative w-full h-[400px] rounded-md'>

      <Image
        src={ceoimage}
        fill
        priority
        alt='none'
        className='rounded-xl'
      />

    </div>
  )
}

export default Ceoimage