import { ReactElement } from 'react';
import LoginButton from '../../atoms/loginButton/LoginButton';
import { SignupButton } from '../../atoms/signupButton/SignupButton';
import styles from './Home.module.css';

const classCss = `${styles.homeLogin}`;

/**
 * @description Home component
 * @component
 * @returns {ReactElement} React Element
 */
export const Home = (): ReactElement => {
  return (
    <main className={classCss}>
      <h2>WalletApp</h2>
      <LoginButton />
      <SignupButton />
    </main>
  );
};
