import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders table row', () => {
  render(<table><tbody><TableRow><td>Row Content</td></TableRow></tbody></table>);
  expect(screen.getByText('Row Content')).toBeInTheDocument();
});
