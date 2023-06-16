import React from 'react';
import { Outlet } from 'react-router-dom';
import { ListAnchor } from '../../molecules/listAnchor/ListAnchor';
import styles from './featureWallet.module.css';

const classCss = `card text-center ${styles.feature__wallet}`;

export const FeaturesWallet = () => {
  return (
    <div className={classCss}>
      <div className="card-header">
        <ul className="nav nav-fill" id="tabFeatures" role="tablist">
          <ListAnchor
            linkRoute="/dashboard/transactions"
            linkName="Transactions"
          />
          <ListAnchor linkRoute="/dashboard/clients" linkName="Transfers" />
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
