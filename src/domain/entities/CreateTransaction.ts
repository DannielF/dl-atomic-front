import { TransactionType } from './Transaction';

export interface CreateTransaction {
  from: string;
  to: string;
  quantity: number;
  type: TransactionType;
  clientId: string;
}
