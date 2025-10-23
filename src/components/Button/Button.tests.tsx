import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Button from './Button';

describe('Button Component', () => {
  it('should display the provided text', () => {
    render(<Button text="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should have reduced opacity when disabled', () => {
    const { container } = render(<Button text="Sample" isDisabled />);
    expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
  });
});
