import {createSlice} from '@reduxjs/toolkit';
import products from '../utils/Products';
const initialState = {
    filter: ''
}

const FilterSlice = createSlice({

    name: 'filter',
    initialState,
    reducers: {
        filterprice: (state, action) => {
            state.action=products.filter((product)=>{
                if(action.payload >100 && action.payload<500){
                return product.price>=100 && product.price<=500;
                }
            })
        },
        filterbrand: (state, action) => {
            state.filter = action.payload;
        }

    }

});


export const { filterprice, filterbrand } = FilterSlice.actions;
export default FilterSlice.reducer;