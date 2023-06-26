import { render, screen } from '@testing-library/react';
import LogoutButton from './LogoutButton';

describe('LogoutButton', () => {
  it('button renders', async () => {
    render(<LogoutButton />);
    const button = await screen.findByRole('button');
    expect(button).toBeDefined();
  });

  it('button renders with text', async () => {
    render(<LogoutButton />);
    const button = await screen.findByRole('button');
    expect(button).toHaveProperty('textContent', 'Log Out');
  });
});
