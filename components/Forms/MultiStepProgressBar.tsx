import { checkoutcartaction } from '@CustomTypes/ReduxType';
import { inter } from '@styles/fonts';
import React from 'react'

const MultiStepProgressBar = ({ state, dispatch }: { state: { pageno: number }, dispatch: React.Dispatch<checkoutcartaction> }) => {
    const objects = [{ val: 1, name: 'Address' }, { val: 2, name: 'Products' }, { val: 3, name: 'Coupon' }, { val: 4, name: 'Payment' }]
    return (
        <div className='flex justify-center border-b-2 border-gray-100 shadow-md pb-2'>
            <div className='grid grid-flow-col  '>
                {objects.map((obj, ind) => {
                    const { val, name } = obj;
                    if (obj.val <= state.pageno) {
                        return (
                            <div key={val}>
                                <div className='grid grid-flow-col' key={ind}>
                                    <span
                                        onClick={() => { dispatch({ type: 'setpageno', payload: val }) }}
                                        className={`border mx-1 shadow-md  rounded-full cursor-pointer w-8 h-8 flex justify-center bg-blue-700 text-white items-center ${inter.className}`}>
                                        {val}
                                    </span>

                                    {val <= 3 && val != state.pageno && (

                                        <div className='my-auto flex'>
                                            <hr className='w-10 my-auto bg-blue-600 h-[2.5px] ' />
                                        </div>
                                    )
                                    }
                                    {val <= 3 && val == state.pageno && (

                                        <div className='my-auto flex'>

                                            <hr className='w-5 my-auto bg-blue-600 h-[3px] ' />
                                            <hr className='w-5 my-auto bg-gray-500 h-[3px] ' />
                                        </div>
                                    )
                                    }
                                </div>
                                <span className=' -ml-3'>{name}</span>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='flex flex-col justify-center'>

                                <div className='flex' key={ind}>
                                    <span
                                        onClick={() => { dispatch({ type: 'setpageno', payload: val }) }}
                                        className={`border mx-1 border-gray-800 shadow-md  rounded-full cursor-pointer w-8 h-8 flex justify-center items-center ${inter.className}`}>
                                        {val}
                                    </span>
                                    {val < 4 && <hr className='w-10 my-auto  h-[2px] bg-gray-500' />}
                                </div>

                                <span className='-ml-3'>  {name}</span>
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>
    )
}

export default MultiStepProgressBar