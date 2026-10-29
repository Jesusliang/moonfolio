import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next/pages'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default appWithTranslation(MyApp)
