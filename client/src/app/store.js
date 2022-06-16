import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart.js';
import groceriesSlice from './groceries.js';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    gloceries: groceriesSlice,
  }
});

export default store;