import React from 'react';
import { TbodyClients } from '../../molecules/tbodyClients/TbodyClients';
import { useAppSelector } from '../../../shared/store/hooks';

export const TableClients = () => {
  const clients = useAppSelector((state) => state.wallet.clients);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        <TbodyClients props={clients} />
      </tbody>
    </table>
  );
};
