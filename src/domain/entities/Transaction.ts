/**
 * @description This is the transaction interface
 * @interface Transaction
 * @export
 * @author dannielf
 */
export interface Transaction {
  transactionId?: string;
  date?: string;
  from: string;
  to: string;
  quantity: number;
  type: TransactionType;
}

/**
 * @description This is the transaction type enum
 * @enum {string} TransactionType
 * @export
 * @author dannielf
 */
export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  TRANSFER = 'TRANSFER'
}
