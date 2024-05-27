import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Landing Page
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover our amazing product and services. We offer the best solutions for your needs.
        </Text>
        <Box boxSize="sm">
          <Image src="https://via.placeholder.com/400" alt="Placeholder Image" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;