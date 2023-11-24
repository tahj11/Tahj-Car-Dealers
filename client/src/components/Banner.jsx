import React from "react";
import { Box, Text, Flex, useMediaQuery, Center } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      h="70px"
      background="#f0fff0"
      alignItems="center"
      gap="50px"
      justify="center"
      fontWeight="bold"
      overflowX={isMobile && "auto"}
      overflowY={isMobile && "hidden"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m" my="auto">
          BMW M Line-Up
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m" my="auto">
          History
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m" my="auto">
          Engineering
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m" my="auto">
          Technology
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m" my="auto">
          Design
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Text fontSize="m" my="auto">
          Faqs
        </Text>
        <FaArrowDown style={{ fontSize: "15px", color: "#3457D5" }} />
      </Box>
    </Flex>
  );
};

export default Banner;
