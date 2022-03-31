import Head from 'next/head'
import styles from '../styles/css.module.scss'
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex, Grid, GridItem,
  Heading, IconButton, Kbd, Link, SimpleGrid,
  Spacer, Tag, TagLabel,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import Image from 'next/image'
import theme from '../styles/theme'
import logoPrincipal from '../assets/logo-princ.png'
import ImagePrincipal from '../assets/anun-princ-123.png'
import ImageCotacao from '../assets/cota-naw-12333.png'
import ImageResult from '../assets/cota-naw-4444433.png'
import NextLink from 'next/link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bgWhite = useColorModeValue('#fff', 'gray.200')
  const bgSectionDestaquer = useColorModeValue('gray.300', 'gray.900')
  return (
    <>
      <Head>
        <title>Naweby</title>
      </Head>
      <Box as={'header'} className={styles.header}>
        <Box as={'nav'} className={styles.nav}>
          <Container maxW='container.xl'>
            <Flex>
              <Center p='2'>
              </Center>
              <Spacer/>
              <Center>
                <Image
                  width={225}
                  height={60}
                  src={logoPrincipal}
                  alt='Logo Naweby'
                />
              </Center>
              <Spacer/>
              <Center>
              </Center>
            </Flex>
          </Container>
        </Box>
        <Box as={'section'} pt={'5rem'} pb={'5rem'} minH={450} display={'flex'} alignItems={'center'}>
          <Container maxW='container.lg' textAlign={'left'}>
            <SimpleGrid columns={[1, 1, 2]} spacing='20px'>
              <Box>
                <Heading as='h1' size='2xl'>
                  Sua Sistema de Auto Peças completo e <Box as={'span'}
                                                            color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>grátris</Box>.
                </Heading>
                <Text fontSize='xl' pb={5}>
                  Gerenciar sua auto peças com segurança nunca esteve tão fácil
                  por meio do gerenciamento prático e enxuto do Naweby.
                </Text>
                <NextLink href="#mais" scroll={false}>
                  <Button colorScheme='gray' size='lg' mt={3}>
                    Saiba Mais
                  </Button>
                </NextLink>

                <Button colorScheme='primary' size='lg' marginLeft={3} mt={3}>
                  Registrar
                </Button>
              </Box>
              <Box textAlign={"right"}>
                <Image
                  width={431}
                  height={383}
                  src={ImagePrincipal}
                  alt='Dan Abramov'
                />
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
      <main>
        <Box as={'section'} bg={bgSectionDestaquer} pt={10} pb={10}>
          <Container maxW='container.lg'>
            <Grid
              templateColumns='repeat(5, 1fr)'
              gap={6}
            >
              <GridItem colSpan={[5, 5, 2]}>
                <Box as={'span'} size='md'>
                  <Tag size="lg" borderRadius="full" mb={4}>
                    <Avatar
                      src="https://fakeface.rest/thumb/view?gender=male"
                      size="sm"
                      name="Avatar"
                      ml={-4}
                      mr={2}
                    />
                    <TagLabel>Uma plataforma simples e segura</TagLabel>
                  </Tag>
                </Box>
                <Heading as='h2' size='lg'>
                  Tudo o que você precisa para fazer a gestão da sua pequena empresa.
                </Heading>
              </GridItem>
              <GridItem colSpan={[5, 5, 3]} display={'flex'} alignItems={"center"}>
                <Text size='lg' mt={7}>
                  Controle seus pedidos de venda, estoque, financeiro e emissão de notas fiscais
                  tudo com muita segurança e otimização do tempo em cada processo.
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Box id={'mais'} as={'section'} pt={'3rem'} pb={'3rem'}>
          <Container maxW='container.lg'>
            <Grid
              templateColumns='repeat(10, 1fr)'
              gap={6}
            >
              <GridItem colSpan={[10, 10, 5]}>
                <Image
                  width={524}
                  height={606}
                  src={ImageCotacao}
                  alt='Cotação de compra em tempo real'
                />
              </GridItem>
              <GridItem colSpan={[10, 10, 5]} display={'flex'} flexDirection={"column"} justifyContent={"center"}>
                <Box as={'span'} size='md'>
                  <Tag size="lg" borderRadius="full" mb={4}>
                    <Avatar
                      src="https://fakeface.rest/thumb/view?gender=female&minimum_age=25"
                      size="sm"
                      name="Avatar"
                      ml={-4}
                      mr={2}
                    />
                    <TagLabel>O melhor de tudo isso</TagLabel>
                  </Tag>
                </Box>
                <Heading as='h3' size='lg'>
                  Cotação de compra em tempo real
                </Heading>
                <Text size='lg' mt={2}>
                  No software para auto peças Naweby você encontra a cotação de compra em tempo real
                  com uma imensa variedade de fornecedores nacionais e internacionais.
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Box as={'section'} pt={'3rem'} pb={'3rem'}>
          <Container maxW='container.lg'>
            <Grid templateColumns='repeat(10, 1fr)' gap={6}>
              <GridItem colSpan={[10, 10, 5]} display={'flex'} flexDirection={"column"} justifyContent={"center"}>
                <Box as={'span'} size='md'>
                  <Tag size="lg" borderRadius="full" mb={4}>
                    <Avatar
                      src="https://fakeface.rest/thumb/view?gender=male&minimum_age=30"
                      size="sm"
                      name="Avatar"
                      ml={-4}
                      mr={2}
                    />
                    <TagLabel> Como isso funciona?</TagLabel>
                  </Tag>
                </Box>
                <Heading as='h3' size='lg'>
                  Funciona assim:
                </Heading>
                <Text size='lg' mt={2}>
                  Por dentro do próprio sistema você apresenta seus produtos em falta,
                  em seguida a inteligência de cotação do naweby inicia o alerta aos fornecedores que comercializam os
                  itens que você está precisando, depois você recebe as cotações individuais de cada fornecedor e pode
                  escolher quais as melhores opções de preços, prazos de entregas, e tudo o que precisar saber para
                  avaliar o melhor custo benefício.
                </Text>
              </GridItem>
              <GridItem colSpan={[10, 10, 5]}>
                <Image
                  width={488}
                  height={534}
                  src={ImageResult}
                  alt='Por dentro do próprio sistema você apresenta seus produtos em falta.'
                />
              </GridItem>
            </Grid>
          </Container>
        </Box>

        <Box as={'section'} bg={bgSectionDestaquer} pt={10} pb={10}>
          <Container maxW='container.sm' textAlign={'center'}>
            <Heading as='h4' size='lg'>
              Tudo o que você precisa para fazer a gestão da sua pequena empresa.
            </Heading>
            <Button colorScheme='primary' size='lg' marginLeft={3} mt={3}>
              Registrar
            </Button>
          </Container>
        </Box>
      </main>
      <Box as={'footer'} textAlign={"center"} pt={5} pb={5} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image
          width={225}
          height={60}
          src={logoPrincipal}
          alt='Logo Naweby'
        />
        <Tag size="lg" borderRadius="full" ml={2}>
          <TagLabel>
            <Box display={"flex"} alignItems={"center"}>
              Feito com
              <Box ml={2} display={"flex"} alignItems={"center"}>
                <Image
                  width={20}
                  height={20}
                  src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU3Ljk0NyA1Ny45NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU3Ljk0NyA1Ny45NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFNjRDM0M7IiBkPSJNMjguOTQ3LDU2LjQ4NmMxNS42ODUtMTEuMjc3LDIzLjUzMi0yMS41OTIsMjcuMjIyLTI5LjQ2YzQuMzExLTkuMTkzLDAuNTYxLTIwLjU4OS04Ljg0NS0yNC40MTMNCgkJQzM2LjI2OC0xLjg4LDI4Ljk0Nyw4LjQ4NiwyOC45NDcsOC40ODZTMjEuNjc4LTEuOTA3LDEwLjYyMywyLjU4OEMxLjIxNyw2LjQxMi0yLjUzMywxNy44MDgsMS43NzgsMjcuMDAxDQoJCUM1LjQ2OCwzNC44NjgsMTMuMjYyLDQ1LjIxLDI4Ljk0Nyw1Ni40ODZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='}
                  alt='Amor'
                />
              </Box>
            </Box>
          </TagLabel>
        </Tag>
        {
          colorMode === 'light'
            ? (
              <IconButton onClick={toggleColorMode} ml={2} size='sm' aria-label='mode color' icon={<MoonIcon />} />
            )
            : (<IconButton onClick={toggleColorMode} ml={2} size='sm' aria-label='mode color' icon={<SunIcon />} />)
        }
      </Box>
    </>
  )
}
