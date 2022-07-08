import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import DrawerExample from './DrawerExample';
import {  IoMdMenu } from 'react-icons/io';
import data from './menu.data';
import React from "react";
import NextLink from "next/link";
import styles from "../../styles/css.module.scss";
export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>

      <DrawerExample
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {data().map((item, i) => (
            <NextLink key={i} href={item.link} passHref>
              <Button variant='text' > {item.label} </Button>
            </NextLink>
          ))}
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
        </VStack>
      </DrawerExample>
    </Flex>
  );
};
