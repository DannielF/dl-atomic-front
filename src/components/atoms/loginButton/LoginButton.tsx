import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';

const classCss = `btn btn-primary ${styles.button__login}`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      className={classCss}
      onClick={() =>
        loginWithRedirect({
          appState: {
            target: ''
          }
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginButton;
