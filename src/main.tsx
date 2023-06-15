import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Auth0ProviderWithRedirectCallback } from './config/AuthProviderWithNavigate.tsx';
import './index.css';

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
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
);
