import React, { useContext } from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Navigate, Link as RouterLink } from "react-router-dom";
import Logo from "../Images/Foodie-Baba-Logo.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Box
      borderWidth="1px"
      pl={10}
      pr={10}
      pt={2}
      pb={2}
      w="100%"
      bgColor="#deecfb"
    >
      <Flex justify="space-between" align="center">
        <Flex
          width="40%"
          justify="space-between"
          color="#368ce7"
          fontSize="20px"
        >
          <Link as={RouterLink} to="/dashboard">
            DASHBOARD
          </Link>
          <Link as={RouterLink} to="/menu">
            MENU
          </Link>
          <Link as={RouterLink} to="/order-status">
            ORDER STATUS
          </Link>
        </Flex>
        <Flex className="image" align="center" justify="center" w="35%">
          <img src={Logo} alt="Foodie Baba" width="20%" />
        </Flex>
        <Flex width="40%" justify="flex-end" align="center">
          <Link as={RouterLink} to="/">
            <Button
              mr="20px"
              bg="#368ce7"
              color="#E2E8F0"
              _hover={{ bg: "#1666ba" }}
              borderRadius="md"
              transition="background-color 0.3s ease"
            >
              HOME
            </Button>
          </Link>
          <Button
            bg="#368ce7"
            color="#E2E8F0"
            _hover={{ bg: "#1666ba" }}
            borderRadius="md"
            transition="background-color 0.3s ease"
            onClick={logout}
          >
            LOGOUT
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
