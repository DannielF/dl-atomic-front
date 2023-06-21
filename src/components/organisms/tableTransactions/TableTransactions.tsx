import React, { useEffect } from 'react';
import { getTransactionsWallet } from '../../../shared/asyncThunks/AsyncThunks';
import {
  selectClientWallet,
  selectTransactionsWallet
} from '../../../shared/slice/WalletSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { TbodyTransactions } from '../../molecules/tbodyTransactions/TbodyTransactions';

export const TableTransactions = () => {
  const client = useAppSelector(selectClientWallet);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransactionsWallet(client.clientId ?? ''));
  }, [client.clientId, dispatch]);

  const transactions = useAppSelector(selectTransactionsWallet);
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
