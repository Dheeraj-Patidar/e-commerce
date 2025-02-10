import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import CartReducer  from './CartSlice';
import WishListReducer from './WishListSlice'
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart:CartReducer,
    wishlist:WishListReducer,
  },
});

export default store;
