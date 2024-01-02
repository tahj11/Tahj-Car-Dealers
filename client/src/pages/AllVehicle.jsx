import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CarFilter from "../components/CarFilter";
import Vehicles from "../components/Vehicles";

const AllVehicle = () => {
  return (
    <Box>
      <Navbar />
      <Box bg="" height="100vh" ml="5rem" mr="5rem">
        <Flex gap="20px" justifyContent="center">
          <CarFilter />
          <Vehicles />
        </Flex>
      </Box>
    </Box>
  );
};

export default AllVehicle;
