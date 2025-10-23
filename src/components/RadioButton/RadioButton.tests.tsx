import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  it('renders label text', () => {
    render(<RadioButton label="Male" />);
    expect(screen.getByText('Male')).toBeInTheDocument();
  });
});
