import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import themeShema from '../styles/theme'

import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme(themeShema)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>My new cool app</title>
        </Head>
        <Component {...pageProps}/>
        <GlobalStyle />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
