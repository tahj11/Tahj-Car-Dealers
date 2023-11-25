import React from "react";
import { Box, Flex, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="#F8F8F8" color="black" p={4} mb="20px">
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
            TAHJ Services
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
        <VStack spacing={2}>
          <Text as="h5" fontSize="17px">
            Partnerships
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
        <VStack spacing={2}>
          <Text as="h5" fontSize="17px">
            Shopping Tools
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
      </Flex>
      <Text mt="5rem">&copy; 2023 All rights reserved</Text>
    </Box>
  );
};

export default Footer;
