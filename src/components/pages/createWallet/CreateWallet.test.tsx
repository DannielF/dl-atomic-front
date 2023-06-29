import { cleanup, render, screen } from '../../../shared/test-utils/test-utils';
import { afterEach, beforeEach, describe } from 'vitest';
import { CreateWallet } from './CreateWallet';
import { MemoryRouter } from 'react-router-dom';

describe('CreateWallet', () => {
  beforeEach(() => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/']}>
        <CreateWallet />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the main', () => {
    screen.debug();
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should render the h2', () => {
    const h2 = screen.getByRole('heading', { name: /create wallet/i });
    expect(h2).toBeInTheDocument();
  });

  it('should render the button', () => {
    const button = screen.getByRole('button', { name: /new wallet !!!/i });
    expect(button).toBeInTheDocument();
  });
});
