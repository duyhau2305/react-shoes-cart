/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  carts: [],
  products: []
};

// async thunk
export const fetchProductsAsync = createAsyncThunk(
  'app/fetchProductsAsync',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products'); 
    const data = await response.json();
    return data;
  }
)

// slices
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    addToCart: (state, { payload }) => {
      const item = {
        ...payload,
        quantity: 1
      }
      state.carts.push(item);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(cartItem => cartItem.id !== action.payload);
    },
    changeQuantity: (state, { payload }) => {
      const clonedCarts = [...state.carts]; // shallow clone
      const cartIndex = clonedCarts.findIndex(item => item.id === payload.id);
      if(cartIndex < 0) return;

      if(payload.type === 'increment') {
        clonedCarts[cartIndex].quantity = (clonedCarts[cartIndex].quantity ?? 0)  + 1;
      }
      if(payload.type === 'decrement') {
        clonedCarts[cartIndex].quantity = (clonedCarts[cartIndex].quantity ?? 0)  - 1;
      }

      state.carts = clonedCarts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state, action) => {
        // console.log('Pending: ', action);
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        // console.log('fulfilled: ', action);
        state.products = action.payload
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        // console.log('rejected: ', action);
      })
  }
})

export const { setLoading, addToCart, removeFromCart, changeQuantity} = appSlice.actions;

export const appReducer = appSlice.reducer;