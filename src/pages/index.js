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
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import Image from 'next/image'
import theme from '../styles/theme'
import logoPrincipal from '../assets/logo-princ.png'
import ImagePrincipal from '../assets/dfasda123.png'
import ImageCotacao from '../assets/cota-naw-12333.png'
import ImageResult from '../assets/cota-naw-4444433.png'
import NextLink from 'next/link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode()
  const bgSectionDestaquer = useColorModeValue('gray.300', 'gray.900')
  return (
    <>
      <Box as={'header'} className={styles.header}>
        <Box as={'nav'} className={styles.nav}>
          <Container maxW='container.lg'>
            <Flex>
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
                <NextLink href="https://web.naweby.com.br" passHref>
                  <Button colorScheme='primary' variant='outline' size='md'>
                    Entrar
                  </Button>
                </NextLink>
                <NextLink href="https://web.naweby.com.br/cadastro-novo-usuario" passHref>
                  <Button colorScheme='primary' ml={5} size='md'>
                    Cadastrar-se
                  </Button>
                </NextLink>
              </Center>
            </Flex>
          </Container>
        </Box>
        <Box as={'section'} pt={'5rem'} pb={'5rem'} alignItems={'center'}>
          <Flex justifyContent={'center'}>
            <Box textAlign={'center'}>
              <Heading as='h1' size='2xl' textAlign={'center'}>
                Seu Sistema de Auto Peças <br/>
                completo e <Box as={'span'} color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>grátis</Box>.
              </Heading>
              <Box>
                <NextLink href="#mais" scroll={false} passHref>
                  <Button colorScheme='gray' size='lg' mt={3}>
                    Saiba Mais
                  </Button>
                </NextLink>
                <NextLink href="https://web.naweby.com.br/cadastro-novo-usuario" passHref>
                  <Button colorScheme='primary' size='lg' marginLeft={3} mt={3}>
                    Registrar
                  </Button>
                </NextLink>
              </Box>
              <Box mt={5}>
                <Image
                  width={793}
                  height={431}
                  src={ImagePrincipal}
                  alt='Seu Sistema de Auto Peças'
                />
              </Box>
            </Box>
          </Flex>
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
            <NextLink href="https://web.naweby.com.br/cadastro-novo-usuario" passHref>
              <Button colorScheme='primary' size='lg' marginLeft={3} mt={3}>
                Registrar
              </Button>
            </NextLink>
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
