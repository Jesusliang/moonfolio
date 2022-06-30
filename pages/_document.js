// import { Html, Head, Main, NextScript } from 'next/document'
// import { ColorModeScript } from '@chakra-ui/react'
// import { theme } from './_app'
// import Script from 'next/script'
// export default function Document () {
//   return (
//     <Html>
//       <Head>
//       <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
//         __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//         })(window,document,'script','dataLayer','GTM-5CD36VV');`
//       }}></Script>
//       </Head>
//       <body>
//       <noscript dangerouslySetInnerHTML={{
//         __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CD36VV"
//             height="0" width="0" style="display:none;visibility:hidden"></iframe>`
//       }}></noscript>
//         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps (ctx) {
  //   const originalRenderPage = ctx.renderPage

  //   // Run the React rendering logic synchronously
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       // Useful for wrapping the whole react tree
  //       enhanceApp: (App) => App,
  //       // Useful for wrapping in a per-page basis
  //       enhanceComponent: (Component) => Component
  //     })

  //   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //   const initialProps = await Document.getInitialProps(ctx)

  //   return initialProps
  // }

  render () {
    return (
      <Html>
        <Head>
        <script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5CD36VV');`
        }}></script>
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CD36VV"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
