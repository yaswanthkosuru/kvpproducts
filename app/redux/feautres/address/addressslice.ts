import { RootState } from "@app/redux/store";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AddressType } from "@models/Address_Model";
// Define an interface for the address
type formdatatype = Omit<AddressType, '_id'>;
interface AddressesType {
    Address: AddressType | null;
    status: 'idle' | 'Loading';
}
const initialState: AddressesType = {
    Address: null,
    status: 'idle',
}
export const createAddress = createAsyncThunk('/api/createaddress',
    async ({ formData, update }: { formData: formdatatype, update?: boolean }) => {
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
        const { UserAddress }: { UserAddress: formdatatype } = data;

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
            .addCase(createAddress.fulfilled, (state, action) => {
                state.Address = action.payload;
                console.log(state.Address, 'createaddress success');
            })
            .addCase(getaddress.fulfilled, (state, action) => {
                if (action.payload) {
                    state.Address = action.payload
                }
            })
    }
}
)
export const selectaddress = (state: RootState) => state.adressreducer.Address;
export default Productslice.reducer