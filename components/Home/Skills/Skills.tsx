import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { Parallax } from 'react-scroll-parallax'
import SvgReadingAstronaut from '../../svgs/readingAstronaut/ReadingAstronaut'
interface Props {}
const Skills: React.FC<Props> = (props) => {
  const { t } = useTranslation()

  const readingAstronautContainer = useRef<HTMLDivElement>(null)

  return (
    <Box padding="2rem" color="white" position="relative" id="skills">
      <Heading
        as={'h3'}
        fontSize={'5xl'}
        fontWeight={'semibold'}
        textAlign="center"
      >
        {t('mySkills.title')} 💡
      </Heading>
      <Box mt={'4rem'} display="grid" placeItems={'center'}>
        <Box
          width={{ base: '80px', md: '150px' }}
          ref={readingAstronautContainer}
          position="absolute"
          right="5%"
          top="30%"
        >
          <Parallax speed={25}>
            <SvgReadingAstronaut />
          </Parallax>
        </Box>
          <Box
            maxW={{ base: '200px', md: '350px' }}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
            color="black"
            transform={{ base: 'translateX(-30%)', lg: 'translateX(-90%)' }}
            zIndex="-10"
          >
            <Text fontSize={'2xl'} fontWeight={'medium'}>
              {t('mySkills.frontend')}
            </Text>
            <Text>React, Redux, Angular, Html, Css/Sass, Graphql, etc</Text>
          </Box>
          <Box
            maxW={{ base: '200px', md: '350px' }}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
            color="black"
            zIndex="-10"
            marginTop={'1.5rem'}
          >
            <Text fontSize={'2xl'} fontWeight={'medium'}>
              {t('mySkills.backend')}
            </Text>
            <Text>
              Node.js, Express.js, SQL, NoSQL, Microservices, Java, Spring, etc
            </Text>
          </Box>
          <Box
            maxW={{ base: '200px', md: '350px' }}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
            color="black"
            transform={{ base: 'translateX(30%)', lg: 'translateX(90%)' }}
            mt="1.5rem"
            zIndex="-10"
          >
            <Text fontSize={'2xl'} fontWeight={'medium'}>
              {t('mySkills.others')}
            </Text>
            <Text>Git, Testing, CI/CD, UI/UX, English</Text>
          </Box>
      </Box>
    </Box>
  )
}
export default Skills
