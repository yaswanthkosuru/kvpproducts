import { createAddress, getaddress, selectaddress } from '@app/redux/feautres/address/addressslice';
import { AppDispatch } from '@app/redux/store';
import { AddressType } from '@models/Address_Model';
import { inter, merriweather, opensans, ptsans, ptserif, roboto, robotoslab } from '@styles/fonts';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import '@styles/globals.css'
type formdatatype = Omit<AddressType, '_id'>
const postalCodes = [521121, 521125, 521126]; // Replace with your postal codes
function DownArrowSVG() {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 10l5 5 5-5H7z"
                fill="#000" // You can set the fill color here
            />
        </svg>
    );
}

export default function AddressForm() {
    const Address = useSelector(selectaddress);
    const dispatch = useDispatch<AppDispatch>()
    const [update, setupdate] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!Address) {
            dispatch(getaddress());
        }

    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formdatatype>()
    const submitAddress: SubmitHandler<formdatatype> = (data) => {
        if (!Address) {
            dispatch(createAddress({ formData: data }));
        }
        else {
            dispatch(createAddress({ formData: data, update: true }))
        }

    }
    return (
        <div className={`${roboto.className} ${robotoslab.className}  `}>
            <span>Address Form </span>
            <form className='p-4 flex flex-col gap-2 bg-[#34c6eb] text-white' onSubmit={handleSubmit(submitAddress)}>
                <label> Enter your state</label>
                <input
                    className='form-input'
                    {...register('state', { required: true })}
                    defaultValue={Address?.state}
                >

                </input>
                {errors.state?.type == 'required' && <div className='form-error'>please enter state</div>}
                <label>enter your city name</label>
                <input
                    className='form-input'{...register('city', { required: true })}
                    defaultValue={Address?.city}
                >

                </input>
                {errors.city?.type == 'required' && <div className='form-error'>please enter state</div>}

                <label>enter your street</label>
                <input
                    className='form-input'{...register('street')}
                    defaultValue={Address?.street}
                >

                </input>
                {errors.street?.type == 'required' && <div className='form-error'>please enter street</div>}
                <label>Enter your phone number</label>
                <input
                    className='form-input' {...register('phoneNumber', { required: true, maxLength: 10, minLength: 10 })}
                    defaultValue={Address?.phoneNumber}
                >

                </input>
                {errors.phoneNumber && <div className='form-error'>please enter valid phonenumber</div>}
                <label>enter your postal code</label>
                <select
                    className='py-2 text-gray-800 focus:outline-none'
                    {...register('postalCode')}
                    defaultValue={Address?.postalCode}
                >
                    {postalCodes.map((code) => {
                        return <option key={code} value={code}>{code}</option>
                    })}
                </select>

                <button className='bg-violet-800 rounded-3xl text-white font-bold w-1/2 mx-auto py-2 px-4' type='submit'>{!Address ? 'submit' : 'update'}</button>
            </ form>

        </div>

    )


}


