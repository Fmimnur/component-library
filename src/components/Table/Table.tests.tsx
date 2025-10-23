import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  it('renders all headers', () => {
    render(<Table headers={['ID', 'Name']} data={[[1, 'John']]} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('renders all data cells', () => {
    render(<Table headers={['Name']} data={[['Alice'], ['Bob']]} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
