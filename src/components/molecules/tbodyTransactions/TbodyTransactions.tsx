import React from 'react';
import { Transaction } from '../../../domain/entities/Transaction';

export const TbodyTransactions = ({ props }: { props: Transaction[] }) => {
  return (
    <tbody className="table-group-divider">
      {props.length > 0 ? (
        props.map((transaction: Transaction) => (
          <tr key={transaction.transactionId}>
            <td>{transaction.to}</td>
            <td>{transaction.quantity}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td></td>
        </tr>
      )}
    </tbody>
  );
};
