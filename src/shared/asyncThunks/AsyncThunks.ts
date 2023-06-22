import { createAsyncThunk } from '@reduxjs/toolkit';
import { Transaction } from '../../domain/entities/Transaction';
import {
  createWallet,
  getClientByEmail,
  getClients,
  getTransactionsByClientId,
  makeTransfer
} from '../../services/WalletApi';

export const getWallets = createAsyncThunk(
  'wallet/clients',
  async (token: string) => {
    return await getClients(token);
  }
);

export const clientWallet = createAsyncThunk(
  'wallet/client',
  async ({ email, token }: { email: string; token: string }) => {
    return await getClientByEmail(email, token);
  }
);

export const getTransactionsWallet = createAsyncThunk(
  'wallet/transactions',
  async ({ clientId, token }: { clientId: string; token: string }) => {
    return await getTransactionsByClientId(clientId, token);
  }
);

export const makeTransferWallet = createAsyncThunk(
  'wallet/transfer',
  async ({
    transaction,
    token
  }: {
    transaction: Transaction;
    token: string;
  }) => {
    return await makeTransfer(transaction, token);
  }
);

export const createClientWallet = createAsyncThunk(
  'wallet/create',
  async ({ email, token }: { email: string; token: string }) => {
    return await createWallet(email, token);
  }
);
