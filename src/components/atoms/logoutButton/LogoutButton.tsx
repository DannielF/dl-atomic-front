import React from 'react';
import styles from './LogoutButton.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

const classCss = `btn btn-warning ${styles.logout_button}`;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className={classCss}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;