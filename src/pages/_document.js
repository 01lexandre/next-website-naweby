import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8"/>
          <meta name="robots" content="index, follow"/>
          <link rel="icon" href="/favicon.ico"/>

          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
