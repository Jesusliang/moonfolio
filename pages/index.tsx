import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import { Box, Text } from "@chakra-ui/react";
import Hero from "../components/Home/Hero/Hero";
import ProjectArticle from "../components/projectArticle/ProjectArticle";
import Skills from "../components/Home/Skills/Skills";
import AboutMe from "../components/aboutMe/AboutMe";
import ContactMe from "../components/contactMe/ContactMe";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Jesus Liang</title>
        <meta
          name="description"
          content="Jesus Liang Fullstack Developer Portfolio"
        />
        <meta
          name="keywords"
          content="Web Developer, developer, JavaScript, Typescript, fullstack developer, Jesus David Liang, Jesus Liang, Fullstack, Full-stack"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          overflowX: "hidden",
          overflow: "hidden",
          color: "black"
        }}
        id="home"
      >
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
        </Box>
      </Box>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "footer"]))
      // Will be passed to the page component as props
    }
  };
};
