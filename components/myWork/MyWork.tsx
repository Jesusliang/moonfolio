import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ProjectArticle from '../projectArticle/ProjectArticle'
interface Props {}
const MyWork: React.FC<Props> = (props) => {
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
      <Heading
        as={'h3'}
        fontSize={'5xl'}
        fontWeight={'semibold'}
        textAlign="center"
      >
        {t('myWork.title')} 💼
      </Heading>
      <Box
        width="80%"
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
        <ProjectArticle
          title={t('articles.booking.title')}
          video="./videos/booking-demo.mp4"
          poster="./images/bookingWidget.png"
          description={t('articles.booking.description')}
          links={[
            {
              key: 'Product Website',
              url: 'https://www.availroom.com/productos/motor-de-reservas'
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
      </Box>
    </Box>
  )
}
export default MyWork
