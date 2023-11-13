import { roboto, robotoslab } from '@styles/fonts'
import React from 'react'

const NoCartItems = () => {
    return (
        <div className="flex items-center justify-center h-3/4">
            <div className="flex justify-center flex-col items-center">
                <svg
                    className=""
                    width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M11 3L13.5 5.5M13.5 5.5L16 8M13.5 5.5L16 3M13.5 5.5L11 8M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffae42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={`${roboto.className} ${robotoslab.className}   text-gray-800 absolute mt-56`}>
                    NO CART ITEMS AVAILIBLE
                </span>
            </div>

        </div>
    )
}

export default NoCartItems