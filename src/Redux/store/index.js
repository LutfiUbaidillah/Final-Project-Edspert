import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";
import carttReducer from "./cart/slice";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: carttReducer,
  },
});
