import React from "react";
import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import BMW_Logo from "../assets/BMW-logo.mp4";
import Afla from "../assets/Alfa-Romeo-intro.mp4";

const HeroSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box height="90vh" width="100%" overflow="hidden" pos="relative">
      <video
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src={Afla} type="video/mp4" />
      </video>
      <Box
        pos="absolute"
        color="white"
        top={isMobile ? "10px" : "10%"}
        left={isMobile ? "6" : "10"}
        fontSize={isMobile ? "50px" : "70px"}
        fontWeight=""
        letterSpacing="1px"
        lineHeight={isMobile ? "50px" : "80px"}
      >
        <h1>
          Alfa
          <br /> Romeo V12
        </h1>
        <Text
          fontSize={isMobile ? "18px" : "25px"}
          lineHeight="30px"
          mt={isMobile ? "3rem" : "5rem"}
          mb={isMobile ? "2rem" : ""}
        >
          Packed with power and made to maneuver, Alpha Romeo <br />
          excels on the track and in the street. And after four decades of
          thrills,
          <br /> it’s still pushing the limits. Grip the wheel of any of our M
          vehicles and
          <br /> elevate your adrenaline rushes to a higher level.
        </Text>
        <Button
          colorScheme="blue"
          borderRadius="2px"
          padding="30px"
          variant="solid"
          mt={isMobile ? "1.5rem" : "8rem"}
        >
          Explore Models
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
