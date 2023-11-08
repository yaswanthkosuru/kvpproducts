import { roboto, robotoslab } from '@styles/fonts'
import React from 'react'

const NoCartItems = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex justify-center flex-col items-center">
                <svg
                    className=" relative opacity-20"
                    id="visual" viewBox="0 0 900 600" width="300" height="400" xmlns="http://www.w3.org/2000/svg"
                    version="1.1"><g transform="translate(496.26805601281467 293.70804085935026)"><path d="M103.7 -83.4C129.2 -50.7 141.1 -7.9 135.6 36.8C130.1 81.6 107.1 128.2 70.6 145.2C34.1 162.2 -15.9 149.6 -78.7 131.6C-141.5 113.6 -217 90.2 -228 49.8C-239 9.4 -185.6 -48 -136.8 -86C-88.1 -123.9 -44 -142.5 -2.5 -140.5C39.1 -138.5 78.2 -116 103.7 -83.4" fill="blue"></path></g></svg>
                <svg
                    className="absolute"
                    width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M11 3L13.5 5.5M13.5 5.5L16 8M13.5 5.5L16 3M13.5 5.5L11 8M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="tomato" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className={`${roboto.className} ${robotoslab.className} absolute mt-28 text-gray-800`}>
                    NO CART ITEMS AVAILIBLE
                </span>
            </div>

        </div>
    )
}

export default NoCartItems