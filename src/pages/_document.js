import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

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
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>My page title</title>
          <meta charSet="utf-8"/>
          <meta name="robots" content="index, follow"/>
          <link rel="icon" href="https://www.freenfe.com.br/favicon.ico"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
