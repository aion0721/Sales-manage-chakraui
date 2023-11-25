import { InputFieldProps } from "./InputField.types";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} value={value} onChange={onChange} />
    </FormControl>
  );
};

export default InputField;
