import { RootState } from '@app/redux/store';
import { ReviewType } from '@models/Review_Model';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

interface initialstate {
    Reviews: ReviewType[],
}
const initialState: initialstate = {
    Reviews: [],
}
export const getReviews = createAsyncThunk('api/getreviews', async ({ product_id }: { product_id: string }) => {
    const response = await axios.post('/api/Reviews/getreviews', { product_id });
    const res = await response.data;
    return res;
})
export const createreview = createAsyncThunk('/api/createreview', async ({ product_id, rating, review }: { product_id: string, rating: number, review: string }) => {
    const response = await axios.post('/api/Reviews/createreview', { product_id, rating, review })
})
export const Productslice = createSlice({
    name: 'Reviewslice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getReviews.fulfilled, (state, action) => {
                console.log(action.payload, 'getReviews.fulfilled');

            })
    }

})
export const selectallreviews = (state: RootState) => state.reviewreducer.Reviews;
export const { } = Productslice.actions
export default Productslice.reducer