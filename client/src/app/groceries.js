import { createSlice } from '@reduxjs/toolkit';

const groceriesState = {
  groceries: [],
}

const groceriesSlice = createSlice({
  name: 'groceries',
  initialState: groceriesState,
  reducers: {
    setGroceriesState(state, action) {
      state.groceries.push({ ...action.payload })
    }
  }
})

export const { setGroceriesState } = groceriesSlice.actions;

export default groceriesSlice.reducer;