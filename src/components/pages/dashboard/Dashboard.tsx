import React from 'react';
import { CardClient } from '../../organisms/cardClient/CardClient';
import styles from './Dashboard.module.css';

const classCss = `${styles.dashboard__page}`;

export const Dashboard = () => {
  return (
    <main className={classCss}>
      <CardClient />
    </main>
  );
};
