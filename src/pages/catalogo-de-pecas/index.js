import BoxSearch from "../../Components/ComponentSearch/BoxSearch";
import styles from "../../styles/css.module.scss";
import dotsBack from "../../assets/cloud-page_header-dots-a-5673bcc8d50613d4247affb217f73169.svg";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import theme from "../../styles/theme";
import {getAllFa, getOneFa} from "../../lib/lib-fabricante";
import ImageHeader from "../../assets/baksistem.png";
import {setRGBDataURL} from "../../lib/utils";
import Image from "next/image";

function ListFabricante ({array}) {
  let fabrics = array.sort(() => Math.random() - 0.5).splice(0, 8)
  const loaderImg = ({ src, width, quality }) => {
    return `./fabri-marca/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <>
      <Container maxW='container.lg'>
        <Grid templateColumns='repeat(12, 1fr)' gap={6}>
          {fabrics.map((fa, i) => (
            <GridItem key={i} colSpan={[12, 6, 3]}>
              <LinkBox>
                <Flex className={styles.fa} bg={'#F6F5FA'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} p={8}>
                  <LinkOverlay href={'catalogo-de-pecas/fabricante/'+fa.slug} textAlign={'center'} textDecoration={'auto'}>
                    <Image loader={loaderImg} src={fa.slug+'.png'} placeholder="blur" blurDataURL={setRGBDataURL(239, 236, 249)}
                           width={150} height={55}
                           alt={fa.fantasia}/>
                    {fa.fantasia}
                  </LinkOverlay>
                </Flex>
              </LinkBox>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default function CatalogoDePecas({listFab}) {
  return (
    <>
      <Box as={'header'} pt={'5rem'} className={styles.header} backgroundImage={dotsBack} mb={'5rem'}>
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
      <Box as={'section'}>
        <Container maxW='container.sm' textAlign={'center'} >
          <Heading as='h2' size='lg' color={useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])}>
            Alguns de nossos fornecedores
          </Heading>
          <Text size='lg' mt={2} mb={7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, ipsum ut fringilla tristique.
          </Text>
        </Container>
        <ListFabricante array={listFab} />
      </Box>
      <h1>ola mundo</h1>
    </>
  )
}

export const getStaticProps = async (context) => {
  const data = getAllFa();
  return {
    props: {
      listFab: data,
    },
    revalidate: 10,
  }
}
