import {createSlice} from '@reduxjs/toolkit'
const initialState={
    cart:[],
}

const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        const existingProductIndex = state.cart.findIndex(item=>item.id===action.payload.id);
        if(existingProductIndex !==-1){
            state.cart[existingProductIndex].quantity +=1;
        }
    
        else{
            state.cart.push({...action.payload,quantity:1});
        }
    },

        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter(item=>item.id!==action.payload);
        },
        updateQuantity:(state,action)=>{
            const {productid,quantity}=action.payload;
            const product=state.cart.find(item=>item.id===productid);
            if(product){
                product.quantity=Math.max(quantity,1);
            }
        },
        clearCart:(state,action)=>{
            state.cart=[]
        }
        },
        
    }
)

export const {addToCart,removeFromCart,updateQuantity,clearCart}=CartSlice.actions;


export default CartSlice.reducer