import React from 'react'
import ceoimage from "@public/ceo.jpg"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectallproducts } from '@app/redux/feautres/products/product-slice'
import { librebaskerville, ptserif, roboto } from '@styles/fonts'
const Ceoimage = () => {
  const products = useSelector(selectallproducts);
  if (!products || !products.length) {
    return <></>
  }
  return (

    <div>
      <span className={`${ptserif.className} ${librebaskerville.className} font-bold`}>
        website creator <span className='text-sm font-normal'>#one man army</span>
      </span>
      <div className='relative w-full h-[425px] rounded-md'>
        <Image
          src={ceoimage}
          fill
          priority
          alt='none'
          className='rounded-xl'
        />

      </div>
    </div>
  )
}

export default Ceoimage