import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<TableCellProps>`
  padding: 10px;
  text-align: ${({ align }) => align || 'left'};
  border-bottom: 1px solid #ddd;
`;

const TableCell = ({ children, ...props }: TableCellProps) => (
  <StyledCell {...props}>{children}</StyledCell>
);

export default TableCell;
