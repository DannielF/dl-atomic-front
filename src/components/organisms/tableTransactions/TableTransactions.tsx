import React from 'react';
import { TbodyTransactions } from '../../molecules/tbodyTransactions/TbodyTransactions';
import { useAppSelector } from '../../../shared/store/hooks';

export const TableTransactions = () => {
  const transactions = useAppSelector((state) => state.wallet.transactions);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">To</th>
          <th scope="col">Quantity</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <TbodyTransactions props={transactions} />
    </table>
  );
};
