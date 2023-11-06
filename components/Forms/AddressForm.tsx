import { createAddress, getaddress, selectaddress, selectaddressstatus } from '@app/redux/feautres/address/addressslice';
import { AppDispatch } from '@app/redux/store';
import { AddressType } from '@models/Address_Model';
import { inter, merriweather, opensans, ptsans, ptserif, roboto, robotoslab } from '@styles/fonts';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import '@styles/globals.css'
import DisableandLoadingComponent from '@components/Loading';
type formdatatype = Omit<AddressType, '_id'>
const postalCodes = [521121, 521125, 521126]; // Replace with your postal codes


export default function AddressForm() {
    const Address = useSelector(selectaddress);
    const addressstatus = useSelector(selectaddressstatus);
    const dispatch = useDispatch<AppDispatch>();
    const [loadingstatus, setloadingstatus] = useState<'idle' | 'Loading' | 'rejected'>();
    const router = useRouter();
    useEffect(() => {
        if (!Address) {
            dispatch(getaddress());
        }
    }, []);
    useEffect(() => {
        setloadingstatus(addressstatus);
        console.log(addressstatus, 'useffectcreatefrm');

    }, [addressstatus])
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
            {loadingstatus === 'Loading' && <DisableandLoadingComponent />}
            <span>Address Form </span>
            <form className='p-4 flex flex-col gap-2 bg-gradient-to-r from-slate-200 to-zinc-300/70 rounded-xl shadow-xl  ' onSubmit={handleSubmit(submitAddress)}>
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

                <button className='bg-indigo-500 rounded-3xl text-white font-bold w-1/2 mx-auto py-2 px-4' type='submit'>{!Address ? 'submit' : 'update'}</button>
            </ form>

        </div>

    )


}


