import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={40}
        >
          <Text>Vansh Kapoor • © 2023</Text>
          <Box className="col-sm-6">
            <Text color="red" fontSize="lg" fontWeight="bold">
              My Address:
            </Text>
            <Text fontSize="md">
              100100, xyz
              <br />
              New Delhi,India
            </Text>

            <br />
          </Box>
          <Box className="col-sm-6">
            <Text color="red" fontSize="lg" fontWeight="bold">
              Contact:
            </Text>

            <Text fontSize="md" color="white">
              Email: info@example.com
            </Text>
            <br />
          </Box>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
