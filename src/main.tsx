import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Auth0ProviderWithRedirectCallback } from './config/AuthProviderWithNavigate.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './shared/store/Store.ts';

/** @type {*}
 * @description Auth0 configuration
 * @see https://auth0.com/docs/libraries/auth0-react
 */
const authConfig = {
  domain: import.meta.env.VITE_AUTH_DOMAIN,
  clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
  useRefreshTokens: true,
  useRefreshTokensCallBack: false,
  authorizationParams: {
    audience: import.meta.env.VITE_API_AUDIENCE,
    redirect_uri: window.location.origin
  }
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback {...authConfig}>
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
);
