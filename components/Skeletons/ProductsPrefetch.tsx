'use client'
const ProductsPrefetch = () => {

    {/* Skeleton loader for mobile version */ }
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const mobile_version = arr.map((val, index) => {
        return (
            <div
                key={index}
                className="grid grid-cols-10 gap-4">
                <div className='col-span-4 rounded-md'>
                    <div className='animate-pulse h-[150px] w-full rounded-md bg-gradient-to-r from-rose-100 to-teal-100'></div>
                </div>
                <div className='col-span-6  flex flex-col gap-2  justify-between'>
                    <div className='animate-pulse h-4 w-[95%] bg-gradient-to-r from-rose-100 to-teal-100 rounded-sm'></div>
                    <div className='animate-pulse h-4 w-[85%] bg-gradient-to-r from-rose-100 to-teal-100 rounded-sm'></div>
                    <div className='animate-pulse h-5 w-[40%] bg-gradient-to-r from-rose-100 to-teal-100 rounded-sm'></div>
                    <div className='animate-pulse h-4 w-[88%] bg-gradient-to-r from-rose-100 to-teal-100 rounded-sm'></div>
                </div>
            </div>
        )
    })
    const desktop_skeleton = arr.map((val, index) => {
        return (
            <div
                key={index}
                className="flex flex-col gap-4 p-6">
                <div className=" animate-pulse w-full h-[150px] rounded-md bg-gradient-to-r from-rose-100 to-teal-100"></div>
                <div className=" animate-pulse  w-[90%] h-4 rounded-md bg-gradient-to-r from-rose-100 to-teal-100"></div>
                <div className=" animate-pulse  w-2/5 h-4 rounded-md bg-gradient-to-r from-rose-100 to-teal-100"></div>
            </div>
        )
    })
    return (
        <div>
            <div className='sm:hidden flex flex-col gap-6'>
                {mobile_version}
            </div>
            {/* Skeleton loader for desktop version */}
            <div className=" hidden sm:grid sm:grid-cols-2  m:grid  m:grid-cols-3 gap-4 ">
                {desktop_skeleton}

            </div>
        </div>

    )

}

export default ProductsPrefetch;