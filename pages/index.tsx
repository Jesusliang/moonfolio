import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import {
  Box,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Hero from "../components/Home/Hero/Hero";
import ProjectArticle from "../components/projectArticle/ProjectArticle";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflow: "hidden",
        color: useColorModeValue("black", "white")
      }}
    >
      <Head>
        <title>Moonfolio</title>
        <meta name="description" content="Jesus Liang's Portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Box
        sx={{
          padding: "2rem 0",
          backgroundColor: useColorModeValue("gray.100", "gray.800"),
          "&>*:not(:first-of-type)": {
            marginTop: "5rem"
          }
        }}
        id="work"
      >
        <Box>
          <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
            My work 💼
          </Text>
          <Box
            width="80%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginTop="6rem"
            marginX="auto"
            sx={{
              "&>*:not(:first-of-type)": {
                marginTop: "5rem"
              }
            }}
          >
            <ProjectArticle
              title="Availroom Booking Widget"
              description="Un motor de reservas que se puede integrar dentro de cualquier web facilmente"
            />
            <ProjectArticle
              title="Availroom Booking Widget"
              description="Un motor de reservas que se puede integrar dentro de cualquier web facilmente"
            />
            <ProjectArticle
              title="Availroom Booking Widget"
              description="Un motor de reservas que se puede integrar dentro de cualquier web facilmente"
            />
            <ProjectArticle
              title="Availroom Booking Widget"
              description="Un motor de reservas que se puede integrar dentro de cualquier web facilmente"
            />
          </Box>
        </Box>
        <Box>
          <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
            My Skills 💡
          </Text>
          <Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
