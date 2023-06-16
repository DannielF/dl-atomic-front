import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';
import { useDispatch } from 'react-redux';
import { clientWallet } from '../../../shared/asyncThunks/AsyncThunks';
import { AppDispatch } from '../../../shared/store/Store';

const classCss = `btn btn-primary ${styles.button__login}`;

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        target: 'dashboard'
      }
    });
    const userEmail = user?.email ?? '';
    dispatch(clientWallet(userEmail));
  };

  return (
    <button type="button" className={classCss} onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton;
