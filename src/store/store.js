import { configureStore } from '@reduxjs/toolkit';
import iconReducer from './iconSlice';

export const store = configureStore({
  reducer: {
    icon: iconReducer,
  },
}); 