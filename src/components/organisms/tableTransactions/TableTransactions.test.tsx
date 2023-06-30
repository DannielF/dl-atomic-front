import { cleanup, render, screen } from '../../../shared/test-utils/test-utils';
import { describe, it } from 'vitest';
import { TableTransactions } from './TableTransactions';

describe('TableTransactions', () => {
  beforeEach(() => {
    // Arrange
    render(<TableTransactions />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the table', () => {
    const table = screen.getByRole('table');
    screen.debug();
    expect(table).toBeInTheDocument();
  });

  it('should render the table head', () => {
    const tableHead = screen.getByRole('rowgroup');
    expect(tableHead).toBeInTheDocument();
  });

  it('should render the table head type', () => {
    const tableHeadType = screen.getByRole('columnheader', { name: /type/i });
    expect(tableHeadType).toBeInTheDocument();
  });

  it('should render the table head to', () => {
    const tableHeadTo = screen.getByRole('columnheader', { name: /to/i });
    expect(tableHeadTo).toBeInTheDocument();
  });

  it('should render the table head quantity', () => {
    const tableHeadQuantity = screen.getByRole('columnheader', {
      name: /quantity/i
    });
    expect(tableHeadQuantity).toBeInTheDocument();
  });

  it('should render the table head date', () => {
    const tableHeadDate = screen.getByRole('columnheader', { name: /date/i });
    expect(tableHeadDate).toBeInTheDocument();
  });

  it('should render the table body', () => {
    const tableBody = screen.getByRole('tbody');
    expect(tableBody).toBeInTheDocument();
    expect(tableBody).toHaveClass('table-group-divider');
  });
});
