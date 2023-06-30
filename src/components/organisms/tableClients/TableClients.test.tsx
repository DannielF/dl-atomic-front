import { cleanup, render, screen } from '../../../shared/test-utils/test-utils';
import { afterEach, describe } from 'vitest';
import { TableClients } from './TableClients';
import { MemoryRouter } from 'react-router-dom';

describe('TableClients', () => {
  beforeEach(() => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/']}>
        <TableClients />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the table', () => {
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('should render the table head', () => {
    const tableHead = screen.getByRole('rowgroup');
    expect(tableHead).toBeInTheDocument();
  });

  it('should render the table body', () => {
    const tableBody = screen.getByRole('tbody');
    expect(tableBody).toBeInTheDocument();
  });
});
