import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const BmwLineUp = () => {
  return (
    <Box
      h="70vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      mt="70px"
    >
      <Text fontWeight="semibold">BMW M LINE-UP</Text>
      <Text fontSize="50px">THE UNSTOPPABLE M</Text>
      <Flex gap="10px" background="lightblue" w="100%" justifyContent="center">
        <Box>Car</Box>
        <Box>Car</Box>
        <Box>Car</Box>
      </Flex>
    </Box>
  );
};

export default BmwLineUp;
