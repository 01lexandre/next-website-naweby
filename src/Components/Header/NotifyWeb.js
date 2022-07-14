import {Box, Button, Container, Flex, Grid, GridItem, Link, Spacer, Tag, useColorModeValue} from "@chakra-ui/react";
import styles from "../../styles/css.module.scss";
import React from "react";

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  console.log(posts)
  return {
    props: {
      posts,
    },
  }
}
export default function NotifyWeb({posts}) {
  console.log('Olaaaa notify', posts)
  return (
    <Box className={styles.notify} bg={useColorModeValue('#F6F5FA', 'gray.900')}>
      <Container maxW='container.xl' pb={1} pt={1}>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          <GridItem colSpan={[4, 4, 3]} display={{ base: "none", md: "flex" }}>
            <Flex w="100%" align="center">
              <Tag size={'sm'} variant='subtle' colorScheme='green'><strong>VEJA O QUE TEMOS DE NOVO!</strong></Tag>
              <Box bg={'#2d3748'} w={1.5} h={1.5} borderRadius={'10px'} ml={1} mr={1}></Box>
              <small><Link href={'https://blog.naweby.com.br/posts/'+posts[0].node.slug} isExternal>{posts[0].node.title}</Link></small>
            </Flex>
          </GridItem>
          <GridItem colSpan={[4, 4, 1]}>
            <Flex w="100%" justifyContent={'flex-end'}>
              <Button variant='ghost' size='sm'>
                Contato
              </Button>
              <Button variant='ghost' size='sm'>
                Ir para o Sistema
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
