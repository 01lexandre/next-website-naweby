import {Box, CircularProgress, Container, Heading, Text} from "@chakra-ui/react";
import styles from "../styles/css.module.scss";
import {useEffect} from "react";
import logoPrincipal from "../assets/logo-princ.png";
import Image from "next/image";
import {useRouter} from "next/router";

// tudo-pronto
export default function TudoPronto() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      console.log(localStorage.getItem('NUI'))
      // localStorage.setItem('naweby/iu', localStorage.getItem('NUI'))
      router.push('https://web.naweby.com.br/auth-router?t='+localStorage.getItem('NUI'))
      localStorage.removeItem('NUI')
    }, 4500)
  })
  return (
    <Box className={styles.tp}>
      <Container>
        <Image
          width={225}
          height={60}
          src={logoPrincipal}
          alt='Logo Naweby'
        />
        <Heading as='h1' size='1xl'>
          Aguarde enquanto preparamos o sistema...
        </Heading>
        <Text size='lg' mt={3} mb={7}>
          Em poucos instantes você conhecerá seu <br/>novo ambiente de trabalho.
        </Text>
        <CircularProgress isIndeterminate color='secundary.500' />
      </Container>
    </Box>
  )
}
