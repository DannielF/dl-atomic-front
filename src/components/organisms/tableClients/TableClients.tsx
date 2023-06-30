import { useAuth0 } from '@auth0/auth0-react';
import { ReactElement, useEffect } from 'react';
import { getAuthParams } from '../../../config/security/GetAuthParams';
import { getWallets } from '../../../shared/asyncThunks/AsyncThunks';
import {
  selectClientWallet,
  selectClientsWallet
} from '../../../shared/slice/WalletSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { TbodyClients } from '../../molecules/tbodyClients/TbodyClients';

/**
 * @description Table clients component
 * @component
 * @returns {ReactElement} React Element
 */
export const TableClients = (): ReactElement => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dispatchGetWallets = async () => {
      try {
        const params = getAuthParams();
        const token = await getAccessTokenSilently(params);
        dispatch(getWallets(token));
      } catch (error) {
        console.error(error);
      }
    };
    dispatchGetWallets();
  }, [dispatch, getAccessTokenSilently]);

  const userWallet = useAppSelector(selectClientWallet);
  const clients = useAppSelector(selectClientsWallet);
  const filterClients = clients.filter(
    (client) => client.clientId !== userWallet.clientId
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <TbodyClients props={{ clients: filterClients, wallet: userWallet }} />
    </table>
  );
};
