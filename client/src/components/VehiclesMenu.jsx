// VehiclesMenu.js
import React from "react";
import { VStack, Button, Box, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SVG_WHITE from "../assets/svg-white-background.jpg";
import HURACAN_WHITE from "../assets/huracan-white-background.jpg";
import HURACAN_BLU from "../assets/Huracan-Tecnica-Blu.webp";
import BMW_X6_GREY from "../assets/x6-m-back.png";
import BMW_X5_BLUE from "../assets/bmw-x5m-blue-white.png";
import BMW_IX_NONE from "../assets/ix-no-back.png";
import CAYENNE_NONE from "../assets/cayenne-back.jpg";
import PANAMARA_NONE from "../assets/2023-Porsche-Panamera-4S.png";
import GT3_NONE from "../assets/911-gt3.webp";

const VehiclesMenu = () => {
  const navigate = useNavigate();
  return (
    <Box bg="">
      <hr style={{ marginTop: "0" }} />
      <HStack mt="">
        {/* Your menu items go here */}
        <Text as="h5" fontWeight="500" fontSize="15px" ml="20px">
          LAMBORGHINI
        </Text>
      </HStack>
      <hr />
      <HStack mt="" cursor="pointer" wrap="wrap">
        <VStack onClick={() => navigate("/aventador")}>
          <Image src={SVG_WHITE} alt="svg" height="100px" objectFit="cover" />
          <Text fontWeight="500" fontSize="12px">
            SVG
          </Text>
        </VStack>
        <VStack onClick={() => navigate("/huracan")}>
          <Image
            src={HURACAN_WHITE}
            alt="svg"
            height="100px"
            width="100px"
            objectFit="contain"
          />
          <Text fontWeight="500" fontSize="12px">
            HURACAN TECHNICA
          </Text>
        </VStack>
        <VStack onClick={() => navigate("/huracan")}>
          <Image
            src={HURACAN_BLU}
            alt="svg"
            height="100px"
            width="100px"
            objectFit="contain"
          />
          <Text fontWeight="500" fontSize="12px">
            HURACAN EVO
          </Text>
        </VStack>
      </HStack>
      <hr />
      <HStack mt="20px" ml="25px">
        {/* Your menu items go here */}
        <Text as="h5" fontWeight="500">
          BMW
        </Text>
      </HStack>
      <HStack ml="30px" mt="20px" spacing={20} cursor="pointer">
        <VStack onClick={() => navigate("/X5")}>
          <Image
            src={BMW_X5_BLUE}
            alt="svg"
            height="100px"
            // width="100px"
            objectFit="cover"
          />
          <Text fontWeight="500">X5 M</Text>
        </VStack>
        <VStack onClick={() => navigate("/X5")}>
          <Image src={BMW_X6_GREY} alt="svg" height="100px" objectFit="cover" />
          <Text fontWeight="500">X6 M</Text>
        </VStack>
        <VStack onClick={() => navigate("/X5")}>
          <Image src={BMW_IX_NONE} alt="svg" height="100px" objectFit="cover" />
          <Text fontWeight="500">IX</Text>
        </VStack>
      </HStack>
      <HStack mt="20px" ml="25px">
        {/* Your menu items go here */}
        <Text as="h5" fontWeight="500">
          PORSCHE
        </Text>
      </HStack>
      <HStack ml="30px" mt="20px" spacing={20} cursor="pointer">
        <VStack>
          <Image
            src={CAYENNE_NONE}
            alt="svg"
            height="100px"
            objectFit="cover"
          />
          <Text fontWeight="500">cayenne</Text>
        </VStack>
        <VStack>
          <Image
            src={PANAMARA_NONE}
            alt="svg"
            height="100px"
            objectFit="cover"
          />
          <Text fontWeight="500">PANAMARA 4S</Text>
        </VStack>
        <VStack>
          <Image src={GT3_NONE} alt="svg" height="100px" objectFit="cover" />
          <Text fontWeight="500">GT3 S</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default VehiclesMenu;
