import styled from 'styled-components';
import { IDropdownProps } from './Dropdown.types';

const Select = styled.select<IDropdownProps>`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown = ({ options, onSelect, ...rest }: IDropdownProps) => (
  <Select {...rest} onChange={(e) => onSelect?.(e.target.value)}>
    {options.map((opt, i) => (
      <option key={i} value={opt}>{opt}</option>
    ))}
  </Select>
);

export default Dropdown;
