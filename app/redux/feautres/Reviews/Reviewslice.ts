import { RootState } from '@app/redux/store';
import { ReviewType } from '@models/Review_Model';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

interface initialstate {
    Reviews: ReviewType[] | null,
    status: 'idle' | 'Loading' | 'rejected'
}
const initialState: initialstate = {
    Reviews: null,
    status: 'idle',
}
export const getreviews = createAsyncThunk('api/getreviews', async ({ product_id }: { product_id: string }) => {
    const re = await axios.post('/api/reviews/getreviews', { product_id: product_id });
    const { reviews } = re.data;
    return reviews;
})

export const createreview = createAsyncThunk('/api/createreview', async ({ product_id, rating, review }: { product_id: string, rating: number, review: string }) => {
    console.log('dispatching createreview');
    const response = await axios.post('/api/reviews/createreview', { product_id, rating, review })
    return response.data;
})
export const Productslice = createSlice({
    name: 'Reviewslice',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(createreview.fulfilled, (state, action) => {
            })
            .addCase(getreviews.pending, (state, action) => {
                state.status = 'Loading'
            })
            .addCase(getreviews.fulfilled, (state, action) => {
                console.log(action.payload, 'getReviews.fulfilled');
                state.Reviews = action.payload;
                state.status = 'idle';
            })
            .addCase(getreviews.rejected, (state, action) => {
                state.status = 'rejected'
            })
    }

})
export const selectallreviews = (state: RootState) => state.reviewreducer.Reviews;
export const selectreviewsstatus = (state: RootState) => state.reviewreducer.status;
export const { } = Productslice.actions
export default Productslice.reducer