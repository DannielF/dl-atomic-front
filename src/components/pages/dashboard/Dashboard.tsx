import { CardClient } from '../../organisms/cardClient/CardClient';
import { FeaturesWallet } from '../../organisms/featuresWallet/FeaturesWallet';
import styles from './dashboard.module.css';

const classCss = `${styles.dashboard__page}`;

/**
 * @description Dashboard component
 * @component
 * @returns {ReactElement} React Element
 */
export const Dashboard = () => {
  return (
    <main className={classCss}>
      <CardClient />
      <FeaturesWallet />
    </main>
  );
};
