import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  it('renders all options', () => {
    render(<Dropdown options={['A', 'B', 'C']} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('calls onSelect when option is chosen', () => {
    const handleSelect = jest.fn();
    render(<Dropdown options={['X', 'Y']} onSelect={handleSelect} />);
    fireEvent.change(screen.getByDisplayValue('X'), { target: { value: 'Y' } });
    expect(handleSelect).toHaveBeenCalledWith('Y');
  });
});
