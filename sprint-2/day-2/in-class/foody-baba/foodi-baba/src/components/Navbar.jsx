import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Images/Foodie-Baba-Logo.png";

const Navbar = () => {
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
          <Link as={RouterLink} to="/">
            Dashboard
          </Link>
          <Link as={RouterLink} to="/menu">
            Menu
          </Link>
          <Link as={RouterLink} to="/order-status">
            Order Status
          </Link>
        </Flex>
        <Flex className="image" align="center" justify="center" w="35%">
          <img src={Logo} alt="Foodie Baba" width="20%" />
        </Flex>
        <Flex width="40%" justify="flex-end" align="center">
          <Button
            bg="#368ce7"
            color="#E2E8F0"
            _hover={{ bg: "#1666ba" }}
            borderRadius="md"
            transition="background-color 0.3s ease"
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
