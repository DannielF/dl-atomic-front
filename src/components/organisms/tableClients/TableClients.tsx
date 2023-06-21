import { useEffect } from 'react';
import { getWallets } from '../../../shared/asyncThunks/AsyncThunks';
import { selectClientsWallet } from '../../../shared/slice/WalletSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { TbodyClients } from '../../molecules/tbodyClients/TbodyClients';

export const TableClients = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWallets());
  }, [dispatch]);

  const clients = useAppSelector(selectClientsWallet);

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
