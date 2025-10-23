import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label text', () => {
  render(<Label text="Email" />);
  expect(screen.getByText('Email')).toBeInTheDocument();
});
