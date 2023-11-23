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
  const { isOpen, onToggle } = useDisclosure();
  const DropdownContent = ({ links }) => (
    <VStack
      spacing={2}
      mt={{ base: 2, md: 0 }}
      bg="#FFF5EE"
      p={2}
      border="1px solid #ddd"
      borderRadius="md"
      position="absolute"
      top="60px"
      left="0"
      right="0"
      zIndex="1"
      display={{ base: isOpen ? "flex" : "none", md: "none" }}
    >
      {links.map((link, index) => (
        <Link key={index} href="#">
          {link}
        </Link>
      ))}
    </VStack>
  );

  return (
    <Box as="footer" bg="#FFF5EE" color="black" p={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        mt="30px"
      >
        <VStack spacing={4} textAlign={{ base: "center", md: "left" }}>
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
        <VStack spacing={2} mt={{ base: "20px", md: 0 }}>
          <Text as="h5" fontSize="17px">
            Links 2
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
        <VStack spacing={2} mt={{ base: "20px", md: 0 }}>
          <Text as="h5" fontSize="17px">
            Links 3
          </Text>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </VStack>
        <VStack
          spacing={2}
          mt={{ base: "20px", md: 0 }}
          mb={{ base: "30px", md: 0 }}
        >
          <Text as="h5" fontSize="17px">
            Links 4
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
