import styled from 'styled-components';
import { ILabelProps } from './Label.types';

const StyledLabel = styled.label<ILabelProps>`
  color: ${({ color }) => color || '#333'};
  font-size: 0.95rem;
  margin-bottom: 4px;
  display: inline-block;
`;

const Label = ({ text, ...rest }: ILabelProps) => (
  <StyledLabel {...rest}>{text}</StyledLabel>
);

export default Label;
