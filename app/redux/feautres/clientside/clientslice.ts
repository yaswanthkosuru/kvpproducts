import { RootState } from '@app/redux/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
type clientinitstate = {
    couponcode: string | null
}
const initialState: clientinitstate = {
    couponcode: null
}
export const reduxclientside = createSlice({
    name: 'reduxclientside',
    initialState,
    reducers: {
        setcoupon: (state, action) => {
            state.couponcode = action.payload;
            return state;
        },

    },
    extraReducers(builder) {

    }
})
export const { setcoupon } = reduxclientside.actions;
export const selectcouponcode = (state: RootState
) => {
    return state.clientreducer.couponcode;
}
export default reduxclientside.reducer