export interface IDropdownProps {
  options: string[];
  onSelect?: (value: string) => void;
  disabled?: boolean;
}
