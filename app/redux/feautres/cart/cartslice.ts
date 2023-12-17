
//redux 
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@app/redux/store'
//axios api 
import axios from 'axios'
//schemas and models 
import { initialcartstate, productdetails } from '@CustomTypes/ReduxType'
import { productType } from '@models/product'
import { getcartitemSchema, getcartitemType } from '@CustomTypes/ApiSchemaType'
const initialState: initialcartstate = {
    cartproducts: null,
    status: 'idle',
}
export const AddCartItem = createAsyncThunk('api/addcart',
    async ({ product }: { product: productType }) => {
        await axios.post('/api/cart/createcart', {
            product_id: product._id
        });
        return { product };
    }
)
export const updatecart = createAsyncThunk('/api/cart/updatecart',
    async ({ product, increment }: { increment: boolean, product: productdetails }) => {
        const response = await axios.patch('/api/cart/updatecart', { product_id: product._id, increment });
        const result = await response.data;
        return { result, product, increment };
    })
export const getcartitems = createAsyncThunk('api/cart/fetchcartitems', async () => {
    const response: getcartitemType = await axios.post('/api/cart/fetchcartitems');
    // console.log(getcartitemSchema.safeParse(response.data), 'cartparse');

    const { cartproducts } = response.data;
    // console.log(cartproducts, 'cartslice');

    return cartproducts;
})
export const deletecartitem = createAsyncThunk('api/cart/delete', async ({ product_id }: { product_id: string }) => {
    const response: getcartitemType = await axios.post('/api/cart/deletecartitem', { product_id });
    return product_id;
})

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: (state) => {
            return initialState;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(AddCartItem.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(AddCartItem.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(AddCartItem.fulfilled, (state, action) => {
                const { product } = action.payload;
                const alreadyadded = state.cartproducts.find(p => p._id == product._id);
                if (!alreadyadded) {
                    var np = { ...product, cartquantity: 1 }
                    state.cartproducts.push(np);
                }
                state.status = 'idle';

            })
            .addCase(getcartitems.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(getcartitems.rejected, (state, action) => {
                state.status = 'rejected';
            })
            .addCase(getcartitems.fulfilled, (state, action) => {
                state.cartproducts = action.payload;
                state.status = 'idle';
            })
            .addCase(updatecart.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(updatecart.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(updatecart.fulfilled, (state, action) => {
                const { product, increment } = action.payload;
                state.cartproducts = state.cartproducts.map((p) => {
                    if (product._id === p._id) {
                        if (increment) {
                            return { ...p, cartquantity: p.cartquantity + 1 }
                        }
                        else {
                            if (p.cartquantity > 1) {

                                return { ...p, cartquantity: p.cartquantity - 1 }
                            }
                            return { ...p }
                        }
                    }
                    else {
                        return { ...p }
                    }
                })
                state.status = 'idle';

            })
            .addCase(deletecartitem.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(deletecartitem.rejected, (state, action) => {
                state.status = 'rejected'
            })
            .addCase(deletecartitem.fulfilled, (state, action) => {
                const product_id = action.payload;
                state.cartproducts = state.cartproducts.filter((p) => p._id.toString() != product_id.toString());
                state.status = 'idle';
            })
    }
})
export const { resetCart } = CartSlice.actions;
export const SelectCartItems = (state: RootState) => state.cartreducer.cartproducts;
export const SelectCartLength = (state: RootState) => state.cartreducer.cartproducts?.length || 0;
export const SelectCartStatus = (state: RootState) => state.cartreducer.status;
export default CartSlice.reducer