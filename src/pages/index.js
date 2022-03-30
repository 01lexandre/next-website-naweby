import Head from 'next/head'
import styles from '../styles/css.module.scss'
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex, Grid, GridItem,
  Heading, Kbd, SimpleGrid,
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
                123
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
                123
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
                <Button colorScheme='gray' size='lg' mt={3}>
                  Saiba Mais
                </Button>
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
                      size="xs"
                      name="Avatar"
                      ml={-1}
                      mr={2}
                    />
                    <TagLabel>Uma plataforma simples e segura</TagLabel>
                  </Tag>
                </Box>
                <Heading as='h2' size='lg'>
                  Tudo o que você precisa para fazer a gestão da sua pequena empresa
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
        <Box as={'section'} pt={'3rem'} pb={'3rem'}>
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
                      src="https://fakeface.rest/thumb/view?gender=female"
                      size="xs"
                      name="Avatar"
                      ml={-1}
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
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </main>
    </>
)
}
