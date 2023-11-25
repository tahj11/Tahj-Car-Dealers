import React, { useState } from "react";
import {
  Flex,
  Button,
  HStack,
  chakra,
  MenuButton,
  Avatar,
  MenuDivider,
  MenuList,
  MenuItem,
  Menu,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import data from "../header/data";
import MobileDrawer from "./MobileDrawer";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { FaCaretDown, FaChevronCircleDown } from "react-icons/fa";

const CTA = "Login";

const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px={isMobile ? "5" : "20"}
        py="5"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Logo />
        {/* Nav Items */}
        {!isMobile && (
          <HStack as="nav" spacing="5">
            {data.map((item, i) => (
              <Link key={i} to={item.to}>
                <Button background="transparent">{item.label}</Button>
              </Link>
            ))}
          </HStack>
        )}

        {/* Call to action items */}
        <HStack>
          {user ? (
            // Display user menu if user is logged in
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                // rightIcon={
                //   <FaChevronCircleDown style={{ background: "transparent" }} />
                // }
                _hover={{ bg: "", color: "" }} // Adjust hover background and text color
                // _active={{ bg: "teal.600" }} // Adjust active (pressed) background color
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate("/profile")}>
                  Profile
                </MenuItem>
                {/* Add more menu items as needed */}
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            // Display login button if user is not logged in
            <Link to="/login">
              <Button aria-label="Login" variant="outline">
                Login
              </Button>
            </Link>
          )}
          <MobileDrawer />
        </HStack>
      </Flex>
    </chakra.header>
  );
};

export default Navbar;
