import styled from 'styled-components';
import { IButtonOptions } from './Button.types';

const CustomButton = styled.button<IButtonOptions>`
  background-color: ${({ isDisabled, bgColor }) =>
    isDisabled ? '#bcbcbc' : bgColor ?? '#007bff'};
  color: #fff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 6px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
  transition: all 0.25s ease-in-out;
`;

const Button = ({ text, ...rest }: IButtonOptions) => {
  return <CustomButton {...rest}>{text}</CustomButton>;
};

export default Button;
