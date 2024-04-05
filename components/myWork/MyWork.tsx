import { Box, Heading, Container, Stack } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ProjectArticle from '../projectArticle/ProjectArticle'

const MyWork: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        padding: '3rem 0',
        backgroundColor: 'gray.100',
        '&>*:not(:first-of-type)': {
          marginTop: '5rem'
        }
      }}
      id="work"
    >
      <Heading as={'h3'} fontSize={'5xl'} fontWeight={'semibold'} textAlign="center">
        {t('myWork.title')} 💼
      </Heading>
      <Container
        maxW="8xl"
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginTop="6rem"
        marginX="auto"
        sx={{
          '&>*:not(:first-of-type)': {
            marginTop: '5rem'
          }
        }}
      >
        <Box>
          <Heading textAlign="center">Availroom 2021-{t('labels.now')}</Heading>
          <Stack marginTop="4rem" gap="3rem">
            <ProjectArticle
              title={t('articles.booking.title')}
              video="./videos/booking-demo.mp4"
              poster="./images/bookingWidget.png"
              description={t('articles.booking.description')}
              links={[
                {
                  key: 'Product Website',
                  url: 'https://www.availroom.com/productos/motor-de-reservas'
                },
                {
                  key: 'Client Website',
                  url: 'https://gestaltur.es/'
                },
                {
                  key: 'Client Website',
                  url: 'https://www.elbulin.es/'
                },
                {
                  key: 'Client Website',
                  url: 'https://novadesta.eu/'
                }
              ]}
            />
            <ProjectArticle
              video="./videos/checkin-demo.mp4"
              poster="./images/checkin.png"
              title={t('articles.checkin.title')}
              description={t('articles.checkin.description')}
              links={[
                {
                  key: 'Product Website',
                  url: 'https://www.availroom.com/productos/app-huesped-availguest'
                }
              ]}
            />
            <ProjectArticle
              video="./videos/os-demo.mp4"
              poster="./images/availroomOs.png"
              title={t('articles.pms.title')}
              description={t('articles.pms.description')}
              links={[
                {
                  key: 'Product Website',
                  url: 'https://www.availroom.com/productos/pms-vrms'
                }
              ]}
            />
            <ProjectArticle
              image="/images/crm.png"
              title={t('articles.crm.title')}
              description={t('articles.crm.description')}
            />
          </Stack>
        </Box>
        <Box>
          <Heading marginTop="3rem" textAlign="center">
            CESA Management Solutions 2020-2021
          </Heading>
          <Stack marginTop="4rem" gap="3rem" width="100%">
            <ProjectArticle
              image="/images/leaderslinked.png"
              title={t('articles.leaderslinked.title')}
              description={t('articles.leaderslinked.description')}
              links={[
                {
                  key: 'Product Website',
                  url: 'https://cesams.com/lms-plataformas-de-gestion-de-la-capacitacion/'
                }
              ]}
            />
          </Stack>
        </Box>
        {/* <Box>
          <Heading marginTop="3rem" textAlign="center">
            Proyectos personales
          </Heading>
        </Box> */}
      </Container>
    </Box>
  )
}
export default MyWork
