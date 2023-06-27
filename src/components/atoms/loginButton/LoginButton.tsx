import { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';

const classCss = `btn btn-primary ${styles.button__login}`;

/**
 * @description Login button
 * @component
 * @returns {ReactElement} ReactElement
 */
const LoginButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      authorizationParams: {
        audience: import.meta.env.VITE_API_AUDIENCE
      },
      appState: {
        returnTo: '/dashboard/transactions'
      }
    });
  };

  return (
    <button type="button" className={classCss} onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton;
