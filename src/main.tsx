import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Auth0ProviderWithRedirectCallback } from './shared/AuthProviderWithNavigate.tsx';

const authConfig = {
  domain: import.meta.env.AUTH_DOMAIN,
  clientId: import.meta.env.AUTH_CLIENT_ID,
  useRefreshTokens: true,
  useRefreshTokensCallBack: false,
  authorizationParams: {
    audience: import.meta.env.AUTH_AUDIENCE,
    redirect_uri: window.location.origin
  }
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback {...authConfig}>
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
);
