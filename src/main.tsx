import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Auth0ProviderWithRedirectCallback } from './config/security/AuthProviderWithNavigate.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './shared/store/Store.ts';
import { authConfig } from './config/security/AuthProviderOptions.ts';

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
