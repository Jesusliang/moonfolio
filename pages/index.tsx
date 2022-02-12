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
import Skills from "../components/Home/Skills/Skills";
import AboutMe from "../components/aboutMe/AboutMe";
import ContactMe from "../components/contactMe/ContactMe";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflow: "hidden",
        color: useColorModeValue("black", "white")
      }}
      id="home"
    >
      <Head>
        <title>Moonfolio</title>
        <meta name="description" content="Jesus Liang's Portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Box>
        <Box
          sx={{
            padding: "3rem 0",
            backgroundColor: useColorModeValue("gray.100", "gray.800"),
            "&>*:not(:first-of-type)": {
              marginTop: "5rem"
            }
          }}
          id="work"
        >
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
              title="Booking Widget"
              image="./images/bookingWidget.png"
              description="Leaded a small frontend team to create a booking engine and compiled the application to be embeddable in clients websites, allowing them to use our product to offer their hotels and apartments to their clients"
              links={[
                {
                  key: "Product Website",
                  url: "https://www.availroom.com/productos/motor-de-reservas"
                },
                {
                  key: "Demo",
                  url: "https://bookingengine.availroom.com"
                }
              ]}
            />
            <ProjectArticle
              image="./images/checkin.png"
              title="Domotic Checkin Application"
              description="Leaded a small frontend team to developed a web application to allow the customer to checkin in their booking. We implemented an SDK to extract data through photos of documentation such as ID cards, passports and driver's licenses and also integrated with home automation locks so that the customer can enter their stay through the application"
              links={[
                {
                  key: "Product Website",
                  url: "https://www.availroom.com/productos/app-huesped-availguest"
                }
              ]}
            />
            <ProjectArticle
              image="./images/availroomOs.png"
              title="PMS/Channel Manager"
              description="Leaded a small frontend team to create a PMS/Channgel Manager SaaS product, a web application with a Windows like interface for hotels/apartments management, using React and Redux for state management and usage of advanced optimization tools like reselect. Created a websocket backend microservice using Nodejs/Express to provide users real time iterations for teamworking like figma"
              links={[
                {
                  key: "Product Website",
                  url: "https://www.availroom.com/productos/pms-vrms"
                }
              ]}
            />
          </Box>
        </Box>
        <Skills />
        <AboutMe />
        <ContactMe />
      </Box>
    </Box>
  );
};

export default Home;
