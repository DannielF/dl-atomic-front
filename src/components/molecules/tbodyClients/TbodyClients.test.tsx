import { render, screen } from '@testing-library/react';
import { TbodyClients } from './TbodyClients';
import { Client } from '../../../domain/entities/Client';

const props = {
  clients: [
    {
      clientId: '1',
      email: 'a',
      balance: 1
    }
  ] as Client[],
  wallet: {
    clientId: '2',
    email: 'b',
    balance: 2
  } as Client
};

describe('TbodyClients', () => {
  beforeEach(() => {
    //Arrange
    render(
      <table>
        <TbodyClients props={props} />
      </table>
    );
  });

  it('should render tbody', () => {
    const tbody = screen.getByRole('tbody');
    expect(tbody).toBeDefined();
    expect(tbody).toHaveProperty('className', 'table-group-divider');
  });

  it('should render tr', () => {
    const tr = screen.getByRole('row');
    screen.debug();
    expect(tr).toBeDefined();
  });

  it('should render td', () => {
    const td = screen.getAllByRole('cell');
    expect(td).toBeDefined();
  });

  it('should render button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(button).toHaveProperty('className', 'btn btn-success');
    expect(button).toHaveProperty('textContent', 'Transfer');
  });
});
