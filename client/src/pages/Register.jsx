import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon, CloseIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Regitser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: null,
    password: "",
    role: "USER",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    //read the selected file and set it as the image preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleRemovePicture = () => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: null,
    }));

    setImagePreview(null);

    //Reset the file input value to allow selecting the same file again
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleRegister = () => {
    try {
      // Set default role to "USER" if not provided
      const defaultRole = "USER";
      const formDataWithDefaultRole = {
        ...formData,
        role: formData.role || defaultRole,
      };

      console.log(formDataWithDefaultRole);

      const success = dispatch(registerUser(formDataWithDefaultRole));
      if (success) {
        console.log("Registration successful!");
      }
    } catch (error) {
      // Handle registration error
      console.log("Registration error: ", error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register
          </Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={handleInputChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={handleInputChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleInputChange} />
            </FormControl>
            <FormControl id="profilePicture">
              <FormLabel>Profile Picture</FormLabel>
              <InputGroup>
                {imagePreview ? (
                  <HStack spacing={2} mt={2} position="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={handleRemovePicture}
                      position="absolute"
                      top="0"
                      //   left="-10px"
                      borderRadius="50%"
                      p="0"
                      m="0"
                      display="flex"
                      justifyContent="center"
                      zIndex="1"
                    >
                      <CloseIcon boxSize={3} />
                    </Button>
                  </HStack>
                ) : (
                  <label htmlFor="fileInput">
                    <Button
                      as="span"
                      size="md"
                      colorScheme="teal"
                      cursor="pointer"
                      _hover={{
                        bg: "teal.500",
                      }}
                    >
                      Upload Picture
                    </Button>
                  </label>
                )}
                <Input
                  key={fileInputKey}
                  type="file"
                  name="profilePicture"
                  id="fileInput"
                  display="none"
                  onChange={handleFileChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                onClick={handleRegister}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
