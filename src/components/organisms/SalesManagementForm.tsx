import React, { useState, useEffect } from "react";
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

  const calculateGrossMargin = (cost: number, price: number) => {
    return price - cost;
  };

  useEffect(() => {
    const margin = calculateGrossMargin(costPrice, sellingPrice);
    setGrossMargin(margin);
  }, [costPrice, sellingPrice]);
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
        onChange={(e) => setCostPrice(parseFloat(e.target.value) || 0)}
      />
      <LabeledInput
        label="price"
        type="number"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(parseFloat(e.target.value) || 0)}
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
