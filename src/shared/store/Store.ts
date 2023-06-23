import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import walletReducer from '../slice/WalletSlice';

/**
 * Redux store
 * @description This is the redux store that is used to store the state of the application
 * @returns {Store} Returns the redux store
 */
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
