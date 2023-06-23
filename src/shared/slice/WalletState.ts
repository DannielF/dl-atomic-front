import { Client } from '../../domain/entities/Client';
import { ErrorApi } from '../../domain/entities/ErrorApi';
import { Transaction } from '../../domain/entities/Transaction';

/**
 * @description This is the interface state for the wallet initial state
 * @returns {WalletState} Returns the interface state for the wallet initial state
 * @interface
 */
export interface WalletState {
  client: Client;
  clients: Client[];
  transaction: Transaction;
  transactions: Transaction[];
  error: ErrorApi;
  status: 'idle' | 'loading' | 'failed';
}
