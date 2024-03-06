// Layout.js
import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

function Layout({ children }) {
    return (
        <Box p="5" bg="pink.100" boxShadow="md" position="relative">
            {/* White circle in the top-left corner */}
            <Box
                position="absolute"
                top="0"
                left="0"
                width="30px"
                height="30px"
                borderRadius="50%"
                bg="white"
                transform="translate(-50%, -50%)"
            />
            <Flex direction="column" align="center">
                <Heading as="h1" size="lg" mb="4">
                    Common Header
                </Heading>
                {/* Render child components */}
                {children}
                {/* Add other common elements (footer, sidebar, etc.) */}
            </Flex>
        </Box>
    );
}

export default Layout;
