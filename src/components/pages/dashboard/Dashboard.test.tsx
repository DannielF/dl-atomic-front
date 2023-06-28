import { cleanup, render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { Provider } from 'react-redux';
import { store } from '../../../shared/store/Store';
import { MemoryRouter } from 'react-router-dom';

vi.importMock('../../../shared/store/Store');

describe('Dashboard', () => {
  beforeEach(() => {
    //Arrange
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the CardClient component', () => {
    screen.debug();
    const img = screen.getByRole('img');
    const h5Email = screen.getByText(/email/i);
    const h5Balance = screen.getByText(/balance/i);
    const button = screen.getByRole('button');
    expect(img).toBeDefined();
    expect(h5Email).toBeDefined();
    expect(h5Balance).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should render the FeaturesWallet component', async () => {
    const ulList = screen.getByRole('tablist');
    const liElements = await screen.findAllByRole('presentation');
    const aElements = await screen.findAllByRole('tab');
    expect(ulList).toBeDefined();
    expect(ulList).toHaveProperty('id', 'tabFeatures');
    expect(liElements).toBeDefined();
    expect(liElements).toHaveLength(2);
    expect(aElements).toBeDefined();
    expect(aElements).toHaveLength(2);
  });
});
