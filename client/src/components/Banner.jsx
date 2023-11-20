import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  return (
    <Flex
      h="70px"
      background="#f0fff0"
      align="center"
      gap="50px"
      justify="center"
      fontWeight="bold"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m">BMW M Line-Up</Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m">History</Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m">Engineering</Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m">Technology</Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m">Design</Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m">Faqs</Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
    </Flex>
  );
};

export default Banner;
