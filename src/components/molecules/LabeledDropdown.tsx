import Dropdown from "../atoms/Dropdown";
import { DropdownProps } from "../atoms/Dropdown.types";

const LabeledDropdown: React.FC<DropdownProps> = (props) => {
  return <Dropdown {...props} />;
};

export default LabeledDropdown;
