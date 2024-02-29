import React from "react";
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text, Image, Link, List, ListItem, useColorModeValue, Divider } from "@chakra-ui/react";
import { FaSearch, FaUserCircle, FaBell, FaRegMoneyBillAlt, FaRegChartBar } from "react-icons/fa";

const Index = () => {
  // Dummy data for stocks
  const stocks = [
    { symbol: "AAPL", price: 150.12, change: "+1.15%" },
    { symbol: "GOOGL", price: 2800.33, change: "+1.23%" },
    { symbol: "AMZN", price: 3300.5, change: "-0.24%" },
    { symbol: "TSLA", price: 800.5, change: "+2.47%" },
  ];

  return (
    <Container maxW="container.xl" py={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="lg" letterSpacing="tight">
          Stock Platform
        </Heading>
        <Stack direction="row" spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
            <Input type="text" placeholder="Search stocks" />
          </InputGroup>
          <Button leftIcon={<FaUserCircle />} variant="ghost">
            Account
          </Button>
          <Button leftIcon={<FaBell />} variant="ghost">
            Notifications
          </Button>
        </Stack>
      </Flex>

      <Flex justifyContent="space-between" mb={10}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Account Summary</Heading>
          <Text mt={4}>
            Balance: <FaRegMoneyBillAlt style={{ marginRight: "0.5rem" }} />
            $25,000.00
          </Text>
          <Text>
            Portfolio Value: <FaRegChartBar style={{ marginRight: "0.5rem" }} />
            $125,000.00
          </Text>
        </Box>
        <Stack spacing={6} direction="row" align="center" flex="2">
          <Button colorScheme="green">Deposit Funds</Button>
          <Button colorScheme="red">Withdraw Funds</Button>
        </Stack>
      </Flex>

      <Heading as="h2" size="md" mb={5}>
        Stocks
      </Heading>
      <List spacing={3}>
        {stocks.map((stock, index) => (
          <ListItem key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue("white", "gray.700")}>
            <Flex justifyContent="space-between" alignItems="center">
              <Stack>
                <Text fontWeight="bold">{stock.symbol}</Text>
                <Text fontSize="sm">Price: ${stock.price}</Text>
              </Stack>
              <Text fontSize="sm" color={stock.change.startsWith("+") ? "green.500" : "red.500"}>
                {stock.change}
              </Text>
              <Stack direction="row" spacing={4}>
                <Button colorScheme="green" size="sm">
                  Buy
                </Button>
                <Button colorScheme="red" size="sm">
                  Sell
                </Button>
              </Stack>
            </Flex>
          </ListItem>
        ))}
      </List>

      <Divider my={10} />

      <Flex as="footer" justifyContent="space-between" alignItems="center">
        <Text>&copy; {new Date().getFullYear()} Stock Platform, Inc.</Text>
        <Stack direction="row" spacing={4}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Support</Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
