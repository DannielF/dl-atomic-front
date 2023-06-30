import { Auth0ProviderOptions } from '@auth0/auth0-react';

/** @type {*}
 * @description Auth0 configuration
 * @see https://auth0.com/docs/libraries/auth0-react
 */
export const authConfig: Auth0ProviderOptions = {
  domain: import.meta.env.VITE_AUTH_DOMAIN,
  clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
  useRefreshTokens: true,
  useRefreshTokensFallback: false,
  authorizationParams: {
    audience: import.meta.env.VITE_API_AUDIENCE,
    redirect_uri: window.location.origin
  }
};
