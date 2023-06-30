import { it, vi } from 'vitest';
import { Client } from '../../../domain/entities/Client';
import { FormTransfer } from './FormTransfer';
import { cleanup, render, screen } from '../../../shared/test-utils/test-utils';

const data = {
  props: {
    userWallet: {} as Client,
    client: {} as Client,
    setState: () => []
  }
};

describe('FormTransfer', () => {
  beforeEach(() => {
    render(<FormTransfer {...data} />);
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should render the FormTransfer component', () => {
    expect(true).toBe(true);
  });

  it('should display the label', () => {
    const label = screen.getByText('How much do you want to transfer?');
    expect(label).toBeDefined();
    expect(label).toHaveProperty('htmlFor', 'basic-url');
  });

  it('should display the span quantity', () => {
    const span = screen.getByText('Quantity');
    expect(span).toBeDefined();
    expect(span).toHaveProperty('className', 'input-group-text');
  });

  it('should display the input', () => {
    const input = screen.getByRole('spinbutton');
    expect(input).toBeDefined();
    expect(input).toHaveProperty('type', 'number');
  });

  it('should display the div example value', () => {
    const div = screen.getByText('Example value: $100');
    expect(div).toBeDefined();
    expect(div).toHaveProperty('className', 'form-text');
  });

  it('should display the button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(button).toHaveProperty('type', 'submit');
  });
});
