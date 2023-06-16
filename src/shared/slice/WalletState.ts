import { Client } from '../../domain/entities/Client';
import { ErrorApi } from '../../domain/entities/ErrorApi';
import { Transaction } from '../../domain/entities/Transaction';

export interface WalletState {
  client: Client;
  clients: Client[];
  transaction: Transaction;
  transactions: Transaction[];
  error: ErrorApi;
  status: 'idle' | 'loading' | 'failed';
}
