import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5CD36VV');`
            }}
          ></script>
          {/* Flags the document for scroll-reveal and sets saved theme before first paint */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){d.dataset.theme=t;return}}catch(e){}d.dataset.theme='light'})()`
            }}
          />
          <meta name="theme-color" content="#04050d" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;800&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CD36VV"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
