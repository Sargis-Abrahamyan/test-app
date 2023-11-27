import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import reportSlice from './Slice/reportSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    report: reportSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
