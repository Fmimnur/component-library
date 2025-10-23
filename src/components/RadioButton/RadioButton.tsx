import styled from 'styled-components';
import { IRadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Input = styled.input`
  accent-color: #007bff;
`;

const RadioButton = ({ label, ...props }: IRadioButtonProps) => (
  <Wrapper>
    <Input type="radio" {...props} />
    {label}
  </Wrapper>
);

export default RadioButton;
