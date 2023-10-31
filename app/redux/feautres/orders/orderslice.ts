'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@app/redux/store';
import { OrderType } from '@models/Order_Model'
import { data } from 'autoprefixer';


interface InitialState {
    orders: OrderType[] | null;
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
        const { order_details } = response.data;
        return order_details;
    }

    return { msg: response.statusText };

})
export const CreateCartOrder = createAsyncThunk('/api/createOrder', async () => {
    console.log('dispatching create cart order');
    await axios.post('/api/orders/createcartorder')
})
export const CreateOrder = createAsyncThunk('/api/createorder', async ({ product_id }: { product_id: string }) => {
    console.log('dispatching create order');
    await axios.post('/api/orders/createorder', { product_id })
})



export const Order_slice = createSlice({
    name: 'Order_slice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder

            .addCase(CreateOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(CreateOrder.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(CreateOrder.fulfilled, (state, action) => {
                state.status = 'idle'
            })
            .addCase(CreateCartOrder.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(CreateCartOrder.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(CreateCartOrder.fulfilled, (state, action) => {
                console.log(action.payload, 'createorder fullfilled');
                state.status = 'idle'
            })
            .addCase(getorders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getorders.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(getorders.fulfilled, (state, action) => {
                state.status = 'idle'
                state.orders = action.payload;
            })



    }
})
export const SelectOrders = (state: RootState) => state.OrderReducer.orders;
export const SelectOrderStatus = (state: RootState) => state.OrderReducer.status;
export default Order_slice.reducer