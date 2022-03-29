import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}/>
        <GlobalStyle />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp
