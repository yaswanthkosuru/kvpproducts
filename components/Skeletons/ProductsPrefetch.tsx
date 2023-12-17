'use client'
import { productloading } from "@framer/Variants"
import { motion } from "framer-motion"
const ProductsPrefetch = () => {

    {/* Skeleton loader for mobile version */ }
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const mobile_version = arr.map((val, index) => {
        return (
            <motion.div
                key={index}
                variants={productloading}

                className="grid grid-cols-10 gap-4">
                <div className='col-span-4 rounded-md'>
                    <div className=' h-[150px] w-full rounded-md bg-gray-200'></div>
                </div>
                <div className='col-span-6  flex flex-col gap-2 my-4 justify-between'>
                    <div className=' h-4 w-[95%] bg-gray-200 rounded-sm'></div>
                    <div className=' h-4 w-[85%] bg-gray-200 rounded-sm'></div>
                    <div className=' h-5 w-[40%] bg-gray-200 rounded-sm'></div>
                    <div className=' h-4 w-[88%] bg-gray-200 rounded-sm'></div>
                </div>
            </motion.div>
        )
    })
    const desktop_skeleton = arr.map((val, index) => {
        return (
            <motion.div
                key={index}
                variants={productloading}
                className="flex flex-col gap-4 p-6">
                <div className="  w-full h-[175px] rounded-md bg-gray-200"></div>
                <div className="   w-[90%] h-4 rounded-md bg-gray-200"></div>
                <div className="   w-2/5 h-4 rounded-md bg-gray-200"></div>

            </motion.div>
        )
    })
    return (
        <motion.div >
            <motion.div initial='initial' animate='after' variants={productloading} className='sm:hidden flex flex-col gap-6'>
                {mobile_version}

            </motion.div>
            {/* Skeleton loader for desktop version */}
            <motion.div initial='initial' animate='after' variants={productloading} className=" hidden sm:grid sm:grid-cols-2  m:grid  m:grid-cols-3 gap-4 ">
                {desktop_skeleton}

            </motion.div>
        </motion.div>

    )

}

export default ProductsPrefetch;