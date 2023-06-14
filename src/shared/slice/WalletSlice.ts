import { Client } from '../../domain/entities/Client';
import {
  Transaction,
  TransactionType
} from '../../domain/entities/Transaction';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClientByEmail } from '../../services/WalletApi';
import { RootState } from '../store/Store';

export interface WalletState {
  client: Client;
  clients: Client[];
  transaction: Transaction;
  transactions: Transaction[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WalletState = {
  client: {
    clientId: '',
    email: '',
    documentId: '',
    balance: 0
  },
  clients: [],
  transaction: {
    transactionId: '',
    from: '',
    to: '',
    date: '',
    quantity: 0,
    type: TransactionType.DEPOSIT
  },
  transactions: [],
  status: 'idle'
};

export const clientWallet = createAsyncThunk(
  'wallet/client',
  async (email: string) => {
    return await getClientByEmail(email);
  }
);

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<Client>) => {
      state.client = action.payload;
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
      });
  }
});

export const { setClient } = walletSlice.actions;

export const selectClientWallet = (state: RootState) => state.wallet.client;

export default walletSlice.reducer;
