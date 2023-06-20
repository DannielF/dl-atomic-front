import React from 'react';
import { TbodyClients } from '../../molecules/tbodyClients/TbodyClients';
import { useAppSelector } from '../../../shared/store/hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../shared/store/Store';
import { getWallets } from '../../../shared/asyncThunks/AsyncThunks';

export const TableClients = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getWallets());
  const clients = useAppSelector((state) => state.wallet.clients);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <TbodyClients props={clients} />
    </table>
  );
};
