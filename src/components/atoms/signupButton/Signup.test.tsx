import { render } from '@testing-library/react';
import { SignupButton } from './SignupButton';

describe('SignUp button', () => {
  it('should render', () => {
    //Arrange
    const { getByRole } = render(<SignupButton />);
    //Act
    const button = getByRole('button');
    //Assert
    expect(button).toBeDefined();
  });

  it('should render with text', () => {
    //Arrange
    const { getByRole } = render(<SignupButton />);
    //Act
    const button = getByRole('button');
    //Assert
    expect(button).toHaveProperty('textContent', 'Sign Up');
  });
});
