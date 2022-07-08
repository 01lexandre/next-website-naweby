import {Box, Container, Flex, Tag, useColorModeValue} from "@chakra-ui/react";
import styles from "../../styles/css.module.scss";
export default function NotifyWeb() {
  return (
    <Box className={styles.notify} bg={useColorModeValue('#F6F5FA', 'gray.900')}>
      <Container maxW='container.xl' pb={1} pt={1}>
        <Flex w="100%" align="center">
          <Tag size={'sm'} variant='subtle' colorScheme='green'><strong>VEJA O QUE TEMOS DE NOVO!</strong></Tag>
          <small>Mundo automotivo – 3 feitos criados por mulheres que você não conhecia.</small>
        </Flex>
      </Container>
    </Box>
  )
}
