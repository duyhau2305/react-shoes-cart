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
    }
  }
})

export const { setLoading, addToCart } = appSlice.actions;

export const appReducer = appSlice.reducer;