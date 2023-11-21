import React from "react";
import { Box, Text } from "@chakra-ui/react";
import BMW_M1 from "../assets/1980-m1.jpg";

const History = () => {
  return (
    <Box position="relative">
      <Box
        backgroundImage={`url(${BMW_M1})`}
        // backgroundSize="cover"
        backgroundPosition="center"
        // backgroundRepeat="no-repeat" // Prevent image repeat
        height="70vh" // Set the desired height
        width="100%"
      >
        {/* Text overlay */}
        <Text
          position="absolute"
          top="80%"
          left="20%"
          transform="translate(-50%, -50%)"
          color="#28282B"
          textAlign="center"
          fontSize="24px"
          fontWeight="semibold"
        >
          HISTORY
        </Text>
        <Text
          position="absolute"
          top="85%"
          left="20%"
          transform="translate(-50%, -50%)"
          color="#28282B"
          textAlign="center"
          fontSize="24px"
          fontWeight="semibold"
        >
          FIVE DECADES OF POWER
        </Text>
      </Box>
    </Box>
  );
};

export default History;
