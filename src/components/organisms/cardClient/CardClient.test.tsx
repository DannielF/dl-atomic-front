import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { it } from 'vitest';
import { store } from '../../../shared/store/Store';
import { CardClient } from './CardClient';

describe('CardClient', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CardClient />
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render img', () => {
    const img = screen.getByRole('img');
    expect(img).toBeDefined();
    expect(img).toHaveProperty('alt', 'Digital wallet logo');
    expect(img).toHaveProperty(
      'src',
      'https://www.shift4shop.com/2015/images/ecommerce-payment-gateways/digital-wallets/digital-wallet.png'
    );
    expect(img).toHaveProperty('className', 'card-img-top');
  });

  it('should render email', () => {
    const email = screen.getByText('Email:');
    expect(email).toBeDefined();
  });

  it('should render balance', () => {
    const balance = screen.getByText('Balance:');
    expect(balance).toBeDefined();
  });
});
