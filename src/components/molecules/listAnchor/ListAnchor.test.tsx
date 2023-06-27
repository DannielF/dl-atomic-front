import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { it } from 'vitest';
import { ListAnchor } from './ListAnchor';

const props = {
  linkName: 'linkName',
  linkRoute: '/linkRoute'
};

describe('ListAnchor', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ListAnchor {...props} />
      </MemoryRouter>
    );
  });

  it('should render the ListAnchor component', () => {
    const li = screen.getByRole('presentation');
    expect(li).toBeDefined();
  });

  it('should render the ListAnchor component with the link', () => {
    const link = screen.getByRole('tab');
    screen.debug();
    expect(link).toBeDefined();
    expect(link).toHaveProperty('id', `${props.linkName}-tab`);
    expect(link).toHaveProperty(
      'className',
      'nav-link btn btn-outline-warning'
    );
  });
});
