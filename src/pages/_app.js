import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/global'
import themeShema from '../styles/theme'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {AnimatePresence} from "framer-motion";
import Script from 'next/script'
import Footer from "../Components/Footer";
const theme = extendTheme(themeShema)
import NextNProgress from 'nextjs-progressbar';
import {DefaultSeo} from 'next-seo';
import SEO from '../../next-seo.config';
import {useRouter} from "next/router";
import HeaderNav from "../Components/Header/HeaderNav";
import NotifyWeb from "../Components/Header/NotifyWeb";
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
import AppContext from "../../AppContext";
import NextApp from 'next/app';
import {getPostsBlog} from "../lib/api";

function Index({posts, Component, pageProps}) {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
        <ChakraProvider theme={theme}>
          <DefaultSeo {...SEO} />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MTM3DKX');`,
            }}
          />
          <Script
            id="hotjar-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
               (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2983926,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
          <AppContext.Provider
            value={{
              state: {
                languages: 'pt-BR',
                posts
              },
            }}
          >
            {(router.pathname === '/tudo-pronto' ? (
              <>
                <Component {...pageProps}/>
              </>
            ) : (
              <>
                <NextNProgress height={4}/>
                {/*<NotifyWeb posts={posts}/>*/}
                <Component {...pageProps}/>
              </>
            ))}
          </AppContext.Provider>
          <GlobalStyle/>
        </ChakraProvider>
      </AnimatePresence>
    </ThemeProvider>
  )
}

// Index.getInitialProps = async (appContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   // let query = `
//   //   {
//   //     posts(first: 2) {
//   //       edges {
//   //         node {
//   //           slug
//   //           title
//   //         }
//   //       }
//   //     }
//   //   }
//   // `
//   // let variables = {}
//   // const headers = {
//   //   'Content-Type': 'application/json',
//   //   'Access-Control-Allow-Headers' : 'Content-Type,Authorization,true'
//   // }
//   // const res = await fetch('http://cms.naweby.com.br/graphql', {
//   //   method: 'POST',
//   //   headers,
//   //   body: JSON.stringify({
//   //     query,
//   //     variables,
//   //   }),
//   // })
//   // const json = await res.json()
//   // const posts = json.data.posts.edges
//   // const posts = {}
//   const posts = await getPostsBlog()
//   return {
//     ...appProps,
//     posts: posts,
//     revalidate: 1,
//   }
// }

export default Index
