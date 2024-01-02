import { Box, Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const CarFilter = () => {
  return (
    <Box bg="#fff" border="1px solid #E8E8E8" flex="2" height="50vh">
      <Flex direction="column" alignItems="center" mt="40px" mb="10rem">
        <FormControl mb="4" width="70%">
          <FormLabel>Select Make</FormLabel>
          <Select placeholder="Select make">
            {/* Add make options dynamically or hardcode them */}
            <option value="Toyota">Toyota</option>
            <option value="BMW">BMW</option>
            {/* Add more make options as needed */}
          </Select>
        </FormControl>

        <FormControl mb="4" width="70%">
          <FormLabel>Select Model</FormLabel>
          <Select placeholder="Select model">
            {/* Add model options dynamically or hardcode them */}
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            {/* Add more model options as needed */}
          </Select>
        </FormControl>

        <FormControl mb="4" width="70%">
          <FormLabel>Select Year</FormLabel>
          <Select placeholder="Select year">
            {/* Add year options dynamically or hardcode them */}
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Add more year options as needed */}
          </Select>
        </FormControl>

        {/* Add more select options as needed */}
      </Flex>
    </Box>
  );
};

export default CarFilter;
