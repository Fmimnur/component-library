import styled from 'styled-components';
import { ITextProps } from './Text.types';

const StyledText = styled.p<ITextProps>`
  color: ${({ color }) => color || '#000'};
  font-size: ${({ size }) => size || '1rem'};
  margin: 0;
`;

const Text = ({ content, ...props }: ITextProps) => (
  <StyledText {...props}>{content}</StyledText>
);

export default Text;
