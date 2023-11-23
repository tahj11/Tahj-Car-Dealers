import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box as="footer" bg="#F8F8F8" color="black" p={4}>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        mt="30px"
      >
        <VStack spacing={4} textAlign="left">
          <Text fontSize="lg" fontWeight="bold">
            TAHJ.
          </Text>
        </VStack>

        {/* Navigation links for larger screens */}
        <VStack spacing={2}>
          <Text as="h5" fontSize="17px">
            Links 1
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
        <VStack spacing={2}>
          <Text as="h5" fontSize="17px">
            Links 2
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
        <VStack spacing={2}>
          <Text as="h5" fontSize="17px">
            Links 3
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
      </Flex>
      <Text>&copy; 2023 All rights reserved</Text>
    </Box>
  );
};

export default Footer;
