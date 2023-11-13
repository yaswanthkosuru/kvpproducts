import React from 'react'
import Loadingwithspin from './Loading'

const DisableandLoadingComponent = () => {
    return (
        <div className='overlay'>
            <div className="blur-overlay z-0">
                <div className='relative top-1/2'>
                    <Loadingwithspin />
                </div>
            </div>
        </div>
    )
}

export default DisableandLoadingComponent