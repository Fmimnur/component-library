import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders table header', () => {
  render(<table><TableHeader><tr><th>Header</th></tr></TableHeader></table>);
  expect(screen.getByText('Header')).toBeInTheDocument();
});
