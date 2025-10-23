import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('renders table cell text', () => {
  render(<table><tbody><tr><TableCell>Cell Text</TableCell></tr></tbody></table>);
  expect(screen.getByText('Cell Text')).toBeInTheDocument();
});
