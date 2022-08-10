import {useRouter} from "next/router";
import {searchProduto} from "../../../../../lib/api-consulta-pecas";
import {getAllFa, getAllStaticProdutos, getOneFa} from "../../../../../lib/lib-fabricante";
import {Box, Container, Grid, GridItem, Link, Skeleton, Tag, Text, Tooltip} from "@chakra-ui/react";
import {setRGBDataURL} from "../../../../../lib/utils";
import Image from "next/image";
import React, {useState} from "react";
import {NextSeo} from "next-seo";

function FotosProd({nome,fotos, slug}) {
  console.log('https://s3.amazonaws.com/cdn.naweby.com.br/products/'+slug+'/'+fotos[0].foto)
  const [fotoPrinc, setFotoPrinc] = useState(fotos[0].foto);
  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' gap={6}>
        <GridItem colSpan={3}>
          <Box>
            {fotos.map(foto => (
              <Box onClick={() => {setFotoPrinc(foto.foto)}} cursor={'pointer'}>
                <Image
                  src={'https://s3.amazonaws.com/cdn.naweby.com.br/products/'+slug+'/'+foto.foto}
                  alt={nome}
                  layout="responsive"
                  width={80}
                  height={80}
                  placeholder="blur"
                  blurDataURL={setRGBDataURL(224, 221, 236)}
                />
              </Box>
            ))}
          </Box>
        </GridItem>
        <GridItem colSpan={9}>
          <Box>
            <Image
              src={'https://s3.amazonaws.com/cdn.naweby.com.br/products/'+slug+'/'+fotoPrinc}
              alt={nome}
              layout="responsive"
              width={400}
              height={350}
              placeholder="blur"
              blurDataURL={setRGBDataURL(224, 221, 236)}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default function ProdutoView ({prod}) {
  const { isFallback, route } = useRouter();
  if (isFallback) {
    return (
      <Box as={'section'}>
        <Container maxW='container.lg'>
          <Grid templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem colSpan={[12, 12, 6]}>
              <Skeleton height='250px' />
            </GridItem>
            <GridItem colSpan={[12, 12, 6]}>
              <Skeleton mb={1} height='20px' w={'80px'} />
              <Skeleton mb={1} height='20px' />
              <Skeleton mb={1} height='20px' />
              <Skeleton mb={1} height='20px' />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    )
  }
  const SEO = {
    canonical: 'https://www.naweby.com.br/catalogo-de-pecas',
    title: 'Catálogo de peças online - ' + process.env.APP_NAME,
    description: 'Catálogo de peças online - ',
  }
  return (
    <>
      <NextSeo
        description={SEO.description}
        canonical={SEO.canonical}
        title={SEO.title}
        openGraph={{
          url: SEO.canonical,
          title: SEO.title,
          description: SEO.description,
          images: [
            {
              url: process.env.APP_IMAGE_DESTAQUE,
              width: 1920,
              height: 1080,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
        twitter={{
          images: [
            {
              url: process.env.APP_IMAGE_DESTAQUE,
              width: 1920,
              height: 1080,
              alt: process.env.APP_SLOGAN
            },
          ],
        }}
      />
      <Box as={'section'}>
        <Container maxW='container.lg'>
          <Grid templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem colSpan={[12, 12, 6]}>
              <FotosProd nome={prod.nome} fotos={prod.fotos} slug={prod.fabricante.slug} />
            </GridItem>
            <GridItem colSpan={[12, 12, 6]}>
              <Link href={'/catalogo-de-pecas/fabricante/'+prod.fabricante.nome}>
                <Tag textTransform='capitalize'>{prod.fabricante.nome}</Tag>
              </Link>
              <Box
                fontWeight='semibold'
                as='h1'
                lineHeight='tight'
                noOfLines={1}
                textTransform='capitalize'
                mb={0}
              >
                {prod.nome}
              </Box>
              <Tooltip hasArrow label='Código Fabricante' placement='auto'>
                <strong>{prod.cod_fabricante}</strong>
              </Tooltip>
              <Tooltip hasArrow label='Código Original' placement='auto'>
                <strong>{prod.cod_original}</strong>
              </Tooltip>
              <Text>
                {prod.especificacao}
              </Text>
            </GridItem>
          </Grid>


        </Container>
      </Box>
    </>
  )
}
export const getStaticPaths = async (context) => {
  const paths = getAllStaticProdutos()
  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps = async (context) => {
  const { slugProd } = context.params;
  const response = await searchProduto('produtos/'+slugProd.split('-')[1]);
  return {
    props: {
      prod: response,
    },
  }
}
