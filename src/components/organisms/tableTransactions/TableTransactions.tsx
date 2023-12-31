import { useAuth0 } from '@auth0/auth0-react';
import { ReactElement, useEffect } from 'react';
import { getAuthParams } from '../../../config/security/GetAuthParams';
import { getTransactionsWallet } from '../../../shared/asyncThunks/AsyncThunks';
import {
  selectClientWallet,
  selectTransactionsWallet
} from '../../../shared/slice/WalletSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { TbodyTransactions } from '../../molecules/tbodyTransactions/TbodyTransactions';

/**
 * @description Table transactions component
 * @component
 * @returns {ReactElement} React Element
 */
export const TableTransactions = (): ReactElement => {
  const { getAccessTokenSilently } = useAuth0();
  const client = useAppSelector(selectClientWallet);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dispatchGetTransactionsWallet = async () => {
      try {
        const params = getAuthParams();
        const token = await getAccessTokenSilently(params);
        dispatch(
          getTransactionsWallet({
            clientId: client.email,
            token: token
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    dispatchGetTransactionsWallet();
  }, [client.clientId, client.email, dispatch, getAccessTokenSilently]);

  const transactions = useAppSelector(selectTransactionsWallet);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">To</th>
          <th scope="col">Quantity</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <TbodyTransactions props={transactions} />
    </table>
  );
};
