import {
  getTransactionsWallet,
  getWallets
} from '../../../shared/asyncThunks/AsyncThunks';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import { CardClient } from '../../organisms/cardClient/CardClient';
import { FeaturesWallet } from '../../organisms/featuresWallet/FeaturesWallet';
import styles from './dashboard.module.css';

const classCss = `${styles.dashboard__page}`;

export const Dashboard = () => {
  const dispatch = useAppDispatch();
  const clientWallet = useAppSelector((state) => state.wallet.client);
  dispatch(getWallets());
  dispatch(getTransactionsWallet(clientWallet.clientId ?? ''));
  return (
    <main className={classCss}>
      <CardClient />
      <FeaturesWallet />
    </main>
  );
};