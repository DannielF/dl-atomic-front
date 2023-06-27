import { useAuth0 } from '@auth0/auth0-react';
import styles from './LogoutButton.module.css';

const classCss = `btn btn-warning ${styles.button__logout}`;

/**
 * @description Logout button
 * @component
 * @returns {ReactElement} ReactElement
 */
const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = (): void => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <button type="button" className={classCss} onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
