import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { FaArrowDown } from "react-icons/fa6";
import BMW_X5_2024 from "../assets/bmw-x5-2024.jpg";
import SVG_SILVER from "../assets/svg-silver.avif";
import CAYENNE_METALLIC from "../assets/metallic-cayenne.webp";
import BMW_X6_BLUE from "../assets/blue-x6-m.jpg";
import BMW_X5_BLUE from "../assets/2024-bmw-x5-desert.jpg";
import SF90_RED from "../assets/sf90-stradale-red.jpg";
import BENZ_CLA_BLUE from "../assets/2024-Mercedes-Benz-CLA-2.webp";
import BMW_X5_GREEN from "../assets/2024-x5-m-green.webp";

const Build = () => {
  return (
    <Box>
      <Navbar />
      <Flex flexDirection={{ base: "column", md: "row" }} gap={{ base: "0px" }}>
        <Box flex="2" bg={{ base: "#F0F0F0" }}>
          <Text
            as="h1"
            fontWeight="300"
            mt={{ base: "50px", md: "100px" }}
            ml="50px"
            fontSize={{ base: "40px", md: "50px" }}
          >
            BUILD THE
            <br /> MACHINE OF YOUR DREAMS.
          </Text>
          <Button
            bg="#1F51FF"
            _hover={{ bg: "#2980b9" }}
            color="white"
            mt="40px"
            ml="50px"
            mb={{ base: "50px" }}
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
            h="29rem"
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
      <Box bg="	#F0F0F0">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              Lamborghini SVG
            </Text>
            <Text as="p" fontSize="15px">
              The New SVG setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $950,000
              <br /> MSRP as Shown $1,000,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
            >
              Select
            </Button>
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
      <Box bg="">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              Porsche Cayenne
            </Text>
            <Text as="p" fontSize="15px">
              The New Porsche Cayenne setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $80,000
              <br /> MSRP as Shown $85,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
              mb={{ base: "30px" }}
            >
              Select
            </Button>
          </Box>
          <Box flex="4">
            <Image
              src={CAYENNE_METALLIC}
              width="100%"
              height="25rem"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="#F0F0F0">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              BMW X6 M
            </Text>
            <Text as="p" fontSize="15px">
              The New BMW X6 M setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $80,000
              <br /> MSRP as Shown $85,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
            >
              Select
            </Button>
          </Box>
          <Box flex="4">
            <Image
              src={BMW_X6_BLUE}
              width="100%"
              height="25rem"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              Ferrari SF90 Stradale
            </Text>
            <Text as="p" fontSize="15px">
              The Ferrari SF90 Stradale setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $890,000
              <br /> MSRP as Shown $900,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
            >
              Select
            </Button>
          </Box>
          <Box flex="4">
            <Image
              src={SF90_RED}
              width="100%"
              height="25rem"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="#F0F0F0">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              BMW X5
            </Text>
            <Text as="p" fontSize="15px">
              The New BMW X5 setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $80,000
              <br /> MSRP as Shown $85,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
            >
              Select
            </Button>
          </Box>
          <Box flex="4">
            <Image
              src={BMW_X5_BLUE}
              width="100%"
              height="25rem"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              Benz CLA
            </Text>
            <Text as="p" fontSize="15px">
              The New Benz CLA setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $43,000
              <br /> MSRP as Shown $48,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
            >
              Select
            </Button>
          </Box>
          <Box flex="4">
            <Image
              src={BENZ_CLA_BLUE}
              width="100%"
              height="25rem"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="#F0F0F0">
        <Flex flexDir={{ base: "column", md: "row" }} gap={{ base: "30px" }}>
          <Box
            flex="3"
            display="flex"
            flexDir="column"
            alignItems="center"
            mt="5rem"
          >
            <Text as="h4" fontWeight="400">
              BMW X5 M
            </Text>
            <Text as="p" fontSize="15px">
              The New BMW X5 M setting standards for
              <br /> aerodynamics, technology, and luxury.
            </Text>
            <hr style={{ width: "300px", marginTop: "0px" }} />
            <Text align="left" fontSize="15px" marginTop="0px">
              Starting MSRP $80,000
              <br /> MSRP as Shown $85,000
            </Text>
            <Button
              bg="#1F51FF"
              _hover={{ bg: "#2980b9" }}
              color="white"
              mt="40px"
              borderRadius="2px"
              p={8}
              gap="10px"
              width="200px"
            >
              Select
            </Button>
          </Box>
          <Box flex="4">
            <Image
              src={BMW_X5_GREEN}
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
