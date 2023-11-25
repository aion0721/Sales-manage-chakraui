import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import LabeledDropdown from "../molecules/LabeledDropdown";
import LabeledInput from "../molecules/LabeledInput";

const SalesManagementForm: React.FC = () => {
  const [costPrice, setCostPrice] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [grossMaqrgin, setGrossMargin] = useState<number>(0);
  const [marginPercentage, setMarginPercentage] = useState<number>(0);
  const [shop, setShop] = useState("");

  const options = [
    { value: "aaa", label: "option1" },
    { value: "bbb", label: "option2" },
    { value: "ccc", label: "option3" },
  ];
  return (
    <Box as="form">
      <LabeledDropdown
        label="shop"
        options={options}
        value={shop}
        onChange={(e) => setShop(e.target.value)}
      />
      <LabeledInput
        label="cost"
        type="number"
        value={costPrice}
        onChange={(e) => setCostPrice(e.target.valueAsNumber)}
      />
      <LabeledInput
        label="price"
        type="number"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.valueAsNumber)}
      />
      <Box>Gross Margin: {grossMaqrgin}</Box>
      <Box>Margin Percentage: {marginPercentage}%</Box>
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </Box>
  );
};

export default SalesManagementForm;
