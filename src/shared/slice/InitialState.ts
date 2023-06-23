import { TransactionType } from '../../domain/entities/Transaction';
import { WalletState } from './WalletState';

/**
 * @description This is the initial state for the wallet slice
 * @returns {WalletState} Returns the initial state for the wallet slice
 */
export const initialState: WalletState = {
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
