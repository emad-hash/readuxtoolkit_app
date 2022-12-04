import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducers/reducer.js';
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
