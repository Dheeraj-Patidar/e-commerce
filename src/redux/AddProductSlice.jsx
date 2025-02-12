import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
}

const AddProductSlice=createSlice({
    name:'addproduct',
    initialState,
    reducers:{
        addproduct:(state,action)=>{
          state.products.push({id: Date.now(), ...action.payload});
        },
        editproduct:(state,action)=>{
          const index=state.products.findIndex(product=>product.id===action.payload.id);
          state.products[index]={...state.products[index],...action.payload};
        },
        deleteproduct:(state,action)=>{
          state.products=state.products.filter(product=>product.id!==action.payload);
        }
    }
})

export const {addproduct , editproduct , deleteproduct } = AddProductSlice.actions

export default AddProductSlice.reducer