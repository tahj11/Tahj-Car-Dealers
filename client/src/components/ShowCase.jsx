import React from "react";
import { SimpleGrid, Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import BMW_8 from "../assets/bmw-8-series.jpg";
import BMW_x6 from "../assets/bmw-x6-m.jpg";
import BMW_ix from "../assets/bmw-ix-front.jpg";
import BMW_x5 from "../assets/bmw-x5-black.jpg";

const ShowCase = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <SimpleGrid
      columns={isMobile ? 1 : 2}
      spacing={10}
      mx={isMobile ? "5" : "20"}
      //   my="10"
      my={isMobile ? "60px" : "80px"}
      justifyContent="center"
      alignItems="center"
    >
      <Box position="relative">
        <Image
          src={BMW_8}
          alt="BMW 8 Series"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="12rem"
          left="40%"
          color="white"
          display="flex"
          flexDirection="column"
          gap="0px"
        >
          <Text
            // position="absolute"
            fontWeight="bold"
            fontSize="15px"
            margin="0"
          >
            BMW 8 SERIES
          </Text>
          <Text fontWeight="semibold" fontSize="25px" textAlign="center">
            BMW 8 SERIES
          </Text>
        </Box>
      </Box>
      <Box>
        <Image
          src={BMW_x6}
          alt="BMW x6"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          //   objectFit="cover"
        />
      </Box>
      <Box>
        <Image
          src={BMW_ix}
          alt="BMW IX"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          objectFit="cover"
        />
      </Box>
      <Box>
        <Image
          src={BMW_x5}
          alt="BMW X5"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          objectFit="cover"
        />
      </Box>
    </SimpleGrid>
  );
};

export default ShowCase;
