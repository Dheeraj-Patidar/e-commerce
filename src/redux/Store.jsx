import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import CartReducer  from './CartSlice';
import WishListReducer from './WishListSlice'
import SearchReducer from './SearchSlice'
import AddProductReducer from './AddProductSlice';
import UserDetailReducer from './UserDetailSlice'
import FilterReducer from './FilterSlice';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart:CartReducer,
    wishlist:WishListReducer,
    search:SearchReducer,
    addproduct:AddProductReducer,
    userdetails:UserDetailReducer,
    filter:FilterReducer,
  
  },
});

export default store;
