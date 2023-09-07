import { configureStore } from "@reduxjs/toolkit";
// import productReducer  from "../productsSlice"; // استخدم reducer بدلاً من productSlice
// export const store = configureStore({
//     reducer: {
//         products: productReducer // استخدم الـ reducer هنا
//     }
// });
import productReducer from "../productsSlice";
import cartSlice from "../cart-toolkit/cartSlice";

export const store = configureStore({
    reducer: {
        products: productReducer ,
        cart : cartSlice
    }
});
