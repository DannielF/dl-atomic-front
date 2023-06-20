import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../shared/store/hooks';
import { TbodyTransactions } from '../../molecules/tbodyTransactions/TbodyTransactions';
import { AppDispatch } from '../../../shared/store/Store';
import { getTransactionsWallet } from '../../../shared/asyncThunks/AsyncThunks';

export const TableTransactions = () => {
  const client = useAppSelector((state) => state.wallet.client);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getTransactionsWallet(client.clientId ?? ''));
  const transactions = useAppSelector((state) => state.wallet.transactions);
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
