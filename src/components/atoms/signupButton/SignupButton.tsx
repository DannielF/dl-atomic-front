import { ReactElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './SignupButton.module.css';

const classCss = `btn btn-secondary ${styles.button__sign_up}`;

/**
 * @description SignUp button
 * @component
 * @returns {ReactElement} React Element
 */
export const SignupButton = (): ReactElement => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async (): Promise<void> => {
    await loginWithRedirect({
      authorizationParams: {
        audience: import.meta.env.VITE_API_AUDIENCE,
        screen_hint: 'signup'
      },
      appState: {
        returnTo: '/createWallet'
      }
    });
  };

  return (
    <button className={classCss} onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
