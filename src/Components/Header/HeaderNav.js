import {Image, Flex, Button, HStack, Box, useColorModeValue, Container, Spacer} from '@chakra-ui/react';
import data from './menu.data';
import React from "react";
import MobileDrawer from "./MobileDrawer";
import NextLink from "next/link";
import logoPrincipal from "../../assets/logo-princ.png";
import styles from "../../styles/css.module.scss";
export default function HeaderNav() {
  return (
    <Container maxW='container.xl' id="header" bg={useColorModeValue('#FFFFF', 'gray.900')} pt={3} pb={3}>
      <Flex w="100%" align="center">
        <Image width={225} height={'60px'} src={logoPrincipal} alt='Logo Naweby'/>
        <HStack as="nav" spacing="1" display={{ base: "none", md: "flex" }}>
          {data().map((item, i) => (
            <NextLink key={i} href={item.link} passHref>
              <Button variant="nav"> {item.label} </Button>
            </NextLink>
          ))}
        </HStack>
        <Spacer />
        <HStack>
          <Box className={styles.navButton} display={{ base: "none", md: "flex" }}>
            <NextLink href="https://web.naweby.com.br/" passHref>
              <Button id={'bt_entrarNavTop'} variant='ghost' mr={5}>
                Entrar
              </Button>
            </NextLink>
            <NextLink href="https://www.naweby.com.br/cadastre-se-gratis" passHref>
              <Button id={'bt_RegisterNavTop'} colorScheme='primary' variant='outline'>
                Cadastre-se Grátis
              </Button>
            </NextLink>
          </Box>
          <MobileDrawer />
        </HStack>
      </Flex>
    </Container>
  );
}
