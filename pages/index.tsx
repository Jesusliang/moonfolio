import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import { Box } from '@chakra-ui/react'
import Hero from '../components/Home/Hero/Hero'
import Skills from '../components/Home/Skills/Skills'
import AboutMe from '../components/aboutMe/AboutMe'
import ContactMe from '../components/contactMe/ContactMe'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MyWork from '../components/myWork/MyWork'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Jesus Liang
          </title>
        <meta name="title" property="og:title" content="Jesus Liang - Portfolio" />
        <meta
          name="description"
          content="Jesus Liang Fullstack Developer Portfolio! I'll make your product scale to the moon through the web"
        />
        <meta property="og:type" content="Website" />
        <meta
          name="keywords"
          content="Web Developer, developer, JavaScript, Typescript, fullstack developer, Jesus David Liang, Jesus Liang, Fullstack, Full-stack"
        />
        <meta name="author" content="Jesus Liang" />
        <meta name="image" property="og:image" content="https://jesusliang.com/images/preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          overflowX: 'hidden',
          overflow: 'hidden',
          color: 'black'
        }}
        id="home"
      >
        <Navbar />
        <Hero />
        <MyWork />
        <Skills />
        <AboutMe />
        <ContactMe />
      </Box>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'footer']))
      // Will be passed to the page component as props
    }
  }
}
