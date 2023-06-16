import { createAsyncThunk } from '@reduxjs/toolkit';
import { Transaction } from '../../domain/entities/Transaction';
import {
  createWallet,
  getClientByEmail,
  getClients,
  getTransactionsByClientId,
  makeTransfer
} from '../../services/WalletApi';

export const getWallets = createAsyncThunk('wallet/clients', async () => {
  return await getClients();
});

export const clientWallet = createAsyncThunk(
  'wallet/client',
  async (email: string) => {
    return await getClientByEmail(email);
  }
);

export const getTransactionsWallet = createAsyncThunk(
  'wallet/transactions',
  async (clientId: string) => {
    return await getTransactionsByClientId(clientId);
  }
);

export const makeTransferWallet = createAsyncThunk(
  'wallet/transfer',
  async (transaction: Transaction) => {
    return await makeTransfer(transaction);
  }
);

export const createClientWallet = createAsyncThunk(
  'wallet/create',
  async (email: string) => {
    return await createWallet(email);
  }
);
