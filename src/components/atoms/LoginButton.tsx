import React from 'react';
import styles from './LoginButton.module.css';
import { useAuth0 } from '@auth0/auth0-react';

const classCss = `btn btn-primary ${styles.login_button}`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      className={classCss}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
