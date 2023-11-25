import { DateInputProps } from "./DateInput.types";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type="date" value={value} onChange={onChange} />;
    </FormControl>
  );
};
