'use client'
import React, { useEffect } from 'react'
import AddressForm from '@components/Forms/AddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { getaddress, selectaddress } from '@app/redux/feautres/address/addressslice';
import { AppDispatch } from '@app/redux/store';
const Page = () => {

    return (
        <div>

            <AddressForm />
        </div>
    )
}

export default Page