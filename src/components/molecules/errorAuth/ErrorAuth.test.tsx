import { render, screen } from '@testing-library/react';
import { ErrorAuth } from './ErrorAuth';

const message = 'test';

describe('ErrorAuth', () => {
  it('should render the ErrorAuth component', () => {
    render(<ErrorAuth message={message} />);
    expect(message).toBe('test');
  });

  it('should display the message', () => {
    render(<ErrorAuth message={message} />);
    expect(screen.getByRole('alert')).toBeDefined();
  });
});
