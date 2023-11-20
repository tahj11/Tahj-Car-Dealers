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
import { useRef } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex>
      {/* Menu Button */}
      {isMobile && (
        <Button ref={btnRef} onClick={onOpen}>
          <IoMdMenu size="26px" />
        </Button>
      )}

      {/* Drawer Component */}
      <DrawerComponent isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack align="left">
          {data.map((item, i) => (
            <Link key={i}>
              <Button variant="text">{item.label}</Button>
            </Link>
          ))}
        </VStack>
      </DrawerComponent>
    </Flex>
  );
}
