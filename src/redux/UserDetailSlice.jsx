import { createSlice } from "@reduxjs/toolkit";
import users from "../utils/Users";

const initialState={
    user:[]
}

const UserDetailSlice=createSlice({
    name:'userdetails',
    initialState,
    reducers:{
        displayusers:(state)=>{
            state.user=users
        },
        deleteuser:(state,action)=>{
            state.user=state.user.filter((u)=>u.id !== action.payload);
        }
    }
})

export const {displayusers,deleteuser} = UserDetailSlice.actions;
export default UserDetailSlice.reducer;