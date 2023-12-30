import {
  Box,
  Button,
  Container,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
// import athena_logo from '../assets/athena_logo.svg'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../api/Registeration";
import avatar from "../../assets/avatar.png";
import olive_garden from '../../assets/Athena_dashboard_logo.png'

const Header = ({ role, id, employee }) => {
  const [response, setResponse] = useState();
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState();
  const navigation = useNavigate();

  const handleSignOut = async () => {
    localStorage.removeItem("athena-token");
    await signOut(setResponse, role);
  };

  useEffect(() => {
    if (response?.signOutSuccess) {
      navigation("/sign-in");
    }
  }, [response, navigation]);


  return (
    <Container
      position="relative"
      maxW="full"
      minHeight={"85"}
      padding="0px 64px"
      bgColor={"white"}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="0px 6px 15px -5px rgba(0, 0, 0, 0.1)"
    >
      <Box
      height='100%'
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image src={olive_garden} objectFit="contain" height="65px" width="auto" />
      </Box>
      <div
        style={{
          position: "absolute",
          color: "red",
          top: "110%",
          right: "20px",
        }}
      >
        {errorMessage}
      </div>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        color="black"
        paddingBottom="12px"
      >
        <Box
          height="full"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          {role !== 'admin' ? (
            <Text fontSize="12px" fontWeight="normal">
              {employee?.ATH} Token
            </Text>
          ) : (
            <>
            </>
          )}
          <Text marginBottom={role === 'admin' ? '15px' : ""} fontSize="24px" fontWeight="bold" lineHeight={"100%"}>
            {employee?.name.toUpperCase()}
          </Text>
        </Box>
        <Menu bgColor="red">
          <MenuButton
            bgColor="transparent"
            height="65px"
            width="65px"
            borderRadius="100%"
            as={Button}
            rightIcon={<Image src={avatar} alt="avatar" height="50px" />}
          ></MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSignOut()}>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Container>
  );
};

export default Header;
