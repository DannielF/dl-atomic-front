import { Client } from '../../domain/entities/Client';
import {
  Transaction,
  TransactionType
} from '../../domain/entities/Transaction';

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
