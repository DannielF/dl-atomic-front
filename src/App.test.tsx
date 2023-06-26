import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders walletApp name title', () => {
    //Arrange
    render(<App />);
    //Act
    const h2 = screen.findByRole('heading');
    //Assert
    expect(h2).toBe('WalletApp');
  });
});
