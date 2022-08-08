import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input, Skeleton, useToast
} from "@chakra-ui/react";
import {Field, Form, Formik, useField, useFormik, useFormikContext} from "formik";
import styles from "../../styles/css.module.scss";
import theme from "../../styles/theme";
import {useEffect, useRef, useState} from "react";
import AsyncSelect from "react-select/async";
import {
  searchAplicacao,
  searchCategoria,
  searchGrupo,
  searchMontadora,
  searchProduto
} from "../../lib/api-consulta-pecas";
import React from 'react';
import AirbnbCard from "./BoxAplicacao";
import Image from "next/image";
import {setRGBDataURL} from "../../lib/utils";


const makeOpSelectSync = (array) => {
  const op = []
  array.map(x => {
    op.push({
      label:x.nome.replace(/^\w/, (c) => c.toUpperCase()),
      value: x.id,
      ...x
    })
  })
  return op;
}
export default function BoxSearch() {
  const formRule = {montadoraID: '', gruposID: '', categoriasID: '', aplicacaoID: ''}
  const toast = useToast()

  const [listProdutos, setlistProdutos] = useState([])

  const [LoadingBTSearch, setLoadingBTSearch] = useState(false);

  const formik = useFormik({
    initialValues: formRule,
    onSubmit: async values => {
      try {
        setLoadingBTSearch(true)
        let string = `grupos/${values.gruposID}/categorias/${values.categoriasID}/aplicacoes/${values.aplicacaoID}/produtos`
        const response = await searchProduto(string)
        console.log(response)
        setlistProdutos(response)
      } catch (e) {
        console.log(e)
      } finally {
        setLoadingBTSearch(false)
      }
    },
  });
  const [showApli, setShowApli] = useState(false);
  const [MontadoraOptions, setMontadoraOptions] = useState([])

  const [GrupoOptions, setGrupoOptions] = useState([])
  const [grupoDisabled, setGrupoDisabled] = useState(true)
  const [grupoStringSearch, setGrupoStringSearch] = useState('')

  const [CategoriaOptions, setCategoriaOptions] = useState([])
  const [categoriaDisabled, setCategoriaDisabled] = useState(true)
  const [categoriaStringSearch, setCategoriaStringSearch] = useState('')

  const [AplicacaoOptions, setAplicacaoOptions] = useState([])
  const [AplicacaoNoOption, setAplicacaoNoOption] = useState('Pesquise uma Aplicação')

  React.useEffect(() => {
    // console.log(formik, 'aquiiiuiii')
    if (
      formik.values.montadoraID !== '' &&
      formik.values.gruposID !== '' &&
      formik.values.categoriasID !== ''
    ) {
      console.clear()
      console.log('mostrar', formik)
      setShowApli(true)
    } else {
      setShowApli(false)
    }
  }, [formik.values]);

  const filterMontadora = async (inputValue) => {
    const response = await searchMontadora(inputValue)
    return makeOpSelectSync(response)
  };
  const filterGrupo = async (inputValue) => {
    const response = await searchGrupo(grupoStringSearch + '&search='+inputValue)
    return makeOpSelectSync(response)
  };
  const filterCategoria = async (inputValue) => {
    const response = await searchCategoria(categoriaStringSearch + '&search='+inputValue)
    return makeOpSelectSync(response)
  };
  const filterAplicacao2 = async (stringSearch) => {
    console.log('filterAplicacao2')
    if (stringSearch.length >= 2) {
      // let stringSeart = `montadoras/${montadoraID}/grupos/${gruposID}/categorias/${categoriasID}/aplicacoes`
      try {
        let stringSeart = `grupos/${formik.values.gruposID}/categorias/${formik.values.categoriasID}/aplicacoes`
        const response = await searchAplicacao(stringSeart+'?search='+stringSearch)
        console.log(response)
        if (response === null) {
          toast({
            title: `Não foi encontrado nenhuma aplicação`,
            status: 'warning',
            isClosable: true,
          })
          setAplicacaoNoOption('Não foi encontrado essa aplicação')
          setTimeout(() => {
            setAplicacaoNoOption('Pesquise uma Aplicação')
          }, 4000)
          return []
        } else {
          return makeOpSelectSync(response)
        }
      } catch (e) {
        console.error(e)
      }
      // return makeOpSelectSync(response)
    }
  };
  const changeSelect = (option, name) => {
    console.log(option, name)
    if (option !== null && option.value !== '') {
      if (name === 'montadoraID') {
        setGrupoDisabled(false)
        setGrupoStringSearch('?montadoraID='+option.value)
      }
      if (name === 'gruposID') {
        setCategoriaDisabled(false)
        setCategoriaStringSearch('?gruposID='+option.value)
      }
    } else {
      if (name === 'montadoraID') {
        setGrupoDisabled(true)
        setCategoriaDisabled(true)
        setGrupoStringSearch('')
      }
    }
    formik.setFieldValue(name, (option === null) ? '' : option.value)
  }

  const formatOptionLabel = ({ value, label, modelo, motor, anoIniS, anoFimS }) => (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <strong>{label} - {modelo} {motor}</strong>
      <Box display='flex' alignItems='baseline'>
        <Box
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
        >
          {(anoIniS) ? anoIniS : '~'} &bull; {(anoFimS) ? anoFimS : '~'}
        </Box>
      </Box>
    </Flex>
  );
  return (
    <Box className={styles.BoxSearch}>
      <form onSubmit={formik.handleSubmit}>
        <Grid templateColumns='repeat(12, 1fr)' gap={6}>
          <GridItem colSpan={[12, 12, 4]}>
            <FormControl className={styles.fControl} isInvalid={formik.errors.montadoraID && formik.touched.montadoraID}>
              <FormLabel htmlFor='montadoraID'>Montadora</FormLabel>
              <AsyncSelect
                name={'montadoraID'}
                id={'montadoraID'}
                styles='height: 48px;'
                isClearable={true}
                noOptionsMessage={() => 'Pesquise uma Montadora'}
                loadingMessage={() => 'Pesquisando...'}
                placeholder={''}
                className={styles.inputSelect}
                cacheOptions
                defaultOptions={MontadoraOptions}
                value={MontadoraOptions.find(x => x.value === field.value)}
                loadOptions={filterMontadora}
                onChange={option => changeSelect(option, 'montadoraID')}
              />
              <FormErrorMessage>{formik.errors.montadoraID}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[12, 12, 4]}>
            <FormControl className={styles.fControl} isInvalid={formik.errors.gruposID && formik.touched.gruposID}>
              <FormLabel htmlFor='gruposID'>Grupo</FormLabel>
              <AsyncSelect
                isDisabled={grupoDisabled}
                name={'gruposID'}
                id={'gruposID'}
                styles='height: 48px;'
                isClearable={true}
                noOptionsMessage={() => 'Pesquise um grupo'}
                loadingMessage={() => 'Pesquisando...'}
                placeholder={''}
                className={styles.inputSelect}
                cacheOptions
                defaultOptions={GrupoOptions}
                value={GrupoOptions.find(x => x.value === field.value)}
                loadOptions={filterGrupo}
                onChange={option => changeSelect(option, 'gruposID')}
              />
              <FormErrorMessage>{formik.errors.gruposID}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[12, 12, 4]}>
            <FormControl className={styles.fControl} isInvalid={formik.errors.categoriasID && formik.touched.categoriasID}>
              <FormLabel htmlFor='categoriasID'>Grupo</FormLabel>
              <AsyncSelect
                isDisabled={categoriaDisabled}
                name={'categoriasID'}
                id={'categoriasID'}
                styles='height: 48px;'
                isClearable={true}
                noOptionsMessage={() => 'Pesquise uma categoria'}
                loadingMessage={() => 'Pesquisando...'}
                placeholder={''}
                className={styles.inputSelect}
                cacheOptions
                defaultOptions={CategoriaOptions}
                value={CategoriaOptions.find(x => x.value === field.value)}
                loadOptions={filterCategoria}
                onChange={option => changeSelect(option, 'categoriasID')}
              />
              <FormErrorMessage>{formik.errors.categoriasID}</FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>
        {(showApli) ? (
          <Grid templateColumns='repeat(12, 1fr)' gap={6}>
            <GridItem colSpan={[12, 12, 9]}>
              <FormControl className={styles.fControl} isInvalid={formik.errors.aplicacaoID && formik.touched.aplicacaoID}>
                <FormLabel htmlFor='aplicacaoID'>Aplicação</FormLabel>
                <AsyncSelect
                  name={'aplicacaoID'}
                  id={'aplicacaoID'}
                  styles='height: 48px;'
                  isClearable={true}
                  noOptionsMessage={() => AplicacaoNoOption}
                  loadingMessage={() => 'Pesquisando...'}
                  placeholder={''}
                  className={styles.inputSelect}
                  cacheOptions
                  defaultOptions={AplicacaoOptions}
                  value={AplicacaoOptions.find(x => x.value === field.value)}
                  loadOptions={filterAplicacao2}
                  formatOptionLabel={formatOptionLabel}
                  onChange={option => formik.setFieldValue('aplicacaoID', (option === null) ? '' : option.value)}
                />
                <FormErrorMessage>{formik.errors.aplicacaoID}</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={[12, 12, 3]}>
              <Button
                id={'bt_searchPro'}
                mt={45}
                w={'100%'}
                h={'47px'}
                colorScheme='secundary'
                type='submit'
                isLoading={LoadingBTSearch}
              >
                Pesquisar Peças
              </Button>
            </GridItem>
          </Grid>
        ):''}
      </form>
      <br/><br/>
      <AirbnbCard resultAplicacoes={listProdutos} />
      <br/>
    </Box>
  )
}
