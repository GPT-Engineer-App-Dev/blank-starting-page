import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { usePosts } from '../integrations/supabase/api';

const DataManagement = () => {
  const { data: posts, isLoading, isError } = usePosts();

  return (
    <Box p={4}>
      <Heading>Data Management</Heading>
      {isLoading && <Spinner />}
      {isError && (
        <Alert status="error">
          <AlertIcon />
          Error loading data.
        </Alert>
      )}
      {posts && (
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Created At</Th>
              <Th>Author ID</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map(post => (
              <Tr key={post.id}>
                <Td>{post.id}</Td>
                <Td>{post.title}</Td>
                <Td>{post.body}</Td>
                <Td>{post.created_at}</Td>
                <Td>{post.author_id}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default DataManagement;