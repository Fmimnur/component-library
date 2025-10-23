import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<TableRowProps>`
  &:hover {
    background-color: ${({ hoverable }) => (hoverable ? '#f1f1f1' : 'inherit')};
  }
`;

const TableRow = ({ children, ...props }: TableRowProps) => (
  <StyledRow {...props}>{children}</StyledRow>
);

export default TableRow;
