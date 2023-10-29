'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@app/redux/store';
import product from '@components/ProductCards/ProductComponent'
import { OrderType } from '@models/Order_Model'


interface InitialState {
    orders: OrderType[];
}
const initialState: InitialState = {
    orders: [],
}

export const create_order = createAsyncThunk('/api/createOrder', async ({ product_id }: { product_id: string }) => {
    const response = await axios.post('/api/Orders/createorder', { product_id })
    const { createdorder } = response.data;
    return createdorder;
})
export const Fetch_Orders = createAsyncThunk('/api/GetOrder', async () => {
    const response = await axios.get('/api/Orders/getorders')
    return response.data;
})


export const Order_slice = createSlice({
    name: 'Order_slice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(create_order.fulfilled, (state, action) => {
                console.log(action.payload, 'createorder fullfilled');

            })
            .addCase(Fetch_Orders.fulfilled, (state, action) => {
                const { orders } = action.payload;
                state.orders = orders;
                console.log(orders, 'createorder fullfilled');

            })
    }
})
export const Select_Orders = (state: RootState) => state.OrderReducer.orders;
export default Order_slice.reducer