import styles from '../styles/css.module.scss'
import {
  Box,
  Button,
  Container,
  Flex, Grid, GridItem,
  Heading,
  Text,
  useColorModeValue, FormControl, FormLabel, Input, FormErrorMessage
} from "@chakra-ui/react";
import theme from '../styles/theme'
import ImageHeader from '../assets/baksistem.png'
import dotsBack from '../assets/cloud-page_header-dots-a-5673bcc8d50613d4247affb217f73169.svg'
import dotsLeft from '../assets/left-dot.svg'
import {Field, Form, Formik} from "formik";
import {BrandJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Image from 'next/image'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function FormHome() {
  const router = useRouter()
  return (
    <Formik
      initialValues={{email: ''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          router.push('/cadastre-se-gratis?mail='+values.email)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='email'>
            {({field, form}) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='email'
                       placeholder='Informe seu e-mail.'/>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            id={'bt_footerAction'}
            mt={3}
            borderRadius={41}
            w={'100%'}
            colorScheme='secundary'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Cadastre-se agora.
          </Button>
        </Form>
      )}
    </Formik>
  )
}

function SeoHomePage() {
  return (
    <>
      <NextSeo
        description={process.env.APP_DESCRIPTION}
        canonical={'https://www.naweby.com.br/'}
        openGraph={{
          url: 'https://www.naweby.com.br/',
          title: process.env.APP_NAME + ' - ' + process.env.APP_SLOGAN,
          description: process.env.APP_DESCRIPTION,
          images: [
            {
              url: process.env.APP_IMAGE_DESTAQUE,
              width: 1920,
              height: 1080,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
        twitter={{
          images: [
            {
              url: process.env.APP_IMAGE_DESTAQUE,
              width: 1920,
              height: 1080,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
      />
      <WebPageJsonLd
        description={process.env.APP_DESCRIPTION}
        id="https://www.naweby.com.br/#website"
        url={'https://www.naweby.com.br/'}
        name={process.env.APP_NAME}
        logo="https://www.example.com/photos/logo.jpg"
      />
    </>
  )
}

export default function Home() {
  const bgAction = useColorModeValue(theme.colors.primary['400'], theme.colors.primary['100'])
  useEffect(() => {
  })
  // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
  const keyStr ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
  const boxVariant = {
    visible: { opacity: 1,  transition: { duration: 0.8} },
    hidden: { opacity: 0, }
  }
  const control = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <SeoHomePage />
      <Box as={motion.main}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
      >
        <Box as={'header'} className={styles.header} backgroundImage={dotsBack}>
          <Container pt={'5rem'} maxW='container.sm' textAlign={'center'} mb={'5rem'}>
            <Heading as='h1' size='2xl' color={useColorModeValue(theme.colors.primary['700'], theme.colors.primary['100'])}>
              Seu Sistema de Auto Peças completo e grátis.
            </Heading>
            <Text size='lg' mt={7} mb={7}>
              Gerenciar sua auto peças com segurança nunca esteve tão fácil
              por meio do gerenciamento prático e enxuto do Naweby.
            </Text>
            <NextLink href="/cadastre-se-gratis" passHref>
              <Button id={'bt_heroTop'} colorScheme='primary' size='lg'>
                Cadastre-se Grátis
              </Button>
            </NextLink>
          </Container>
          <Box textAlign={'center'} margin={'0 auto'}>
            <Image src={ImageHeader} placeholder="blur" blurDataURL={rgbDataURL(61, 61, 194)} width={1069} height={620} alt='Seu Sistema de Auto Peças completo e grátis.'/>
          </Box>
        </Box>
        <Box as={'section'} pt={'5rem'} backgroundImage={dotsLeft} className={styles.sect}>
          <Container maxW='container.sm' textAlign={'center'}
                     as={motion.main}
                     ref={ref}
                     variants={boxVariant}
                     initial="hidden"
                     animate={control}
          >
            <Heading as='h2' size='lg' color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
              Funcionalidades para micro e pequenas empresas que pensam grande.
            </Heading>
            <Text size='lg' mt={2} mb={7}>
              Controle seus pedidos de venda, estoque, financeiro e emissão de notas fiscais
              tudo com muita segurança e otimização do tempo em cada processo.
            </Text>
          </Container>
          <Container maxW='container.xl'>
            123
          </Container>
        </Box>
        <Box as={'section'} mb={'5rem'}  pt={'5rem'}>
          <Container maxW='container.lg'>
            <Box bg={bgAction} color={useColorModeValue('#fff', theme.colors.text)} p={6} borderRadius={16}>
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={[5, 5, 3]}>
                  <Heading as='h3' size='lg'>
                    Experimente e use gratuitamente o sistema perfeito para sua auto peças.
                  </Heading>
                  <Text size='lg' mt={3} mb={3}>
                    Se você deseja um sistema online para auto peças que simplesmente faça o que você precisa, sem muita dificuldade e que seja fácil de usar,
                    o Naweby é o programa mais preparado para te atender agora!
                  </Text>
                </GridItem>
                <GridItem colSpan={[5, 5, 2]}>
                  <Flex justifyContent={'center'} alignItems={'center'} h={'100%'}>
                    <FormHome/>
                  </Flex>
                </GridItem>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}
