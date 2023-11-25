import { DateInput } from "../atoms/DateInput";
import { DateInputProps } from "../atoms/DateInput.types";

export const LabeledDateInput: React.FC<DateInputProps> = (props) => {
  return <DateInput {...props} />;
};
