import React, { useState } from "react";
import { Image, Flex, Button, HStack, chakra } from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import data from "../header/data";
import MobileDrawer from "./MobileDrawer";
import { useMediaQuery } from "@chakra-ui/react";

const CTA = "Login";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <chakra.header id="header">
      <Flex w="100%" px="20" py="5" align="center" justify="space-between">
        {/* Logo */}
        <Logo />
        {/* Nav Items */}
        {!isMobile && (
          <HStack as="nav" spacing="5">
            {data.map((item, i) => (
              <Link key={i}>
                <Button background="transparent">{item.label}</Button>
              </Link>
            ))}
          </HStack>
        )}

        {/* Call to action items */}
        <HStack>
          <Link to="/login">
            <Button aria-label={CTA} variant="outline">
              {CTA}
            </Button>
          </Link>
          <MobileDrawer />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
