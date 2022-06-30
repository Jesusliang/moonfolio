import {
  Box,
  Heading,
  Text,
  Button,
  useToast,
  Link
} from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import mePhoto from '../../public/images/me-min.jpg'

const AboutMe = () => {
  const { t } = useTranslation()
  const toast = useToast()
  return (
    <Box
      position={'relative'}
      sx={{
        padding: '4rem 0',
        backgroundColor: 'gray.100',
        '&>*:not(:first-of-type)': {
          marginTop: '5rem'
        }
      }}
      zIndex="100"
      id="about"
    >
      <Heading
        as={'h3'}
        fontSize={'5xl'}
        fontWeight={'semibold'}
        textAlign="center"
      >
        {t('aboutMe.title')} 📃
      </Heading>
      <Box
        color="black"
        width={{ base: '95%', md: '1000px' }}
        margin="auto"
        marginTop="3rem"
        zIndex={100}
      >
        <Box
          p={4}
          display="flex"
          justifyContent="space-around"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box
            order={{ base: 2, md: 0 }}
            marginTop={{ base: '3rem', md: '.5rem' }}
          >
            <Heading>{t('aboutMe.contact')}</Heading>
            <Box
              marginTop="1rem"
              sx={{
                '& > *:not(:first-of-type)': {
                  marginTop: '.5rem'
                }
              }}
            >
              <Button
                size="md"
                variant="ghost"
                border={'2px solid transparent'}
                _hover={{ border: '2px solid blue', borderColor: 'blue.600' }}
                leftIcon={<MdEmail size="20px" />}
                onClick={() => {
                  navigator.clipboard.writeText('jesusliang96@gmail.com')
                  toast({
                    title: t('alerts.copiedToClipboard'),
                    status: 'success',
                    isClosable: true
                  })
                }}
              >
                jesusliang96@gmail.com
              </Button>
              <Link
                href="https://linkedin.com/in/jesus-liang/"
                target={'_blank'}
              >
                <Button
                  size="md"
                  variant="ghost"
                  border={'2px solid transparent'}
                  _hover={{ border: '2px solid blue', borderColor: 'blue.600' }}
                  leftIcon={<BsLinkedin size="20px" />}
                >
                  https://linkedin.com/in/jesus-liang/
                </Button>
              </Link>
            </Box>
          </Box>
          <Box borderRadius="lg" color="black" padding="0 3rem">
            <Box textAlign={{ base: 'center', md: 'initial' }}>
              <Image
                src={mePhoto}
                width="150"
                height={'150'}
                objectFit="contain"
                alt="me"
                placeholder="blur"
                className="roundedImage"
              />
            </Box>
            <Text>
              {t('aboutMe.description')}
              <br />
              <br />
              {t('aboutMe.description2')}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
