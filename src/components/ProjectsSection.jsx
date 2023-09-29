import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Learning Spectrum",
    description:
      "This platform designed to provide a digital space for students to access educational resources and courses.I have used local web server - xampp and code editor -visual studio code.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "VIBESPACE - SOCIAL MEDIA",
    description:
      "To develop the social media clone , have to make react application as a frontend and also also use the mongodb for store data and node use as backend.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "ICHIRAKU RAMEN STORE BASED ON NARUTO",
    description:
      "The project aims to bring the fictional ramen shop, Ichiraku Ramen, to life, providing fans and visitors with a unique and memorable dining experience.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "Developed a customer complaint registry system incorporating Flask and DB2 technologies within an IBM project.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#3c6e71"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
