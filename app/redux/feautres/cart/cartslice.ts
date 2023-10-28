
//redux 
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@app/redux/store'
//axios api 
import axios from 'axios'
//schemas and models 
import { itemtype } from '@models/Cart_Model'
import { CartStoreType } from '@CustomTypes/ReduxType'

const initialState: CartStoreType = {
    items: undefined,
    status: 'idle'
}
export const AddCartItem = createAsyncThunk('api/addcart',
    async ({ p_id }: { p_id: string }) => {
        await axios.post('/api/cart/createcart', { p_id });
        return p_id;
    }
)
export const updatecart = createAsyncThunk('/api/cart/updatecart',
    async ({ product_id, increment }: { increment: boolean, product_id: string }) => {
        const response = await axios.patch('/api/cart/updatecart', { product_id, increment });
        const result = await response.data;
        return { product_id, increment };
    })
export const getcartitems = createAsyncThunk('api/cart/fetchcartitems', async () => {
    const response = await axios.post('/api/cart/fetchcartitems');
    const { items } = response.data;
    return items;
})

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(AddCartItem.pending, (state, action) => {
                state.status = 'Loading';
            })
            .addCase(AddCartItem.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = 'idle'
                const item: itemtype = {
                    product_id: action.payload,
                    quantity: 1
                }
                const isexists = state.items?.find(item => item.product_id == action.payload)
                if (!isexists) {
                    state.items?.push(item);
                }

            })
            .addCase(getcartitems.pending, (state, action) => {
                state.status = 'Loading';
            })
            .addCase(getcartitems.fulfilled, (state, action) => {
                state.status = 'idle';
                const data = action.payload;
                console.log(data, 'fullfiled getcart');
                state.items = data;

            })
            .addCase(updatecart.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(updatecart.fulfilled, (state, action) => {
                state.status = 'idle'
                const { product_id, increment } = action.payload;
                const currentItem = state.items?.find(item => item.product_id === product_id);
                if (increment && currentItem) {
                    currentItem.quantity += 1;
                }
                else if (currentItem && !increment) {
                    currentItem.quantity -= 1;
                    if (currentItem.quantity <= 0) {
                        state.items = state.items?.filter(item => item.product_id != currentItem.product_id);
                    }
                }

            })
    }
})

export const SelectCartItems = (state: RootState) => state.cartreducer.items;
export const SelectCartStatus = (state: RootState) => state.cartreducer.status;
export default CartSlice.reducer