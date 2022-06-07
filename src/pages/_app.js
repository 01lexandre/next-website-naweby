import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyle from '../styles/global'
import themeShema from '../styles/theme'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {AnimatePresence} from "framer-motion";
import Script from 'next/script'
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const theme = extendTheme(themeShema)

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import {useRouter} from "next/router";

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
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <ChakraProvider theme={theme}>
          <DefaultSeo {...SEO} />
          <Script
            id="google-analytics"
            src="https://www.googletagmanager.com/gtag/js?id=G-T7D3DX37BF"
            onLoad={() => {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T7D3DX37BF');
            }}
          />
          {(router.pathname === '/tudo-pronto' ? (
            <>
              <Component {...pageProps}/>
            </>
          ) : (
            <>
              <NavBar />
              <Component {...pageProps}/>
              <Footer />
            </>
          ))}
          <GlobalStyle />
        </ChakraProvider>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
