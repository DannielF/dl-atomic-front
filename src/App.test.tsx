import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders auth0 img loading', async () => {
    //Arrange
    render(<App />);
    //Act
    const img = await screen.findByRole('img');
    //Assert
    expect(img).toHaveProperty('alt', 'Loading...');
    expect(img).toHaveProperty(
      'src',
      'https://cdn.auth0.com/blog/hello-auth0/loader.svg'
    );
  });
});
