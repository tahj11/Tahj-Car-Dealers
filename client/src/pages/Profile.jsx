import { Box, Text, Avatar } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Box>
      <Navbar />
      <hr />
      <Box>
        <Text as="h1" fontWeight="400" color="#484848" align="center">
          Account Profile
        </Text>
        <hr
          style={{
            borderTop: "1px solid #333",
            width: "50%",
            margin: "20px auto",
          }}
        />
        <Box display="flex" justifyContent="center" mt="50px">
          <Avatar
            size={"m"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </Box>
        <Box
          display="flex"
          flexDir="column"
          //   alignItems="center"
          border="1px solid #D3D3D3"
          borderRadius="5px"
          mx="auto"
          mt="30px"
          mb="30px"
          pb="30px"
          w={{ base: "80%", md: "50%" }}
          gap="0px"
        >
          <Text ml="30px" mt="30px" fontWeight="semibold">
            Name
          </Text>
          <Box
            ml="30px"
            border="1px solid 	#E0E0E0"
            borderRadius="5px"
            w={{ base: "80%", md: "40%" }}
            p={3}
            mt="1px"
          >
            {user?.firstName} {user?.lastName}
          </Box>
          <Text ml="30px" mt="10px" fontWeight="semibold">
            Email
          </Text>
          <Box
            ml="30px"
            border="1px solid 	#E0E0E0"
            borderRadius="5px"
            w={{ base: "80%", md: "40%" }}
            p={3}
            mt="1px"
          >
            {user?.email}
          </Box>
          <Text ml="30px" mt="10px" fontWeight="semibold">
            Role
          </Text>
          <Box
            ml="30px"
            border="1px solid 	#E0E0E0"
            borderRadius="5px"
            w={{ base: "80%", md: "40%" }}
            p={3}
            mt="1px"
          >
            {user?.role}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
