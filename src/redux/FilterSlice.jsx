import {createSlice} from '@reduxjs/toolkit';
import products from '../utils/Products';
const initialState = {
    filter: {
        pricerange: '',
        category: '',
    }
}

const FilterSlice = createSlice({

    name: 'filter',
    initialState,
    reducers: {
        filterprice: (state, action) => {
            const {min , max} = action.payload;
            state.filter.pricerange= {min, max};
        },
        filtercategory: (state, action) => {
            state.filter.category = action.payload;
        }

    }

});


export const { filterprice, filtercategory } = FilterSlice.actions;

export const selectFilterProducts = (state) => {
    const { pricerange, category } = state.filter;
    return products.filter((product) => {
        const priceMatch = pricerange ? product.price >= pricerange.min && product.price <= pricerange.max : true;
        const categoryMatch = category ? product.title === category : true;
        return priceMatch && categoryMatch;
    });
}
export default FilterSlice.reducer;