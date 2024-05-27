import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Admin Dashboard</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/data-management">
            <Button variant={"link"} mr={4}>
              Data Management
            </Button>
          </RouterLink>
          <RouterLink to="/user-management">
            <Button variant={"link"} mr={4}>
              User Management
            </Button>
          </RouterLink>
          <RouterLink to="/analytics">
            <Button variant={"link"} mr={4}>
              Analytics
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;