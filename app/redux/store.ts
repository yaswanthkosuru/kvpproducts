import { configureStore } from '@reduxjs/toolkit'
import Cartreducer from './feautres/cart/cartslice'
import productreducer from './feautres/products/product-slice'
import reviewreducer from './feautres/Reviews/Reviewslice'
import AddressReducer from './feautres/address/addressslice'
import OrderReducer from './feautres/orders/orderslice';
import ReduxclientReducer from './feautres/clientside/clientslice';
export const store = configureStore({
    reducer: {
        cartreducer: Cartreducer,
        productreducer: productreducer,
        reviewreducer: reviewreducer,
        adressreducer: AddressReducer,
        OrderReducer: OrderReducer,
        clientreducer: ReduxclientReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch