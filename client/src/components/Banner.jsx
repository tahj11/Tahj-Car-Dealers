import React from "react";
import { Box, Text, Flex, useMediaQuery, Center } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      // display="flex"
      h="70px"
      background="#f0fff0"
      alignItems="center"
      gap="50px"
      justify="center"
      fontWeight="bold"
      overflowX={isMobile && "auto"}
      overflowY={isMobile && "hidden"}
    >
      <Center
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        gap="10px"
        // bg="gray"
      >
        <Text fontSize="m" textAlign="center">
          BMW M Line-Up
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Center>
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
