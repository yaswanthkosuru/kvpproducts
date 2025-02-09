import React from 'react'

const Noorders = () => {
    return <div>
        <div className='flex  flex-col items-center justify-center h-96'>
            <svg
                className=''
                width="200px" height="200px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="tomato" fill="none"><polyline points="34.48 54.28 11.06 54.28 11.06 18.61 23.02 5.75 48.67 5.75 48.67 39.42" /><polyline points="23.04 5.75 23.02 18.61 11.06 18.61" /><line x1="16.21" y1="45.68" x2="28.22" y2="45.68" /><line x1="16.21" y1="39.15" x2="31.22" y2="39.15" /><line x1="16.21" y1="33.05" x2="43.22" y2="33.05" /><line x1="16.21" y1="26.95" x2="43.22" y2="26.95" /><circle cx="42.92" cy="48.24" r="10.01" strokeLinecap="round" /><line x1="39.05" y1="44.36" x2="46.8" y2="52.11" /><line x1="39.05" y1="52.11" x2="46.8" y2="44.36" /></svg>
            <span className='text-orange-600 font-medium'>No Orders Availible</span>
        </div>
    </div>
}

export default Noorders