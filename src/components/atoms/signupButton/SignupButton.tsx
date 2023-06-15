import { useAuth0 } from '@auth0/auth0-react';
import styles from './SignupButton.module.css';

const classCss = `btn btn-secondary ${styles.button__sign_up}`;

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

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
  };

  return (
    <button className={classCss} onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
