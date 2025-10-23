import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders table footer', () => {
  render(<table><TableFooter><tr><td>Footer</td></tr></TableFooter></table>);
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
