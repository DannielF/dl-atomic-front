import {
  AppState,
  Auth0Provider,
  Auth0ProviderOptions
} from '@auth0/auth0-react';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * @description Auth0Provider with redirect callback
 * @param {PropsWithChildren<Auth0ProviderOptions>} props
 * @returns {JSX.Element} JSX.Element
 */
export const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: PropsWithChildren<Auth0ProviderOptions>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo ?? window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};
