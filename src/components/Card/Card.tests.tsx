import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders child content', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });
});
