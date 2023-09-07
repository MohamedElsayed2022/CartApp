import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
        },
        ClearAll : (state , action)=>{
            return []
        },
        DeleteFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        }
        
    }
});

export const { addToCart , ClearAll , DeleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
