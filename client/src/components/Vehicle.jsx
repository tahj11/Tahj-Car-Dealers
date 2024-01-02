import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Vehicle = ({
  make,
  model,
  year,
  description,
  mileage,
  picture,
  price,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      m="4"
      p="4"
      boxShadow="sm"
    >
      <Image src={picture} alt={`${make} ${model}`} mb="4" />

      <Text fontSize="xl" fontWeight="bold">
        {`${year} ${make} ${model}`}
      </Text>

      <Text color="gray.700" fontSize="m" mb="2" fontWeight="semibold">
        {`Price: $ ${price}`}
      </Text>

      <Text color="gray.700">{description}</Text>
    </Box>
  );
};

export default Vehicle;
