import React from 'react'

const Cart_prefetch = () => {
    return (
        <div>
            <div className='flex h-screen flex-col align-middle justify-start mt-10 gap-2 items-center'>
                <div className="border border-blue-50 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className=" bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-50 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className=" bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-50 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className=" bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart_prefetch