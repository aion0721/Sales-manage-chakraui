import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
