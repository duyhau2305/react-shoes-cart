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
      state.carts.push(payload);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(cartItem => cartItem.id !== action.payload);
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.carts.find(item => item.id === payload);
      console.log(item);
      if (item ) {
        item.quantity += 1;
      } else {        
       
      }
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.carts.find(item => item.id === payload);
      console.log(item); 
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        
        state.carts = state.carts.filter(cartItem => cartItem.id !== payload);
      } else {        
        
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state, action) => {
        console.log('Pending: ', action);
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        console.log('fulfilled: ', action);
        state.products = action.payload
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        console.log('rejected: ', action);
      })
  }
})

export const { setLoading, addToCart, removeFromCart, incrementQuantity, decrementQuantity} = appSlice.actions;

export const appReducer = appSlice.reducer;