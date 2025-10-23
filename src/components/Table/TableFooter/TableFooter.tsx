import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot`
  background-color: #fafafa;
  font-weight: 500;
`;

const TableFooter = ({ children }: TableFooterProps) => (
  <StyledFooter>{children}</StyledFooter>
);

export default TableFooter;
