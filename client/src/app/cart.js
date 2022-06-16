import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  orders: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const product = state?.orders.find(order => order.product?._id === action.payload.product?._id);
      if (product) {
        product.quantity += 1;
      } else {
        state.orders.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart(state) {
      state.orders = [];
    }
  }
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;