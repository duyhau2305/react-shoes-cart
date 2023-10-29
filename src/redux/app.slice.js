import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
})

export const { setLoading } = appSlice.actions;

export const appReducer = appSlice.reducer;