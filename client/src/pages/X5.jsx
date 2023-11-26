import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import BMW_X5_WIDE from "../assets/x5-x6.jpg";

const X5 = () => {
  return (
    <Box>
      <Navbar />
      <Box position="relative">
        <Image
          src={BMW_X5_WIDE}
          alt="BMW X5 M 2024"
          objectFit="cover"
          width="100%"
          height="90vh"
          position="relative"
        />
        <Text
          as="h2"
          color="black"
          position="absolute"
          top="40%"
          left="10%"
          fontWeight="400"
          fontSize="50px"
        >
          YOUR SLIEGH JUST <br />
          GOT AN UPGRADE
        </Text>
        <Button
          position="absolute"
          bg="#F5F5DC"
          top="70%"
          left="10%"
          borderRadius="2px"
          p={8}
          fontSize={18}
        >
          Schedule An Appointment
        </Button>
      </Box>
    </Box>
  );
};

export default X5;
