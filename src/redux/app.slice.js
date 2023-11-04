import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  carts: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    addToCart: (state, { payload }) => {
      state.carts.push(payload);
    },
    removeFromCart: (state, action) => {
      console.log('Current carts before removal: ', state.carts);
      state.carts = state.carts.filter(cartItem => cartItem.id !== action.payload);
      console.log('Current carts after removal: ', state.carts);
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.carts.find(item => item.id === payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.carts.find(item => item.id === payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity < 1) {
          state.carts = state.carts.filter(cartItem => cartItem.id !== payload);
        }
      }
    },
  }
})

export const { setLoading, addToCart, removeFromCart, incrementQuantity, decrementQuantity} = appSlice.actions;

export const appReducer = appSlice.reducer;