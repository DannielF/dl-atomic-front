import { useAuth0 } from '@auth0/auth0-react';
import styles from './SignupButton.module.css';
import { useDispatch } from 'react-redux';
import { createClientWallet } from '../../../shared/asyncThunks/AsyncThunks';

const classCss = `btn btn-secondary ${styles.button__sign_up}`;

export const SignupButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/dashboard'
      },
      authorizationParams: {
        audience: import.meta.env.VITE_API_AUDIENCE,
        screen_hint: 'signup'
      }
    });
    if (isAuthenticated) {
      const userEmail = user?.email ?? '';
      dispatch(createClientWallet(userEmail) as any);
    }
  };

  return (
    <button className={classCss} onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
