import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  IconButton,
  useDisclosure,
  Collapse,
  HStack,
} from "@chakra-ui/react";
import {
  FaChevronUp,
  FaChevronDown,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const MobileFooter = () => {
  const { isOpen: isOpenLinks1, onToggle: onToggleLinks1 } = useDisclosure();
  const { isOpen: isOpenLinks2, onToggle: onToggleLinks2 } = useDisclosure();
  const { isOpen: isOpenLinks3, onToggle: onToggleLinks3 } = useDisclosure();
  const { isOpen: isOpenLinks4, onToggle: onToggleLinks4 } = useDisclosure();

  return (
    <Box as="footer" bg="#F8F8F8" color="black" p={4}>
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        mt="30px"
      >
        <VStack spacing={4} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            TAHJ.
          </Text>
        </VStack>
        <Flex justifyContent="space-between" w="90%">
          <Text
            mt="auto"
            mb="auto"
            fontWeight="semibold"
            fontSize="17px"
            color="	#282828"
          >
            TAHJ Services
          </Text>
          <IconButton
            icon={isOpenLinks1 ? <FaChevronUp /> : <FaChevronDown />}
            onClick={onToggleLinks1}
            bg="transparent"
          />
        </Flex>
        <Collapse in={isOpenLinks1} animateOpacity>
          <VStack
            spacing="0.5px"
            bg="transparent"
            p={2}
            // border="1px solid #ddd"
            borderRadius="md"
            mt={4}
            textAlign="left"
          >
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Services</Text>
            <Text>Cars</Text>
          </VStack>
        </Collapse>

        <Flex justifyContent="space-between" w="90%">
          <Text
            mt="auto"
            mb="auto"
            fontWeight="semibold"
            fontSize="17px"
            color="	#282828"
          >
            PartnerShips
          </Text>
          <IconButton
            icon={isOpenLinks2 ? <FaChevronUp /> : <FaChevronDown />}
            onClick={onToggleLinks2}
            bg="transparent"
          />
        </Flex>
        <Collapse in={isOpenLinks2} animateOpacity>
          <VStack
            spacing="0.5px"
            bg="transparent"
            p={2}
            // border="1px solid #ddd"
            borderRadius="md"
            mt={4}
            textAlign="center"
          >
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Services</Text>
            <Text>Cars</Text>
          </VStack>
        </Collapse>

        <Flex justifyContent="space-between" w="90%">
          <Text
            mt="auto"
            mb="auto"
            fontWeight="semibold"
            fontSize="17px"
            color="	#282828"
          >
            Shopping Tools
          </Text>
          <IconButton
            icon={isOpenLinks3 ? <FaChevronUp /> : <FaChevronDown />}
            onClick={onToggleLinks3}
            bg="transparent"
          />
        </Flex>
        <Collapse in={isOpenLinks3} animateOpacity>
          <VStack
            spacing="0.5px"
            bg="transparent"
            p={2}
            // border="1px solid #ddd"
            borderRadius="md"
            mt={4}
            textAlign="center"
          >
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Services</Text>
            <Text>Cars</Text>
          </VStack>
        </Collapse>
      </Flex>
      <HStack mt="20px" ml="20px" justifyContent="left">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </HStack>
      <Text mt="40px" fontSize="10px">
        &copy; 2023 All rights reserved
      </Text>
    </Box>
  );
};

export default MobileFooter;
