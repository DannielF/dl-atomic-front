import React from 'react';
import { Outlet } from 'react-router-dom';
import { ListAnchor } from '../../molecules/listAnchor/ListAnchor';

export const FeaturesWallet = () => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <ListAnchor
            linkRoute="/features/transactions"
            linkName="Transactions"
          />
          <ListAnchor linkRoute="/features/transfer" linkName="Transfers" />
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
