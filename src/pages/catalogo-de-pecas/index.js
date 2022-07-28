import BoxSearch from "../../Components/ComponentSearch/BoxSearch";
import styles from "../../styles/css.module.scss";
import dotsBack from "../../assets/cloud-page_header-dots-a-5673bcc8d50613d4247affb217f73169.svg";
import {Box, Container, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import theme from "../../styles/theme";

export default function CatalogoDePecas() {
  return (
    <>
      <Box as={'header'} pt={'5rem'} pb={'3rem'} className={styles.header} backgroundImage={dotsBack} mb={'5rem'}>
        <Container maxW='container.sm' textAlign={'center'}>
          <Heading as='h1' size='2xl' color={useColorModeValue(theme.colors.primary['700'], theme.colors.primary['100'])}>
            Catálogo de peças online.
          </Heading>
          <Text size='lg' mt={7} mb={7}>
            Donec vulputate, mauris eget scelerisque aliquet, augue elit varius ipsum, nec fermentum sapien ex nec lacus.
          </Text>
        </Container>
        <Container maxW='container.lg'>
          <BoxSearch />
        </Container>
      </Box>
      <h1>ola mundo</h1>
    </>
  )
}
