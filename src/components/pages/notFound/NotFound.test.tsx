import { cleanup, render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';
import { MemoryRouter } from 'react-router-dom';

describe('NotFound', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NotFound />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the figure', () => {
    const figure = screen.getByRole('figure');
    expect(figure).toBeDefined();
    const img = screen.getByRole('img');
    expect(img).toBeDefined();
    expect(img).toHaveProperty('alt', 'not-found');
  });
});
