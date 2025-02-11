import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
}

const AddProductSlice=createSlice({
    name:'addproduct',
    initialState,
    reducers:{
        addproduct:(state,action)=>{
          state.products.push(action.payload);
        }
    }
})

export const {addproduct} = AddProductSlice.actions

export default AddProductSlice.reducer