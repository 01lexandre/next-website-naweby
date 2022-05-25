import React from 'react'
import Document, {
  Html, Head, Main, NextScript
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {ColorModeScript} from '@chakra-ui/react'
import theme from '../styles/theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps, styles: (<>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>)
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (<Html lang={process.env.APP_LANG}>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          <link rel="icon" href="/favicon.ico"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"/>
          <meta name="theme-color" content="#3524cf" />
          {/*<meta name="description"*/}
          {/*      content={process.env.APP_DESCRIPTION}/>*/}
          {/*<meta property="og:title" content={process.env.APP_NAME + ' - ' + process.env.APP_SLOGAN}/>*/}
          {/*<meta property="og:description" content={process.env.APP_DESCRIPTION}/>*/}
          {/*<meta property="og:url" content={process.env.APP_URL}/>*/}
          {/*<link rel="canonical" href={process.env.APP_URL}/>*/}
          {/*<meta property="og:type" content="website"/>*/}
          {/*<meta property="og:locale" content={process.env.APP_LANG}/>*/}
          {/*<meta property="og:site_name" content={process.env.APP_NAME}/>*/}
          {/*<meta property="og:image" content={process.env.APP_IMAGE_DESTAQUE}/>*/}
          {/*<meta property="og:image:alt" content={process.env.APP_SLOGAN}/>*/}
          {/*<meta name="twitter:card" content="summary_large_image"/>*/}
          {/*<script type="application/ld+json">*/}
          {/*  {'{ "@context" : "http://schema.org", "@type" : "SoftwareApplication", "name" : "Naweby", "applicationCategory" : "Auto Peças" }'}*/}
          {/*</script>*/}
        </Head>
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
