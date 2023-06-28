import { Outlet } from 'react-router-dom';
import { ListAnchor } from '../../molecules/listAnchor/ListAnchor';
import styles from './featureWallet.module.css';
import { ReactElement } from 'react';

const classCss = `card text-center ${styles.feature__wallet}`;

/**
 * @description Features wallet component
 * @component
 * @returns {ReactElement} React Element
 */
export const FeaturesWallet = (): ReactElement => {
  return (
    <div className={classCss}>
      <div className="card-header" role="card-header">
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
