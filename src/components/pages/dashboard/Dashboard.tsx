import React from 'react';
import { CardClient } from '../../organisms/cardClient/CardClient';
import styles from './dashboard.module.css';
import { FeaturesWallet } from '../../organisms/featuresWallet/FeaturesWallet';

const classCss = `${styles.dashboard__page}`;

export const Dashboard = () => {
  return (
    <main className={classCss}>
      <CardClient />
      <FeaturesWallet />
    </main>
  );
};
