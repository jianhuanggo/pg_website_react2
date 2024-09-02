import  { Flex, Heading, Spacer, HStack, Text, Button, Box } from "@chakra-ui/react"

export default function NavBar() {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">tasks</Heading>
            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">M</Box>
                <Text>jianhuanggo@gmail.com</Text>
                <Button colorScheme="purple">Logout</Button>
            </HStack>


        </Flex>

    )
}