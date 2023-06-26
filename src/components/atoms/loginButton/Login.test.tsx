import { render, screen } from '@testing-library/react';
import LoginButton from './LoginButton';

describe('LoginButton', () => {
  it('renders LoginButton component', () => {
    render(<LoginButton />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });

  it('renders LoginButton component with text', () => {
    render(<LoginButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveProperty('textContent', 'Log In');
  });
});
