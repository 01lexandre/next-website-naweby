import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import themeShema from '../styles/theme'

import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {AnimatePresence} from "framer-motion";

const theme = extendTheme(themeShema)

// The handler to smoothly scroll the element into view
const handExitComplete = () => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <ChakraProvider theme={theme}>
          <Head>
            <title>My new cool app</title>
          </Head>
          <Component {...pageProps}/>
          <GlobalStyle />
        </ChakraProvider>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
