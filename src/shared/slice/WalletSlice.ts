import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Client } from '../../domain/entities/Client';
import {
  Transaction,
  TransactionType
} from '../../domain/entities/Transaction';
import { createWallet, getClientByEmail } from '../../services/WalletApi';
import { RootState } from '../store/Store';
import { ErrorApi } from '../../domain/entities/ErrorApi';

export interface WalletState {
  client: Client;
  clients: Client[];
  transaction: Transaction;
  transactions: Transaction[];
  error: ErrorApi;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WalletState = {
  client: {
    clientId: '',
    email: '',
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
  error: {
    statusCode: 0,
    message: '',
    path: ''
  },
  status: 'idle'
};

export const clientWallet = createAsyncThunk(
  'wallet/client',
  async (email: string) => {
    return await getClientByEmail(email);
  }
);

export const createClientWallet = createAsyncThunk(
  'wallet/create',
  async (email: string) => {
    return await createWallet(email);
  }
);

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
      });
  }
});

export const { setClient, setClients, setTransaction, setTransactions } =
  walletSlice.actions;

export const selectClientWallet = (state: RootState) => state.wallet.client;
export const selectClientsWallet = (state: RootState) => state.wallet.clients;
export const selectTransactionWallet = (state: RootState) =>
  state.wallet.transaction;
export const selectTransactionsWallet = (state: RootState) =>
  state.wallet.transactions;

export default walletSlice.reducer;
