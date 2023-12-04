import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import data from "../header/data";
import { useRef, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import VehiclesMenu from "./VehiclesMenu";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // State to manage the nested menu for "Vehicles"
  const [vehiclesMenuOpen, setVehiclesMenuOpen] = useState(false);

  const handleVehiclesClick = () => {
    setVehiclesMenuOpen(!vehiclesMenuOpen);
  };

  return (
    <Flex>
      {/* Menu Button */}
      {isMobile && (
        <Button ref={btnRef} onClick={onOpen} bg="transparent">
          <IoMdMenu size="26px" />
        </Button>
      )}

      {/* Drawer Component */}
      <DrawerComponent isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack align="right" bg="" width="20rem" ml="30px">
          <Link to="/">
            <Button background="" fontSize="15px" fontWeight="500">
              Home
            </Button>
          </Link>

          {/* Modified "Vehicles" link with right arrow icon */}
          <HStack>
            <Button
              background="transparent"
              w="90%"
              fontSize="15px"
              fontWeight="500"
              onClick={handleVehiclesClick}
              // display="flex"
              justifyContent="space-between"
            >
              Vehicles
              {vehiclesMenuOpen ? (
                <Icon as={IoIosArrowUp} />
              ) : (
                <Icon as={IoIosArrowDown} />
              )}
            </Button>
          </HStack>

          {/* Conditionally render the nested menu */}
          {vehiclesMenuOpen && <VehiclesMenu />}

          <Link to="/build">
            <Button background="transparent" fontSize="15px" fontWeight="500">
              Build Your Own
            </Button>
          </Link>
        </VStack>
      </DrawerComponent>
    </Flex>
  );
}
