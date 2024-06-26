import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import RocketHello from '../../../components/svgs/rocketHello/RocketHello'
import {
  Box,
  Button,
  chakra,
  Link as ChakraLink,
  Heading
} from '@chakra-ui/react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {}
const Hero: React.FC<Props> = (props) => {
  const { t } = useTranslation()
  const router = useRouter()

  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      sx={{
        height: 'calc(100vh)',
        backgroundSize: '500% 150%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '3rem',
        display: 'flex',
        flexDir: 'column'
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("/images/background.svg")',
          backgroundSize: '500% 150%',
          backgroundPosition: 'center',
          zIndex: '-900',
          top: '0'
        }}
      />
      <Box
        position="absolute"
        right={{ base: '50%', md: '2rem' }}
        transform={{ base: 'translateX(50%)', md: 'translateX(0)' }}
        top="4rem"
        color="black"
        sx={{
          '& > *': {
            cursor: 'pointer '
          },
          '& > *:not(:first-of-type)': {
            marginLeft: '.5rem !important'
          }
        }}
      >
        <Link href="/" locale={'en'} passHref>
          <Image
            src={'/images/gbflag.png'}
            alt={'gb'}
            height="25px"
            width="25px"
          />
        </Link>

        <Link href="/" locale={'es'} passHref>
          <Image
            src={'/images/spainflag.png'}
            alt={'es'}
            height="25px"
            width="25px"
          />
        </Link>
      </Box>
      <Box
        css={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginTop: '2.5rem'
        }}
      >
        <Heading as={'h1'} fontSize="2xl" fontWeight="normal">
          Jesus Liang <br /> {t('hero.developer')}
        </Heading>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: { base: '90%', lg: '750px' },
          margin: 'auto',
          marginTop: 'auto'
        }}
      >
        <Box
          sx={{
            fontSize: { base: '2rem', md: '2.5rem' },
            opacity: `${offsetY > 0 ? 100 - offsetY * 0.5 : 100}%`
          }}
        >
          <Box>
            <Heading as={'h2'} fontWeight="normal">
              {t('hero.description')}{' '}
              <chakra.span
                className={styles.moon}
                sx={{
                  display: 'inline-block',
                  borderRadius: '50%',
                  fontSize: { base: '2rem', md: '2rem' },
                  border: 'none',
                  background: 'transparent',
                  position: 'relative',
                  zIndex: '100',
                  filter: 'saturate(75%)',
                  '&::before': {
                    content: '""',
                    boxShadow: '0 0 35px 15px rgba(255, 255, 0, 0.717)',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    zIndex: '50'
                  }
                }}
              >
                🌕
              </chakra.span>{' '}
              {t('hero.throughWeb')}
            </Heading>
          </Box>
          <Box mt="1rem">
            <ChakraLink
              marginTop="5%"
              href="#contact"
              textDecor={'none'}
              _hover={{
                textDecor: 'none'
              }}
            >
              <Button
                display="inline-block"
                margin="auto"
                colorScheme="yellow"
                zIndex="100"
                position="relative"
                sx={{
                  '&::before': {
                    content: '""',
                    boxShadow: '0 0 35px 10px rgba(255, 255, 0, 0.6)',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    zIndex: '-10',
                    width: '100%'
                  }
                }}
              >
                {t('hero.buttons.contact')}
              </Button>
            </ChakraLink>
            <ChakraLink
              href={
                router.locale === 'en'
                  ? '/files/jesusliang_developer.pdf'
                  : '/files/jesusliang_desarrollador.pdf'
              }
              target={'_blank'}
            >
              <Button
                display="inline-block"
                margin="auto"
                colorScheme="yellow"
                zIndex="100"
                position="relative"
                marginLeft="2rem"
                sx={{
                  '&::before': {
                    content: '""',
                    boxShadow: '0 0 35px 10px rgba(255, 255, 0, 0.6)',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                    zIndex: '-10',
                    width: '100%'
                  }
                }}
              >
                {t('hero.buttons.resume')}
              </Button>
            </ChakraLink>
          </Box>
        </Box>
        <Box
          sx={{
            width: { base: '200px', md: '255px' },
            marginTop: '2rem'
          }}
          style={{
            transform: `translate(${
              isMobile ? offsetY * 0.8 : offsetY * 2
            }px,-${offsetY * 0.5}px)`
          }}
        >
          <RocketHello />
        </Box>
      </Box>
    </Box>
  )
}
export default Hero
