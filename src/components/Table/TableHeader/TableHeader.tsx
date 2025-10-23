import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledHeader = styled.thead`
  background-color: #efefef;
  font-weight: bold;
`;

const TableHeader = ({ children }: TableHeaderProps) => (
  <StyledHeader>{children}</StyledHeader>
);

export default TableHeader;
