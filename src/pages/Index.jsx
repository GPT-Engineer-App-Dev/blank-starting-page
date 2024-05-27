import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import { usePosts, useAddPost } from '../integrations/supabase/api';

const Index = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const addPostMutation = useAddPost();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

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
        <form onSubmit={(e) => {
          e.preventDefault();
          addPostMutation.mutate(newPost);
        }}>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <textarea
            placeholder="Body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <button type="submit">Add Post</button>
        </form>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </VStack>
    </Container>
  );
};

export default Index;