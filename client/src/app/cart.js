import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  orders: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const product = state.orders.find(order => order._id === action.payload._id);
      if (product) {
        product.quantity += 1;
      } else {
        state.orders.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const product = state.orders.find(order => console.log(order));
      if (product) {
        if (product.quantity === 1) {
          console.log(product);
          state.orders = state.orders.filter(order => order.product._id !== action.payload.product._id);
        } else {
          product.quantity -= 1;
        }
      }
    },
    clearCart(state) {
      state.orders = [];
    }
  }
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;