import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am vansh!   ";
const bio1 = "A frontend developer specialised in React";
const bio2 =
  "I am looking for a role that offers a dynamic and challenging environment where they can leverage their expertise to contribute to the entire web development process and that encourages me to stay updated on industry trends.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#284b63"
  >
    <VStack spacing={8}>
      <VStack spacing={3}>
        <Avatar
          name="vansh"
          src="https://avatars.githubusercontent.com/u/91619867?v=4"
          size="2xl"
        />
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="md">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
