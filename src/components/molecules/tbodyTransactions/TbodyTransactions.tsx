import React from 'react';
import { Transaction } from '../../../domain/entities/Transaction';

export const TbodyTransactions = ({ props }: { props: Transaction[] }) => {
  return (
    <>
      {props.map((transaction: Transaction) => (
        <tr key={transaction.transactionId}>
          <td>{transaction.type}</td>
          <td>{transaction.from}</td>
          <td>{transaction.to}</td>
          <td>{transaction.quantity}</td>
          <td>{transaction.date}</td>
        </tr>
      ))}
    </>
  );
};
