import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowDown } from "react-icons/fa6";
import BMW_X5_2024 from "../assets/bmw-x5-2024.jpg";
import SVG_SILVER from "../assets/svg-silver.avif";

const Build = () => {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Box flex="2">
          <Text as="h1" fontWeight="300" mt="100px" ml="50px" fontSize="50px">
            BUILD THE
            <br /> MACHINE OF YOUR DREAMS.
          </Text>
          <Button
            bg="#1F51FF"
            _hover={{ bg: "#2980b9" }}
            color="white"
            mt="40px"
            ml="50px"
            borderRadius="2px"
            p={8}
            gap="10px"
          >
            Select a Motor-Vehicle
            <FaArrowDown style={{ fontSize: "13px" }} />
          </Button>
        </Box>
        <Box flex="3" position="relative">
          <Image
            src={BMW_X5_2024}
            alt="X5"
            w="100%"
            h="25rem"
            objectFit="cover"
            position="relative"
          />
          <Button
            position="absolute"
            bottom="10px"
            right="10px"
            bg="#1F51FF"
            _hover={{ bg: "#2980b9" }}
            color="white"
            borderRadius="2px"
            width="150px"
          >
            Build This Car
          </Button>
        </Box>
      </Flex>
      <hr
        style={{ marginTop: "40px", color: "		#989898", marginBottom: "0px" }}
      />
      <Box bg="	#F0F0F0" h="100vh">
        <Flex>
          <Box flex="3">
            <Text as="h4" fontWeight="400" mt="5rem" ml="20rem">
              Lamborghini SVG
            </Text>
          </Box>
          <Box flex="4">
            <Image
              src={SVG_SILVER}
              width="100%"
              height="25rem"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Build;
