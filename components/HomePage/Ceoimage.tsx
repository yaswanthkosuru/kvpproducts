import React from 'react'
import ceoimage from "@public/ceo.jpg"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectallproducts } from '@app/redux/feautres/products/product-slice'
const Ceoimage = () => {
  const products = useSelector(selectallproducts);
  if (!products || !products.length) {
    return <></>
  }
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