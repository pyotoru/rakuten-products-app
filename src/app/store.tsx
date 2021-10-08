import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export default store;
