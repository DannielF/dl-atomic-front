import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';
import { useDispatch } from 'react-redux';
import { clientWallet } from '../../../shared/asyncThunks/AsyncThunks';

const classCss = `btn btn-primary ${styles.button__login}`;

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        target: '/dashboard'
      }
    });
    if (isAuthenticated) {
      const userEmail = user?.email ?? '';
      dispatch(clientWallet(userEmail) as any);
    }
  };

  return (
    <button type="button" className={classCss} onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton;
