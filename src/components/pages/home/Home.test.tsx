import { cleanup, render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the h2', () => {
    const h2 = screen.getByRole('heading');
    expect(h2).toBeDefined();
    expect(h2).toHaveProperty('textContent', 'WalletApp');
  });

  it('should render the LoginButton', () => {
    const loginButton = screen.getByRole('button', { name: 'Log In' });
    expect(loginButton).toBeDefined();
    expect(loginButton).toHaveProperty('textContent', 'Log In');
  });

  it('should render the SignupButton', () => {
    const signupButton = screen.getByRole('button', { name: 'Sign Up' });
    expect(signupButton).toBeDefined();
    expect(signupButton).toHaveProperty('textContent', 'Sign Up');
  });
});
