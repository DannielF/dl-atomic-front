import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import walletReducer from '../slice/WalletSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
