import InputField from "../atoms/InputField";
import { InputFieldProps } from "../atoms/InputField.types";

const LabeledInput: React.FC<InputFieldProps> = (props) => {
  return <InputField {...props} />;
};

export default LabeledInput;
