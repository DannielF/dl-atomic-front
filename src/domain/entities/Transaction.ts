export interface Transaction {
  transactionId?: string;
  date: Date;
  from: string;
  to: string;
  quantity: number;
  type: TransactionType;
}

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  TRANSFER = 'TRANSFER'
}