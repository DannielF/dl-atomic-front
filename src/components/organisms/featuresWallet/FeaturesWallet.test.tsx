import { cleanup, render, screen } from '@testing-library/react';
import { FeaturesWallet } from './FeaturesWallet';
import { it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('FeaturesWallet', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <FeaturesWallet />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render FeaturesWallet', () => {
    const featuresDiv = screen.getByRole('card-header');
    expect(featuresDiv).toBeDefined();
  });

  it('should render the ul list', () => {
    const ulList = screen.getByRole('tablist');
    expect(ulList).toBeDefined();
    expect(ulList).toHaveProperty('id', 'tabFeatures');
    expect(ulList).toHaveProperty('className', 'nav nav-fill');
  });

  it('should render the li elements', async () => {
    const liElements = await screen.findAllByRole('presentation');
    expect(liElements).toBeDefined();
    expect(liElements).toHaveLength(2);
  });

  it('should render the a elements', async () => {
    const aElements = await screen.findAllByRole('tab');
    expect(aElements).toBeDefined();
    expect(aElements).toHaveLength(2);
  });

  it('should render the link transactions', async () => {
    const linkTransactions = await screen.findByRole('tab', {
      name: /transactions/i
    });
    expect(linkTransactions).toBeDefined();
  });

  it('should render the link transfers', async () => {
    const linkTransfers = await screen.findByRole('tab', {
      name: /transfers/i
    });
    expect(linkTransfers).toBeDefined();
  });
});
