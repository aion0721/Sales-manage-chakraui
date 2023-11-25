import { Box } from "@chakra-ui/react";
import SalesManagementForm from "../organisms/SalesManagementForm";

const SalesManagementPage: React.FC = () => {
  return (
    <Box>
      <Box as="h1">SalesManagementSystem</Box>
      <SalesManagementForm />
    </Box>
  );
};
export default SalesManagementPage;
