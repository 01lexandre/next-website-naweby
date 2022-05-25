import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import {useState, useCallback} from "react";
import styles from '../styles/css.module.scss'
import {Box, Button, Center, Flex, Grid, GridItem, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import theme from "../styles/theme";
import { Image } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

export default function SlideHero() {
  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  const [arrayObjs, setArrayObjs] = useState([
    {
      title: 'Nota Fiscal',
      description: 'Sed nibh elit, elementum ut nunc sit amet, sagittis imperdiet dui. Nunc lorem magna, pellentesque nec mattis ut, rhoncus efficitur est. Aenean ac felis interdum leo efficitur porttitor sed eget nunc. Aenean ac felis interdum leo efficitur porttitor sed eget nunc nec mattis ut, rhoncus efficitur est nec mattis ut, rhoncus efficitur est.',
      src: 'https://via.placeholder.com/500x280'
    },
    {
      title: 'Financeiro',
      description: 'Sed nibh elit, elementum ut nunc sit amet, sagittis imperdiet dui. Nunc lorem magna, pellentesque nec mattis ut, rhoncus efficitur est. Aenean ac felis interdum leo efficitur porttitor sed eget nunc. Aenean ac felis interdum leo efficitur porttitor sed eget nunc nec mattis ut, rhoncus efficitur est nec mattis ut, rhoncus efficitur est.',
      src: 'https://via.placeholder.com/500x280'
    },
    {
      title: 'Cadastros',
      description: 'Sed nibh elit, elementum ut nunc sit amet, sagittis imperdiet dui. Nunc lorem magna, pellentesque nec mattis ut, rhoncus efficitur est. Aenean ac felis interdum leo efficitur porttitor sed eget nunc. Aenean ac felis interdum leo efficitur porttitor sed eget nunc nec mattis ut, rhoncus efficitur est nec mattis ut, rhoncus efficitur est.',
      src: 'https://via.placeholder.com/500x280'
    },
  ]);
  const colorTitle = useColorModeValue(theme.colors.primary['500'], theme.colors.primary['100'])
  return (
    <div className={styles.embla} ref={emblaRef}>
      <Box className={styles.embla__container}>
        {arrayObjs.map((obj, i) => (
          <Box key={i} className={styles.embla__slide} pt={10} pb={10}>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem colSpan={[5, 5, 3]}>
                <Heading as='h3' size='lg' color={colorTitle}>
                  {obj.title}
                </Heading>
                <Text size='lg' mt={3} mb={3}>
                  {obj.description}
                </Text>
                <Button variant='link' mr={5}>
                  Teste gratuitamente {'->'}
                </Button>
              </GridItem>
              <GridItem colSpan={[5, 5, 2]}>
                <Image src={obj.src} alt={obj.title} />
              </GridItem>
            </Grid>
          </Box>
        ))}
      </Box>
      <Flex justifyContent={'center'}>
        <ArrowBackIcon w={6} h={6}  onClick={scrollPrev} mr={2} cursor={'pointer'} />
        <ArrowForwardIcon w={6} h={6}  onClick={scrollNext} ml={2} cursor={'pointer'} />
      </Flex>
    </div>
  )
}
