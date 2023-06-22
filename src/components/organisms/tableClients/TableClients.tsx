import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { getAuthParams } from '../../../services/GetAuthParams';
import { getWallets } from '../../../shared/asyncThunks/AsyncThunks';
import { selectClientsWallet } from '../../../shared/slice/WalletSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { TbodyClients } from '../../molecules/tbodyClients/TbodyClients';

export const TableClients = () => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dispatchGetWallets = async () => {
      try {
        const params = getAuthParams();
        const token = await getAccessTokenSilently(params);
        dispatch(getWallets(token ?? ''));
      } catch (error) {
        console.error(error);
      }
    };
    dispatchGetWallets();
  }, [dispatch, getAccessTokenSilently]);

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
