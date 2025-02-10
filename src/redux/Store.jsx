import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import CartReducer  from './CartSlice';
import WishListReducer from './WishListSlice'
import SearchReducer from './SearchSlice'
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart:CartReducer,
    wishlist:WishListReducer,
    search:SearchReducer,
  },
});

export default store;
