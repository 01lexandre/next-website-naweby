import React from 'react'
import Document, {
  Html, Head, Main, NextScript
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {ColorModeScript} from '@chakra-ui/react'
import theme from '../styles/theme'
import Script from "next/script";

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
    return (<Html lang="pt_BR">
        <Head>
          <meta charSet="utf-8"/>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          <link rel="icon" href="/favicon.ico"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"/>
          <meta name="theme-color" content="#3524cf"/>
        </Head>
        <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTM3DKX" height="0" width="0"
                  style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
