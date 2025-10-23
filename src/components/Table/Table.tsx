import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  border: ${({ bordered }) => (bordered ? '1px solid #ddd' : 'none')};
  tr:nth-child(even) {
    background-color: ${({ striped }) => (striped ? '#f9f9f9' : 'transparent')};
  }
`;

const Table = ({ children, ...props }: TableProps) => (
  <StyledTable {...props}>{children}</StyledTable>
);

export default Table;
