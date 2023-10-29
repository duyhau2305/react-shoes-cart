import { configureStore } from '@reduxjs/toolkit';

// reducer
import { appReducer } from '../redux/app.slice';

export const store = configureStore({
  reducer: {
    app: appReducer
  },
})