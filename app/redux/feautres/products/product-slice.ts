import { RootState } from '@app/redux/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createproductformtype, initialproductstate } from '@CustomTypes/ReduxType'


const initialState: initialproductstate = {
    products: undefined,
    status: 'idle'
}
export const createproduct = createAsyncThunk('product/createproduct',
    async ({ formData }: { formData: createproductformtype }) => {
        const response = await axios.post('/api/admin/product/createproduct', {
            formData
        });
        console.log('called async thunk cp');
        const { products } = await response.data;

        return products;
    })
export const getallproducts = createAsyncThunk('getoverallproducts', async () => {
    const response = await axios.post('/api/products/fetchproducts');
    const data = await response.data;
    const { products } = data;

    return products;
})
export const getproduct = createAsyncThunk('getsingleproduct', async ({ id }: { id: string }) => {
    console.log('calling getproduct');
    const response = await axios.post('/api/products/fetchproduct', { id });
    const { data } = await response.data;
    const { product } = data;
    return product;
})
export const Productslice = createSlice({
    name: 'productslice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(createproduct.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(createproduct.fulfilled, (state, action) => {
                state.status = 'idle'
            })
            .addCase(createproduct.rejected, (state, action) => {
                state.status = 'rejected';
            })
            .addCase(getallproducts.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(getallproducts.fulfilled, (state, action) => {

                state.products = action.payload;
                state.status = 'idle';
            })
            .addCase(getallproducts.rejected, (state, action) => {
                state.status = 'rejected';
            })
            .addCase(getproduct.fulfilled, (state, action) => {
                const product = action.payload;
                const productexists = state.products.find(p => p._id === product.id)
                if (!productexists) {
                    state.products.push(product);
                }
            })


    }
})
export const selectallproducts = (state: RootState) => state.productreducer.products;
export const selectproductstatus = (state: RootState) => state.productreducer.status;
export const selectproductwithid = (state: RootState, product_id: string) => {
    const product = state.productreducer.products?.find((product) => {
        return product?._id?.toString() === product_id;
    });
    return product;
}

export const { } = Productslice.actions
export default Productslice.reducer