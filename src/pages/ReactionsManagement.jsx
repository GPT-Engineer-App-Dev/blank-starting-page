import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useReactions } from '../integrations/supabase/api';

const ReactionsManagement = () => {
  const { data: reactions, isLoading, isError } = useReactions();

  return (
    <Box p={4}>
      <Heading>Reactions Management</Heading>
      {isLoading && <Spinner />}
      {isError && (
        <Alert status="error">
          <AlertIcon />
          Error loading reactions.
        </Alert>
      )}
      {reactions && (
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Post ID</Th>
              <Th>User ID</Th>
              <Th>Emoji</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reactions.map(reaction => (
              <Tr key={reaction.id}>
                <Td>{reaction.id}</Td>
                <Td>{reaction.post_id}</Td>
                <Td>{reaction.user_id}</Td>
                <Td>{reaction.emoji}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default ReactionsManagement;