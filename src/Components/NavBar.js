import {Box, Button, Center, Container, Flex, Grid, GridItem, Spacer, useColorModeValue} from "@chakra-ui/react";
import Image from "next/image";
import logoPrincipal from "../assets/logo-princ.png";
import NextLink from "next/link";
import styles from "../styles/css.module.scss";

export default function NavBar() {
  return (
    <Box as={'nav'} bg={useColorModeValue('#F6F5FA', 'gray.900')}>
      <Container maxW='container.xl'>
        <Grid templateColumns='repeat(12, 1fr)' gap={6}>
          <GridItem colSpan={[12, 12, 4]}>
            <NextLink href="/" passHref>
              <a>
                <Image
                  width={225}
                  height={60}
                  src={logoPrincipal}
                  alt='Logo Naweby'
                />
              </a>
            </NextLink>
          </GridItem>
          <GridItem colSpan={[12, 12, 4]}>
            <Box as={'ul'} className={styles.nav}>
              <Box as={'li'}>
                <NextLink href="/" passHref>
                  <a>Home</a>
                </NextLink>
              </Box>
              <Box as={'li'}>
                <NextLink href="#funcionalidades" passHref>
                  <a>Funcionalidades</a>
                </NextLink>
              </Box>
              <Box as={'li'}>
                <a href='https://blog.naweby.com.br/' target={"_blank"} rel={"noreferrer"}>
                  Blog
                </a>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 12, 4]}>
            <Box className={styles.navButton}>
              <Button variant='ghost' mr={5}>
                Entrar
              </Button>
              <NextLink href="/cadastre-se-gratis" passHref>
                <Button colorScheme='primary' variant='outline'>
                  Cadastre-se Grátis
                </Button>
              </NextLink>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
