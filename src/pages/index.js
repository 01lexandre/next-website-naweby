import styles from '../styles/css.module.scss'
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex, Grid, GridItem,
  Heading, IconButton, SimpleGrid,
  Spacer, Tag, TagLabel,
  Text,
  Image,
  useColorMode,
  useColorModeValue, FormControl, FormLabel, Input, FormErrorMessage
} from "@chakra-ui/react";
import theme from '../styles/theme'
import ImageHeader from '../assets/dfasda123.png'
import SlideHero from "../Components/SlideHero";
import {Field, Form, Formik} from "formik";
import {BrandJsonLd, NextSeo, WebPageJsonLd} from "next-seo";

function FormHome() {
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
          alert(JSON.stringify(values, null, 2))
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

export default function Home() {
  const bgAction = useColorModeValue(theme.colors.primary['400'], theme.colors.primary['100'])
  // TODO: https://github.com/garmeeh/next-seo
  const as = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "WebSite",
      "@id": "https://contaazul.com/#website",
      "url": "https://contaazul.com/",
      "name": "Conta Azul",
      "description": "Software de Gestão Financeira Online - Teste Grátis",
      "potentialAction": [{
        "@type": "SearchAction",
        "target": {"@type": "EntryPoint", "urlTemplate": "https://contaazul.com/?s={search_term_string}"},
        "query-input": "required name=search_term_string"
      }],
      "inLanguage": "pt-BR"
    }, {
      "@type": "WebPage",
      "@id": "https://contaazul.com/#webpage",
      "url": "https://contaazul.com/",
      "name": "ERP financeiro simples de usar para sua empresa - Conta Azul",
      "isPartOf": {"@id": "https://contaazul.com/#website"},
      "datePublished": "2022-05-25T12:14:26+00:00",
      "dateModified": "2022-05-25T13:29:55+00:00",
      "description": "Conta Azul é um ERP online fácil de usar para você trabalhar junto com seu contador. Organize vendas, receba mais rápido, emita nota fiscal e controle sua empresa em um só lugar.",
      "breadcrumb": {"@id": "https://contaazul.com/#breadcrumb"},
      "inLanguage": "pt-BR",
      "potentialAction": [{"@type": "ReadAction", "target": ["https://contaazul.com/"]}]
    }, {
      "@type": "BreadcrumbList",
      "@id": "https://contaazul.com/#breadcrumb",
      "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início"}]
    }]
  }

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
              width: 3333,
              height: 3333,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
        twitter={{}}
      />
      <WebPageJsonLd
        description="What does the fox say?"
        id="https://www.naweby.com.br/#website"
        logo="https://www.example.com/photos/logo.jpg"
        lastReviewed="2021-05-26T05:59:02.085Z"
        reviewedBy={{
          type: 'Person',
          name: 'Garmeeh',
        }}
      />
      <main>
        <Box as={'header'} className={styles.header} bg={useColorModeValue('#F6F5FA', 'gray.900')}>
          <Box as={'section'} pt={'5rem'} textAlign={'center'}>
            <Container maxW='container.sm' textAlign={'center'}>
              <Heading as='h1' size='2xl'
                       color={useColorModeValue(theme.colors.primary['700'], theme.colors.primary['100'])}>
                Seu Sistema de Auto Peças completo e grátis.
              </Heading>
              <Text size='lg' mt={7} mb={7}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor ante nulla, quis hendrerit
                ligula vehicula interdum.
              </Text>
              <Button colorScheme='primary'>
                Cadastre-se Grátis
              </Button>
            </Container>
            <Image src={ImageHeader} alt='Seu Sistema de Auto Peças completo e grátis.' margin={'0 auto'}/>
          </Box>
        </Box>
        <Box as={'section'} pt={'5rem'}>
          <Container maxW='container.sm' textAlign={'center'}>
            <Heading as='h2' size='xl'
                     color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </Heading>
            <Text size='lg' mt={2} mb={7}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor ante nulla, quis hendrerit
              ligula vehicula interdum.
            </Text>
          </Container>
          <Container maxW='container.lg'>
            <SlideHero/>
          </Container>
        </Box>
        <Box as={'section'} pt={'5rem'}>
          <Container maxW='container.lg'>
            <Box bg={bgAction} color={useColorModeValue('#fff', theme.colors.text)} p={6} borderRadius={16}>
              <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={[5, 5, 3]}>
                  <Heading as='h3' size='lg'>
                    Acesse agora, experimente e use gratuitamente o sistema de auto peças perfeito para você.
                  </Heading>
                  <Text size='lg' mt={3} mb={3}>
                    Sed nibh elit, elementum ut nunc sit amet, sagittis imperdiet dui. Nunc lorem magna, pellentesque
                    nec mattis ut, rhoncus efficitur est. Aenean ac felis interdum leo efficitur porttitor sed eget
                    nunc.
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
      </main>
    </>
  )
}
