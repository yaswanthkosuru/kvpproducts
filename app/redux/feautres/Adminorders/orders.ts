import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderType } from "@models/orderModel";
import axios from "axios";
import { RootState } from "@app/redux/store";
import { AddressType } from "@models/addressModel";
import { ProductType } from "@models/productModel";
import { UserType } from "@models/userModel";
type init = {
    order_detals: {
        address: AddressType,
        productdetails: ProductType[],
        amount: number,
        orderstatus: string,
        ordertype: string,
        userdetails: UserType,
    }[] | null
};

const initialState: init = {
    order_detals: null,
}
export const getAdminOrders = createAsyncThunk('',
    async () => {
        const res = await axios.post('/api/admin/orders/fetchorders');
        const { order_details } = res.data;
        console.log(order_details, 'adminorders');

        return order_details;
    }
)

export const Adminorderslice = createSlice({
    name: 'productslice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getAdminOrders.fulfilled, (state, action) => {
            console.log(action.payload)
            state.order_detals = action.payload;
        })
    }
})
export const selectAdminOrders = (state: RootState) => state.Adminorderreducer.order_detals;
export default Adminorderslice.reducer;