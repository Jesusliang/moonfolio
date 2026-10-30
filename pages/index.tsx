import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next/pages'
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations'
import Altimeter from '../components/descent/Altimeter'
import Space from '../components/descent/Space'
import Sky from '../components/descent/Sky'
import City from '../components/descent/City'
import Underground from '../components/descent/Underground'
import Core from '../components/descent/Core'
import FloatingContact from '../components/descent/FloatingContact'
import { ogImageFor } from '../data/site'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jesusliang.com" />
        <meta property="og:image" content={ogImageFor(locale)} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Jesus Liang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Altimeter />
      <FloatingContact />
      <main>
        <Space />
        <Sky />
        <City />
        <Underground />
        <Core />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}
