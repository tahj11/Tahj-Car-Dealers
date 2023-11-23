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
      mx={isMobile ? "0" : "20"}
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
          top="80%"
          left="50%"
          color="white"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontFamily="Rajdhani', sans-serif"
        >
          <Text
            // position="absolute"
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
          >
            The 2024 BMW 8 Series
          </Text>
          <Text fontWeight="400" fontSize="25px" textAlign="center">
            POWER AND PRESTIGE
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
            textDecoration="underline"
            lineHeight="5px"
          >
            Learn More
          </Text>
        </Box>
      </Box>
      <Box position="relative">
        <Image
          src={BMW_x6}
          alt="BMW x6"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="80%"
          left="50%"
          color="white"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontFamily="Rajdhani', sans-serif"
        >
          <Text
            // position="absolute"
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
          >
            The 2024 BMW X6
          </Text>
          <Text fontWeight="400" fontSize="25px" textAlign="center">
            POWER AND LUXURIOUS
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
            textDecoration="underline"
            lineHeight="5px"
          >
            Learn More
          </Text>
        </Box>
      </Box>
      <Box position="relative">
        <Image
          src={BMW_ix}
          alt="BMW IX"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="80%"
          left="50%"
          color="white"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontFamily="Rajdhani', sans-serif"
        >
          <Text
            // position="absolute"
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
          >
            The 2024 BMW IX
          </Text>
          <Text fontWeight="400" fontSize="25px" textAlign="center">
            AN ELECTRIC FUTURE
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
            textDecoration="underline"
            lineHeight="5px"
          >
            Learn More
          </Text>
        </Box>
      </Box>
      <Box position="relative">
        <Image
          src={BMW_x5}
          alt="BMW X5"
          height="350px"
          width={isMobile ? "100%" : "650px"}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="80%"
          left="50%"
          color="white"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontFamily="Rajdhani', sans-serif"
        >
          <Text
            // position="absolute"
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
          >
            The 2024 BMW X5
          </Text>
          <Text fontWeight="400" fontSize="25px" textAlign="center">
            NEXT LEVEL LUXURY
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="15px"
            margin="0"
            textDecoration="underline"
            lineHeight="5px"
          >
            Learn More
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default ShowCase;
