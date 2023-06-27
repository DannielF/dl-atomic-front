import { render } from '@testing-library/react';
import { CardBody } from './CardBody';

const props = {
  title: 'title',
  text: 'text'
};

describe('CardBody', () => {
  it('should render title', () => {
    //Arrange
    const { getByRole } = render(<CardBody {...props} />);
    //Act
    const h5 = getByRole('heading');
    //Assert
    expect(h5).toBeDefined();
    expect(h5).toHaveProperty('className', 'card-title');
  });

  it('should render text', () => {
    //Arrange
    const { getByText } = render(<CardBody {...props} />);
    //Act
    const p = getByText(props.text);
    //Assert
    expect(p).toBeDefined();
    expect(p).toHaveProperty('className', 'card-text');
  });
});
