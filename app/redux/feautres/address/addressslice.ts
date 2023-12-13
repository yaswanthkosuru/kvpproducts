import { initialAddressType } from "@CustomTypes/ReduxType";
import { addressForm } from "@CustomTypes/formTypes";
import { RootState } from "@app/redux/store";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState: initialAddressType = {
    Address: null,
    status: 'idle',
}
export const createAddress = createAsyncThunk('/api/createaddress',
    async ({ formData, update }: { formData: addressForm, update?: boolean }) => {
        console.log(formData, update, 'called createAddress');
        const response = await axios.post('/api/address/createaddress', { formData, update });
        console.log(response.status, response.statusText, 'created address slices status');
        return formData;
    }
)

export const getaddress = createAsyncThunk('/api/getaddress',
    async () => {
        const response = await axios.get('/api/address/getuseraddress',);
        const { data } = response;
        const { UserAddress }: { UserAddress: addressForm } = data;
        return UserAddress;

    }
)

export const Productslice = createSlice({
    name: 'productslice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(createAddress.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(createAddress.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(createAddress.fulfilled, (state, action) => {
                state.status = 'idle'
                state.Address = action.payload;
                console.log(state.Address, 'createaddress success');
            })
            .addCase(getaddress.pending, (state, action) => {
                state.status = 'pending'

            })
            .addCase(getaddress.rejected, (state, action) => {
                state.status = 'rejected'

            })
            .addCase(getaddress.fulfilled, (state, action) => {
                state.status = 'idle'
                if (action.payload) {
                    state.Address = action.payload
                }
            })
    }
}
)
export const selectaddress = (state: RootState) => state.adressreducer.Address;
export const selectaddressstatus = (state: RootState) => state.adressreducer.status;
export default Productslice.reducer