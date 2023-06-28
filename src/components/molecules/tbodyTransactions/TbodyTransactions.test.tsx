import { render, screen } from '@testing-library/react';
import { TbodyTransactions } from './TbodyTransactions';
import {
  Transaction,
  TransactionType
} from '../../../domain/entities/Transaction';

const props = [
  {
    transactionId: '1',
    type: TransactionType.TRANSFER,
    from: 'a',
    date: 'a',
    to: 'b',
    quantity: 1
  }
] as Transaction[];

describe('TbodyTransactions', () => {
  beforeEach(() => {
    //Arrange
    render(
      <table>
        <TbodyTransactions props={props} />
      </table>
    );
  });

  it('should render tbody', () => {
    //Act
    const tbody = screen.getByRole('tbody');
    //Assert
    expect(tbody).toBeDefined();
    expect(tbody).toHaveProperty('className', 'table-group-divider');
  });

  it('should render tr', () => {
    const tr = screen.getByRole('row');
    expect(tr).toBeDefined();
  });

  it('should render td', () => {
    const td = screen.getAllByRole('cell');
    expect(td).toBeDefined();
  });
});
