
import { selectaddress } from '@app/redux/feautres/address/addressslice'

import React from 'react'
import { useSelector } from 'react-redux'

const MultistepNextButton = ({ state, dispatch }: { state: { pageno: number }, dispatch }) => {
    const Address = useSelector(selectaddress);

    const handlenextbuttonclick = () => {
        const { pageno } = state;
        if (pageno == 1) {
            if (!Address) {
                alert('please add address');
            }
            else {
                dispatch({ type: 'setpageno', payload: state.pageno + 1 })
            }
        }
        else if (pageno == 2) {
            dispatch({ type: 'setpageno', payload: state.pageno + 1 })
        }
        else if (pageno == 3) {
            dispatch({ type: 'setpageno', payload: state.pageno + 1 })
        }

    }
    return (
        <div className='flex w-full justify-end   '>
            <button
                onClick={handlenextbuttonclick}
                className=' mt-4 flex items-center px-6 py-1 rounded-xl text-center text-blue-700 
                                     active:bg-blue-700/20
                                    active:text-white
                                    border-2
                                   
                                    border-blue-600
                                    shadow-md'>Next<span className='text-2xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24">
                        <path d="M10 4l-1.41 1.41L14.17 11H4v2h10.17l-5.58 5.59L10 20l8-8z" fill="blue" />
                    </svg>

                </span></button>
        </div>
    )
}

export default MultistepNextButton