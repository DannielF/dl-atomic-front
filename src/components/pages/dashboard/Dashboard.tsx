import React from 'react';
import { CardClient } from '../../organisms/cardClient/CardClient';
import styles from './dashboard.module.css';
import { FeaturesWallet } from '../../organisms/featuresWallet/FeaturesWallet';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import {
  getTransactionsWallet,
  getWallets
} from '../../../shared/asyncThunks/AsyncThunks';

const classCss = `${styles.dashboard__page}`;

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const clientWallet = useAppSelector((state) => state.wallet.client);
  dispatch(getWallets());
  dispatch(getTransactionsWallet(clientWallet.clientId ?? ''));
  return (
    <main className={classCss}>
      <CardClient />
      <FeaturesWallet />
    </main>
  );
};
