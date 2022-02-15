import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import {
  Box,
  Button,
  chakra,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import Hero from "../components/Home/Hero/Hero";
import ProjectArticle from "../components/projectArticle/ProjectArticle";
import Skills from "../components/Home/Skills/Skills";
import AboutMe from "../components/aboutMe/AboutMe";
import ContactMe from "../components/contactMe/ContactMe";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "../components/Home/Hero/Hero.module.scss";

const Home: NextPage = () => {
  const { t, i18n, ready } = useTranslation();
  const [languageModalOpen, setLanguageModalOpen] = useState(true);

  if (!ready) {
    return (
      <Box height={"100vh"} width="100%" display="grid" placeItems="center">
        <Box
          sx={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundImage: 'url("/images/background.svg")',
            backgroundSize: "500% 150%",
            backgroundPosition: "center",
            zIndex: "-900",
            top: "0"
          }}
        />
        <chakra.span
          className={styles.moon}
          sx={{
            display: "inline-block",
            borderRadius: "50%",
            fontSize: "5rem",
            border: "none",
            background: "transparent",
            position: "relative",
            zIndex: "100",
            filter: "saturate(75%)",
            "&::before": {
              content: '""',
              boxShadow: "0 0 2rem 2rem rgba(255, 255, 0, 0.717)",
              position: "absolute",
              left: "50%",
              top: "50%",
              zIndex: "50"
            }
          }}
        >
          🌕
          <chakra.span />
        </chakra.span>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflow: "hidden",
        color: "black"
      }}
      id="home"
    >
      <Head>
        <title>Jesus Liang</title>
        <meta
          name="description"
          content="Jesus Liang Fullstack web developer portfolio"
        />
        <meta
          name="keywords"
          content="Web Developer, developer, JavaScript, Typescript, fullstack developer, Jesus David Liang, Jesus Liang, Fullstack, Full-stack"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Box>
        <Box
          sx={{
            padding: "3rem 0",
            backgroundColor: "gray.100",
            "&>*:not(:first-of-type)": {
              marginTop: "5rem"
            }
          }}
          id="work"
        >
          <Text fontSize={"5xl"} fontWeight={"semibold"} textAlign="center">
            {t("myWork.title")} 💼
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
              title={t("articles.booking.title")}
              video="./videos/booking-demo.mp4"
              poster="./images/bookingWidget.png"
              description={t("articles.booking.description")}
              links={[
                {
                  key: "Product Website",
                  url: "https://www.availroom.com/productos/motor-de-reservas"
                }
              ]}
            />
            <ProjectArticle
              video="./videos/checkin-demo.mp4"
              poster="./images/checkin.png"
              title={t("articles.checkin.title")}
              description={t("articles.checkin.description")}
              links={[
                {
                  key: "Product Website",
                  url: "https://www.availroom.com/productos/app-huesped-availguest"
                }
              ]}
            />
            <ProjectArticle
              video="./videos/os-demo.mp4"
              poster="./images/availroomOs.png"
              title={t("articles.pms.title")}
              description={t("articles.pms.description")}
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
        <Modal
          onClose={() => {}}
          isOpen={languageModalOpen}
          isCentered
          size={"xs"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody padding="2rem">
              <Text textAlign={"center"} fontSize="2xl">
                Language/Idioma
              </Text>
              <Box display="flex" justifyContent={"center"}>
                <Image
                  src={"/images/gbflag.png"}
                  alt={"gb"}
                  height="60px"
                  width="60px"
                  cursor={"pointer"}
                  onClick={() => {
                    setLanguageModalOpen(false);
                    i18n.changeLanguage("en");
                  }}
                />
                <Image
                  onClick={() => {
                    setLanguageModalOpen(false);
                    i18n.changeLanguage("es");
                  }}
                  src={"/images/spainflag.png"}
                  alt={"es"}
                  height="60px"
                  width="60px"
                  ml="3rem"
                  cursor={"pointer"}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Home;
