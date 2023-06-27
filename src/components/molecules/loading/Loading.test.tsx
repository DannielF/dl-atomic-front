import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';

describe('Loading', () => {
  beforeEach(() => {
    //Arrange
    render(<Loading />);
  });

  it('should render div', () => {
    const div = screen.getByRole('status');
    expect(div).toBeDefined();
  });

  it('should render img', () => {
    //Act
    const img = screen.getByAltText('Loading...');
    //Assert
    expect(img).toBeDefined();
    expect(img).toHaveProperty(
      'src',
      'https://cdn.auth0.com/blog/hello-auth0/loader.svg'
    );
  });
});
