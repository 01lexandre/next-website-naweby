import styles from '../styles/css.module.scss'
import {
  Box,
  Button,
  Container,
  Flex, Grid, GridItem,
  Heading,
  Text,
  Highlight,
  useColorModeValue, FormControl, FormLabel, Input, FormErrorMessage
} from "@chakra-ui/react";
import theme from '../styles/theme'
import ImageHeader from '../assets/baksistem.png'
import dotsBack from '../assets/cloud-page_header-dots-a-5673bcc8d50613d4247affb217f73169.svg'
import dotsLeft from '../assets/left-dot.svg'
import imageDe123 from '../assets/imageDe123.png'
import bgMarca from '../assets/bg-marca.png'
import {Field, Form, Formik} from "formik";
import {BrandJsonLd, NextSeo, WebPageJsonLd} from "next-seo";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Image from 'next/image'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {setRGBDataURL} from "../lib/utils";

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
      <Box as={motion.main} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box as={'header'} className={styles.header} backgroundImage={dotsBack}>
          <Container pt={'5rem'} maxW='container.sm' textAlign={'center'} mb={'5rem'}>
            <Heading as='h1' size='2xl' color={useColorModeValue(theme.colors.text, theme.colors.primary['100'])}>
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
            <Image src={ImageHeader} placeholder="blur" blurDataURL={setRGBDataURL(61, 61, 194)} width={1069} height={620} alt='Seu Sistema de Auto Peças completo e grátis.'/>
          </Box>
        </Box>

        <Container pt={'5rem'} maxW='container.sm' textAlign={'center'} >
          <Heading as='h2' size='lg' color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
            Funcionalidades para micro e pequenas empresas que pensam grande.
          </Heading>
          <Text size='lg' mt={2} mb={7}>
            Controle seus pedidos de venda, estoque, financeiro e emissão de notas fiscais
            tudo com muita segurança e otimização do tempo em cada processo.
          </Text>
        </Container>

        <Box as={'section'} mb={'5rem'}  pt={'5rem'}>
          <Container maxW='container.lg'>
            <Box textAlign={'center'} bg={bgAction} backgroundPosition={'center'} backgroundRepeat={'no-repeat'} p={6} borderRadius={16}>
              <Container>
                <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                  <Heading as='h3' size='lg' color={useColorModeValue('#fff', theme.colors.text)}>
                    Conheça Catálogo de peças online.
                  </Heading>
                  <Text size='lg' mt={3} mb={3} color={useColorModeValue('#fff', theme.colors.text)}>
                    Donec vulputate, mauris eget scelerisque aliquet, augue elit varius ipsum, nec fermentum sapien ex nec lacus.
                  </Text>
                  <NextLink href="/catalogo-de-pecas" passHref>
                    <Button id={'linkCatalogo'} colorScheme='gray' size='lg' rightIcon={<ArrowForwardIcon />}>
                      Pesquisa de peças aqui
                    </Button>
                  </NextLink>
                </Flex>
              </Container>
            </Box>
          </Container>
        </Box>

        <Box as={'section'} pt={'5rem'} pb={'5rem'} backgroundImage={dotsLeft} className={styles.sect}>
          <Container maxW='container.lg' as={motion.main}
                     ref={ref}
                     variants={boxVariant}
                     initial="hidden"
                     animate={control}>
            <Grid templateColumns='repeat(12, 1fr)' gap={6}>
              <GridItem colSpan={[12, 12, 6]}>
                <Box backgroundPosition={'center top'} backgroundImage={imageDe123} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} minH='sm' borderRadius='lg' overflow='hidden'>
                </Box>
              </GridItem>
              <GridItem colSpan={[12, 12, 6]}>
                <Box minH='sm' borderRadius='lg' p={5} overflow='hidden' bg={useColorModeValue('#F6F5FA', theme.colors.primary['100'])}>
                  <Heading as='h2' size='lg' color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
                    Cadastro de produtos completo.
                  </Heading>
                  <Text size='lg' mt={2} mb={7}>
                    Donec vulputate, mauris eget scelerisque aliquet, augue elit varius ipsum, nec fermentum sapien ex nec lacus. Etiam sit amet maximus diam. Proin nulla dolor, auctor id magna quis, vulputate malesuada felis Donec vulputate, mauris eget scelerisque aliquet, augue elit varius ipsum, nec fermentum sapien ex nec lacus. Etiam sit amet maximus diam. Proin nulla dolor, auctor id magna quis, vulputate malesuada felis.
                  </Text>
                </Box>
              </GridItem>
              <GridItem colSpan={[12, 12, 6]}>
                <Box minH='sm' borderRadius='lg' p={5} overflow='hidden' bg={useColorModeValue('#F6F5FA', theme.colors.primary['100'])}>
                  <Heading as='h2' size='lg' color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
                    Emissão de nota fiscal em poucos cliques.
                  </Heading>
                  <Text size='lg' mt={2} mb={7}>
                    Tudo aqui foi desenhado para sua equipe encontrar facilidade na hora de usar e agilizar o processo de vendas, livre-se da burocracia e da complexidade na hora de emitir nota fiscal e enviá-la ao seu cliente.
                    Apesar de vivermos no país com o sistema tributário mais complexo do mundo, isso não significa que você precisa sofrer na hora da emissão, até porque já simplificamos tudo isso no Naweby.
                  </Text>
                </Box>
              </GridItem>
              <GridItem colSpan={[12, 12, 6]}>
                <Box minH='sm' borderRadius='lg' p={5} overflow='hidden' bg={useColorModeValue('#F6F5FA', theme.colors.primary['100'])}>
                  <Heading as='h2' size='lg' color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
                    Você está seguro conosco.
                  </Heading>
                  <Text size='lg' mt={2} mb={7}>
                    Garantimos a privacidade e integridade dos dados transitados pelo sistema, sem dores de cabeça com perca de dados e sem custo de implantação.
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
