import {useRouter} from "next/router";
import {getAllFa, getOneFa} from "../../../../lib/lib-fabricante";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Link,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import BoxSearch from "../../../../Components/ComponentSearch/BoxSearch";
import styles from "../../../../styles/css.module.scss";
import dotsBack from "../../../../assets/cloud-page_header-dots-a-5673bcc8d50613d4247affb217f73169.svg";
import {setRGBDataURL} from "../../../../lib/utils";
import Image from "next/image";
import theme from "../../../../styles/theme";
import {LinkIcon} from "@chakra-ui/icons";
import NextLink from "next/link";
import {BiNews} from "react-icons/bi";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdOutlineContactSupport} from "react-icons/md";

export default function FabricanteView ({fa}) {
  const { isFallback } = useRouter();
  const loaderImg = ({ src, width, quality }) => {
    return `../../fabri-marca/${src}?w=${width}&q=${quality || 75}`
  }
  if (isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <Box as={'header'} pt={'5rem'} className={styles.header} backgroundImage={dotsBack} mb={'5rem'}>
        <Container maxW='container.lg'>
          <BoxSearch />
        </Container>
      </Box>
      <Box as={'section'}>
        <Container maxW='container.lg'>
          <Grid templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem colSpan={[12, 12, 4]}>
              <Box bg={'#F6F5FA'}  p={8} textAlign={"center"} borderRadius={8}>
                <Image loader={loaderImg} src={fa.slug+'.png'} placeholder="blur" blurDataURL={setRGBDataURL(239, 236, 249)}
                       width={150} height={70}
                       alt={fa.fantasia}/>
                <Heading as='h1' lineHeight={'30px'} fontWeight={'900'} mb={0} size='1xl' color={useColorModeValue(theme.colors.primary['700'], theme.colors.primary['100'])}>
                  {fa.fantasia}
                </Heading>
                <Box>
                  <Text fontWeight={'600'} fontSize='sm'>
                    {fa.cnpj}
                  </Text>
                  <Text fontSize='sm'>
                    {fa.razaosocial}
                  </Text>
                  <Text fontWeight={'600'} fontSize='sm'>
                    {fa.endereco}
                  </Text>
                </Box>
                <Flex mb={3} flexWrap={'wrap'} justifyContent={'center'}>
                  {fa.site ? (
                      <NextLink href={fa.site} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o site da '+fa.fantasia}
                            fontSize='15px'
                            icon={<LinkIcon />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                  {fa.blog ? (
                      <NextLink href={fa.blog} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o blog da '+fa.fantasia}
                            fontSize='15px'
                            icon={<BiNews />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                  {fa.facebook ? (
                      <NextLink href={fa.facebook} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o facebook da '+fa.fantasia}
                            fontSize='15px'
                            icon={<FaFacebookF />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                  {fa.instagran ? (
                      <NextLink href={fa.instagran} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o instagran da '+fa.fantasia}
                            fontSize='15px'
                            icon={<FaInstagram />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                  {fa.youtube ? (
                      <NextLink href={fa.youtube} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o youtube da '+fa.fantasia}
                            fontSize='15px'
                            icon={<FaYoutube />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                  {fa.twitter ? (
                      <NextLink href={fa.twitter} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o twitter da '+fa.fantasia}
                            fontSize='15px'
                            icon={<FaTwitter />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                  {fa.faleconosco ? (
                      <NextLink href={fa.faleconosco} passHref>
                        <Link p={2} target={'_blank'} rel={'nofollow, noopener'}>
                          <IconButton
                            variant='outline'
                            aria-label={'Link para o contato da '+fa.fantasia}
                            fontSize='15px'
                            icon={<MdOutlineContactSupport />}
                          />
                        </Link>
                      </NextLink>
                  ): ''}
                </Flex>
                <Box>
                  <Text fontWeight={'600'} fontSize='sm' lineHeight={1}>
                    {fa.telefone}
                  </Text>
                  <Text fontSize='sm' lineHeight={1}>
                    {fa.email}
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={[12, 12, 8]}>
              <Text fontWeight={'600'}>
                Sobre
              </Text>
              <Text>
                {fa.quemsomos}
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllFa().map(member => {
    return { params: { slugFabri: String(member.slug) } }
  });
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { slugFabri } = context.params;
  const data = getOneFa(slugFabri);
  return {
    props: {
      fa: data,
    },
    revalidate: 10,
  }
}
