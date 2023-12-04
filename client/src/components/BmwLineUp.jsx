import { Carousel, Container, Row, Col } from "react-bootstrap";
import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import BMW_M from "../assets/bmw-m-performance.jpg";
import BMW_PER from "../assets/bmw-high-performance.jpg";
import BMW_ELEC from "../assets/bmw-electric.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const BmwLineUp = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  if (!isMobile) {
    return (
      <Box
        // h="70vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="10px"
        mt="70px"
      >
        <Text fontWeight="semibold">BMW M LINE-UP</Text>
        <Text fontSize={isMobile ? "30px" : "50px"}>THE UNSTOPPABLE M</Text>
        <Flex
          gap="10px"
          // background="#faf0e6"
          w="100%"
          h="100%"
          justifyContent="center"
          mt="30px"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image src={BMW_M} height="400px" width="450px" objectFit="cover" />
            <Text fontWeight="semibold" fontSize="20px" mt="10px">
              High Performance
            </Text>
            <Text textAlign="center" mt="12px" fontSize="15px">
              Legendary vehicles fully developed and
              <br /> engineered for performance-obsessed drivers.
            </Text>
            <Button
              color="white"
              background="black"
              borderRadius="2px"
              mt="30px"
              mb="60px"
              width="150px"
              height="50px"
            >
              Explore Models
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src={BMW_ELEC}
              height="400px"
              width="450px"
              objectFit="cover"
            />
            <Text fontWeight="semibold" fontSize="20px" mt="10px">
              Electrified Performance
            </Text>
            <Text textAlign="center" mt="12px" fontSize="15px">
              Electrified visionaries pushing the limits of
              <br /> power and innovation.
            </Text>
            <Button
              color="white"
              background="black"
              borderRadius="2px"
              mt="30px"
              mb="60px"
              width="150px"
              height="50px"
            >
              Explore Models
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src={BMW_PER}
              height="400px"
              width="450px"
              objectFit="cover"
            />
            <Text fontWeight="semibold" fontSize="20px" mt="10px">
              Performance
            </Text>
            <Text textAlign="center" mt="12px" fontSize="15px">
              Road-ready vehicles enhanced with the epic
              <br /> engineering of BMW M.
            </Text>
            <Button
              color="white"
              background="black"
              borderRadius="2px"
              mt="30px"
              mb="60px"
              width="150px"
              height="50px"
            >
              Explore Models
            </Button>
          </Box>
        </Flex>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      mt="70px"
      h="95vh"
    >
      <Text fontWeight="semibold">BMW M LINE-UP</Text>
      <Text fontSize="30px">THE UNSTOPPABLE M</Text>
      <Container>
        <Carousel ride="false" interval={100000}>
          <Carousel.Item>
            <Image
              src={BMW_M}
              alt="BMW M"
              fluid
              height="400px"
              width="100%"
              objectFit="cover"
            />
            <Carousel.Caption>
              <h3>High Performance</h3>
              <p>
                Legendary vehicles fully developed and engineered for
                performance-obsessed drivers.
              </p>
              <Button
                color="white"
                background="black"
                borderRadius="2px"
                mt="30px"
                mb="60px"
                width="150px"
                height="50px"
              >
                Explore Models
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={BMW_ELEC}
              alt="BMW Electrified"
              fluid
              height="400px"
              width="450px"
              objectFit="cover"
            />
            <Carousel.Caption>
              <h3>Electrified Performance</h3>
              <p>
                Electrified visionaries pushing the limits of power and
                innovation.
              </p>
              <Button
                color="white"
                background="black"
                borderRadius="2px"
                mt="30px"
                mb="60px"
                width="150px"
                height="50px"
              >
                Explore Models
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={BMW_PER}
              alt="BMW Performance"
              fluid
              height="400px"
              width="450px"
              objectFit="cover"
            />
            <Carousel.Caption>
              <h3>Performance</h3>
              <p>
                Road-ready vehicles enhanced with the epic engineering of BMW M.
              </p>
              <Button
                color="white"
                background="black"
                borderRadius="2px"
                mt="30px"
                mb="60px"
                width="150px"
                height="50px"
              >
                Explore Models
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Box>
  );
};

export default BmwLineUp;
