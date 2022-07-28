import {Badge, Box, Grid, GridItem, Tag, Tooltip} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import Image from 'next/image'
import {setRGBDataURL} from "../../lib/utils";
import React from "react";

function AirbnbCard({resultAplicacoes}) {

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' gap={6} mt={4}>
        {(resultAplicacoes !== null) ? resultAplicacoes.map(aplic => (
          <GridItem key={aplic.id} colSpan={[12, 12, 4]}>
            <Box bg={'#ffffff'} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image
                src={'https://s3.amazonaws.com/cdn.naweby.com.br/products/'+aplic.fabricante.slug+'/'+aplic.foto}
                alt={'aplic.nome'}
                width={400}
                height={350}
                placeholder="blur"
                blurDataURL={setRGBDataURL(224, 221, 236)}
              />
              <Box p='6'>
                <Tag textTransform='capitalize'>{aplic.fabricante.nome}</Tag>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                  textTransform='capitalize'
                >
                  {aplic.nome}
                </Box>
                <Tooltip hasArrow label='Código Fabricante' placement='auto'>
                  <span>{aplic.cod_fabricante}</span>
                </Tooltip>
                <Tooltip hasArrow label='Código Original' placement='auto'>
                  <span>{aplic.cod_original}</span>
                </Tooltip>
              </Box>
            </Box>
          </GridItem>
        )) : ''}
      </Grid>
    </>
  )
}

export default AirbnbCard
