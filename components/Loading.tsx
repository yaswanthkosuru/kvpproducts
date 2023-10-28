import React from 'react'

const DisableandLoadingComponent = () => {
    return (
        <div className=''>
            <div className=' backdrop-blur-sm z-10 top-0 left-0 w-full h-full  absolute '>
                <div className='relative top-1/2'>
                    <div className="stage top-1/2 z-20">
                        <div className="dot-pulse"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisableandLoadingComponent