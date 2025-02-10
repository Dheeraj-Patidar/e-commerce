import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState={
    wishlist:[],
    cart:[],
}
const WishListSlice=createSlice({
   name:'wishlist',
   initialState,
   reducers:{
    addToWishList:(state,action)=>{
    const productExists = state.wishlist.some((product) => product.id === action.payload.id);
    if(!productExists){
         state.wishlist.push({...action.payload})
      }
    },

    addToCartFromWishList: (state, action) => {
        const productId = action.payload; 
        const product = state.wishlist.find((p) => p.id === productId);
       
        if (product) {
          state.cart.push({ ...product, quantity: 1 });
          
          state.wishlist = state.wishlist.filter((p) => p.id !== productId);
        }
        
      },
     
     removeFromWishlist:(state,action)=>{
     state.wishlist = state.wishlist.filter((p)=>p.id !== action.payload);
    },
   }
})

export const {addToWishList,removeFromWishlist,addToCartFromWishList}=WishListSlice.actions

export default WishListSlice.reducer