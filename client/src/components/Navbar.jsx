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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import data from "../header/data";
import MobileDrawer from "./MobileDrawer";
import { useMediaQuery } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
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
    <chakra.header id="header" bg="">
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
          // <HStack as="nav" spacing="5">
          //   {data.map((item, i) => (
          //     <Link key={i} to={item.to}>
          //       <Button background="transparent">{item.label}</Button>
          //     </Link>
          //   ))}
          // </HStack>
          <HStack as="nav" spacing="5">
            <Link to="/">
              <Button background="transparent">Home</Button>
            </Link>

            <Popover>
              <PopoverTrigger>
                <Button background="transparent">Vehicles</Button>
              </PopoverTrigger>
              <PopoverContent
                position="fixed"
                top="13px"
                left="0"
                right="0"
                transform="translateX(-50%)"
                width="49rem"
                height="80vh"
                borderRadius="2px"
                overflowY="scroll"
              >
                <PopoverBody>
                  <HStack mt="20px" ml="25px">
                    {/* Your menu items go here */}
                    <Text as="h5" fontWeight="500">
                      LAMBORGHINI
                    </Text>
                  </HStack>
                  <HStack ml="30px" mt="20px" spacing={20} cursor="pointer">
                    <VStack onClick={() => navigate("/aventador")}>
                      <Image
                        src={SVG_WHITE}
                        alt="svg"
                        height="100px"
                        objectFit="cover"
                      />
                      <Text fontWeight="500">SVG</Text>
                    </VStack>
                    <VStack onClick={() => navigate("/huracan")}>
                      <Image
                        src={HURACAN_WHITE}
                        alt="svg"
                        height="100px"
                        objectFit="cover"
                      />
                      <Text fontWeight="500">HURACAN TECHNICA</Text>
                    </VStack>
                    <VStack onClick={() => navigate("/huracan")}>
                      <Image
                        src={HURACAN_BLU}
                        alt="svg"
                        height="100px"
                        objectFit="cover"
                      />
                      <Text fontWeight="500">HURACAN EVO</Text>
                    </VStack>
                  </HStack>
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
                      <Image
                        src={BMW_X6_GREY}
                        alt="svg"
                        height="100px"
                        objectFit="cover"
                      />
                      <Text fontWeight="500">X6 M</Text>
                    </VStack>
                    <VStack onClick={() => navigate("/X5")}>
                      <Image
                        src={BMW_IX_NONE}
                        alt="svg"
                        height="100px"
                        objectFit="cover"
                      />
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
                      <Image
                        src={GT3_NONE}
                        alt="svg"
                        height="100px"
                        objectFit="cover"
                      />
                      <Text fontWeight="500">GT3 S</Text>
                    </VStack>
                  </HStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Link to="/build">
              <Button background="transparent">Build Your Own</Button>
            </Link>
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
