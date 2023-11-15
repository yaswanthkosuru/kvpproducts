import React from 'react'
import '@styles/loading.css'
const Loadingwithspin = () => {
    return (
        <div className='flex shadow-on-top bg-white   p-4 gap-4 w-60 justify-center items-center mx-auto   shadow-md'>
            <div className='ring-loader'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <span className="">Hang on! Loading...</span>
        </div>

    )
}

export default Loadingwithspin;