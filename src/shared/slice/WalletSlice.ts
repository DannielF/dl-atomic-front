import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Client } from '../../domain/entities/Client';
import { ErrorApi } from '../../domain/entities/ErrorApi';
import { Transaction } from '../../domain/entities/Transaction';
import {
  clientWallet,
  createClientWallet,
  getTransactionsWallet,
  getWallets,
  makeTransferWallet
} from '../asyncThunks/AsyncThunks';
import { RootState } from '../store/Store';
import { initialState } from './InitialState';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<Client>) => {
      state.client = action.payload;
    },
    setClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;
    },
    setTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transaction = action.payload;
    },
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
    setError: (state, action: PayloadAction<ErrorApi>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(clientWallet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(clientWallet.fulfilled, (state, action) => {
        state.status = 'idle';
        state.client = action.payload;
      })
      .addCase(createClientWallet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createClientWallet.fulfilled, (state, action) => {
        state.status = 'idle';
        state.client = action.payload;
      })
      .addCase(getWallets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWallets.fulfilled, (state, action) => {
        state.status = 'idle';
        state.clients = action.payload;
      })
      .addCase(getTransactionsWallet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTransactionsWallet.fulfilled, (state, action) => {
        state.status = 'idle';
        state.transactions = action.payload;
      })
      .addCase(makeTransferWallet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(makeTransferWallet.fulfilled, (state, action) => {
        state.status = 'idle';
        state.transaction = action.payload;
      });
  }
});

export const {
  setClient,
  setClients,
  setTransaction,
  setTransactions,
  setError
} = walletSlice.actions;

export const selectClientWallet = (state: RootState) => state.wallet.client;
export const selectClientsWallet = (state: RootState) => state.wallet.clients;
export const selectTransactionWallet = (state: RootState) =>
  state.wallet.transaction;
export const selectTransactionsWallet = (state: RootState) =>
  state.wallet.transactions;
export const selectErrorWallet = (state: RootState) => state.wallet.error;

export default walletSlice.reducer;
