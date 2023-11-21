import React from "react";
import AlphaRace from "../assets/alpha-racer.avif";
import { Box, Image } from "@chakra-ui/react";

const AlphaRacer = () => {
  return (
    <Box pos="relative">
      <Image src={AlphaRace} alt="Alpharacer" position="absolute" />
    </Box>
  );
};

export default AlphaRacer;
