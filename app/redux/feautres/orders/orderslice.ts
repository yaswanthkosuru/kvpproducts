'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@app/redux/store';
import { orderType } from '@models/orderModel';
import { data } from 'autoprefixer';


interface InitialState {
    orders: orderType[] | null;
    status: 'loading' | 'idle' | 'rejected'
}
const initialState: InitialState = {
    orders: null,
    status: 'idle'
}
export const getorders = createAsyncThunk('/fetchorders', async () => {
    console.log('dispatching getorders');
    const response = await axios.post('/api/orders/fetchorders');
    if (response.status === 200) {
        const { orders } = response.data;
        return orders;
    }

    return { msg: response.statusText };

})
export const CreateCartOrder = createAsyncThunk('/api/createcartOrder', async ({ price, coupon }: { price: number, coupon?: string }) => {
    console.log('dispatching create cart order');
    await axios.post('/api/orders/createcartorder', { coupon, price })
})




export const Order_slice = createSlice({
    name: 'Order_slice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder


            .addCase(CreateCartOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(CreateCartOrder.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(CreateCartOrder.fulfilled, (state, action) => {
                console.log(action.payload, 'createcartorder fullfilled');
                state.status = 'idle'
            })
            .addCase(getorders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getorders.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(getorders.fulfilled, (state, action) => {
                const orders = action.payload;
                state.orders = orders;
                state.status = 'idle'
                state.orders = action.payload;
            })



    }
})
export const SelectOrders = (state: RootState) => state.OrderReducer.orders;
export const SelectOrderStatus = (state: RootState) => state.OrderReducer.status;
export default Order_slice.reducer