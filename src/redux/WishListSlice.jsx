import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./CartSlice";

const initialState = {
  wishlist: [],
};

export const addToCartFromWishList = createAsyncThunk(
  'wishlist/addToCartFromWishList',
  async (product, { dispatch }) => {
    dispatch(addToCart(product));
    return product;
  }
);

const WishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const productExists = state.wishlist.some((product) => product.id === action.payload.id);
      if (!productExists) {
        state.wishlist.push({ ...action.payload });
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartFromWishList.fulfilled, (state, action) => {
      state.wishlist = state.wishlist.filter((product) => product.id !== action.payload.id);
    });
  }
});

export const { addToWishList, removeFromWishlist } = WishListSlice.actions;

export default WishListSlice.reducer;
