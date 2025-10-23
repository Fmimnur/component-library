import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders text content', () => {
  render(<Text content="Hello world" />);
  expect(screen.getByText('Hello world')).toBeInTheDocument();
});
