//App.js
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box, Button, Text } from '@chakra-ui/react';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <ChakraProvider>
        <Box p="5" maxW="320px" borderWidth="1px">
          <Text fontSize="xl" fontWeight="bold">Hello, world!</Text>
          <Button mt="2" colorScheme="blue" as="a" href="/quote-check">Quotes</Button>
        </Box>
    </ChakraProvider>
    </Layout>
  );
}

export default App;
