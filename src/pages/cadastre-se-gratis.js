import styles from "../styles/css.module.scss";
import {
  Box,
  Button, Checkbox,
  Container, Divider,
  FormControl,
  FormErrorMessage, FormLabel, Grid, GridItem,
  Heading,
  Input, InputGroup, InputRightElement,
  Text, Tooltip, useColorMode,
  useColorModeValue, useToast
} from "@chakra-ui/react";
import theme from "../styles/theme";
import {Field, Form, Formik} from "formik";
import {getSearchCidade, getSearchDocument, postCreateAccount, postCreateUser, setTokenStorage} from "../lib/api";
import {getError} from "../lib/utils";
import {useEffect, useRef, useState} from "react";
import {ViewIcon, ViewOffIcon, Search2Icon} from "@chakra-ui/icons";
import InputMask from "react-input-mask";
import AsyncSelect from 'react-select/async';
import {useRouter} from "next/router";

function FormRegister () {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isTooltip, setTooltip] = useState(false)
  const [cityOptions, setCityOptions] = useState([])
  const toast = useToast()
  const [showFieldError, setFieldError] = useState(false)
  const handleFieldError = () => setFieldError(!showFieldError)
  const submitUser = (values, actions) => {
    setTimeout(async () => {
      try {
        const response = await postCreateUser(values)
        await setTokenStorage(response.meta.token)
        setStep(1)
      } catch (e) {
        let {errors, message} = getError(e)
        for (let x in errors) {
          actions.setFieldError(x, errors[x])
        }
        toast({
          title: message,
          status: 'warning',
          isClosable: true,
        })
      }
      actions.setSubmitting(false)
    }, 1000)
  }
  const validateFormUser = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Requerido';
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'E-mail inválido'
    }
    if (!values.name) {
      errors.name = 'Requerido';
    }

    if (!values.password) {
      errors.password = 'Requerido';
    } else if (values.password.length < 6) {
      errors.password = 'Não pode ser menor que 6';
    }
    if (!values.password_confirmation) {
      errors.password_confirmation = 'Requerido';
    } else if (values.password_confirmation !== values.password) {
      errors.password_confirmation = 'A Senha e confirmar senha devem ser iguais.';
    }

    return errors;
  }

  const form1 = useRef();

  function openTooltipDocument () {
    setTooltip(true)
    setTimeout(function () {
      setTooltip(false)
    }, 2500)
  }
  const validateFormAccount = (values) => {
    const errors = {};
    if (!values.document) {
      errors.document = 'Requerido';
    }
    if (!values.name) {
      errors.name = 'Requerido';
    }
    if (!values.IE) {
      errors.IE = 'Requerido';
    }
    if (!values.phone) {
      errors.phone = 'Requerido';
    }
    if (!values.email) {
      errors.email = 'Requerido';
    }
    if (!values.email) {
      errors.email = 'Requerido';
    }
    if (!values.zip_code) {
      errors.zip_code = 'Requerido';
    }
    if (!values.address) {
      errors.address = 'Requerido';
    }
    if (!values.number) {
      errors.number = 'Requerido';
    }
    if (!values.district) {
      errors.district = 'Requerido';
    }
    if (!values.city) {
      errors.city = 'Requerido';
    }
    // if (values.document.length < 18) {
    //   errors.document = 'CNPJ incorreto';
    // }
    // if (values.document.length === 18) {
    //   openTooltipDocument()
    // }
    return errors;
  }
  const searchDocument = async (field, form) => {
    const response = await getSearchDocument(field.value)
    if (!response.CNPJ) {
      toast({
        title: 'CNPJ não encontrado!',
        status: 'warning',
        isClosable: true,
      })
    }
    form.setFieldValue('name', response.xNome)
    form.setFieldValue('IE', (response.IE) ? response.IE : 123456)
    form.setFieldValue('address', response.Ender.xLgr)
    form.setFieldValue('number', response.Ender.nro)
    form.setFieldValue('complement', response.Ender.xCpl)
    form.setFieldValue('district', response.Ender.xBairro)
    form.setFieldValue('zip_code', response.Ender.CEP)
    form.setFieldValue('city', response.Ender.cMun)
    setCityOptions([{
      value: response.Ender.cMun,
      label: response.Ender.xMun + ' - ' +  response.Ender.UF,
    }])
  }

  const filterCity = async (inputValue) => {
    const response = await getSearchCidade(inputValue)
    const op = []
    response.map(x => {
      op.push({label:x.name + ' - ' + x.state.data.initials, value: x.id})
    })
    return op;
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(filterCity(inputValue));
    });
  const submitAccount = async (values, actions) => {
    try {
      values.document = values.document.replace(/[^\d]+/g, '')
      values.phone = values.phone.replace(/[^\d]+/g, '')
      values.zip_code = values.zip_code.replace(/[^\d]+/g, '')
      const response = await postCreateAccount(values)
      await router.push('/tudo-pronto')
    } catch (e) {
      let {errors, message} = getError(e)
      for (let x in errors) {
        actions.setFieldError(x, errors[x])
      }
      toast({
        title: message,
        status: 'warning',
        isClosable: true,
      })
    }
  }


  // console.log('setStepToken', router.query.step)
  // if (router.query.step) {
  // }
  function setStepToken () {
    if (Number(router.query.step) === 1) {
      if (router.query.t !== undefined) {
        setTokenStorage(router.query.t)
        setStep(1)
        toast({
          title: 'Bem vindo de volta.',
          description: "Continue com seu cadatro.",
          duration: 9000,
          isClosable: true,
        })
        router.replace(router.route)
      }
    }
  }
  useEffect(() => {
    setStepToken()
  }, [router.query])

  useEffect(() => {
    // form1.current.setFieldValue('email', router.query.mail)
  }, [router.query.mail])

  return (
    <>
      {step === 0 ? (
        <>
          <Formik
            innerRef={form1}
            initialValues={{email: router.query.mail, name: '', password: '', password_confirmation: '', terms: 1}}
            validate={validateFormUser}
            onSubmit={submitUser}
          >
            {(props) => (
              <Form>
                <Field name='name'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Nome</FormLabel>
                      <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='name'/>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor='email'>E-mail</FormLabel>
                      <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='email' placeholder='Informe seu e-mail.'/>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name='password'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor='password'>Senha</FormLabel>
                      <InputGroup size='lg'>
                        <Input bg={'#fff'} color={theme.colors.text} {...field} type={showFieldError ? 'text' : 'password'} id='password' placeholder="● ● ● ● ● ●" />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleFieldError}>
                            {showFieldError ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password_confirmation'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.password_confirmation && form.touched.password_confirmation}>
                      <FormLabel htmlFor='password_confirmation'>Confirmar Senha</FormLabel>
                      <InputGroup size='lg'>
                        <Input bg={'#fff'} color={theme.colors.text} {...field} type={showFieldError ? 'text' : 'password'} id='password_confirmation' placeholder="● ● ● ● ● ●"/>
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleFieldError}>
                            {showFieldError ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.password_confirmation}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='terms'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.terms && form.touched.terms}>
                      <InputGroup size='lg'>
                        <Checkbox {...field} value='1' defaultChecked id='terms' size='md'>
                          Concordo com os <a href="/termos-de-uso" rel={'nofollow'}>Termos de Uso</a>
                        </Checkbox>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.terms}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button id={'bt_registerUser'} mt={8} w={'100%'} colorScheme='primary' isLoading={props.isSubmitting} type='submit'>
                  Cadastre-se Grátis
                </Button>
              </Form>
            )}
          </Formik>
        </>
      ) : ''}

      {step === 1 ? (
        <>
          <Formik
            initialValues={{
              document: '',
              name: '',
              IE: '',
              phone: '',
              email: '',
              zip_code: '',
              address: '',
              number: '',
              complement: '',
              district: '',
              city: '',
            }}
            validate={validateFormAccount}
            onSubmit={submitAccount}
          >
            {(props) => (
              <Form>
                <Field name='document'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.document && form.touched.document}>
                      <FormLabel htmlFor='document'>CNPJ</FormLabel>
                      <InputGroup size='lg'>
                        <Input onMouseOut={() => {openTooltipDocument()}} as={InputMask} mask="99.999.999/9999-99" maskChar={null} size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='document'/>
                        <InputRightElement width='4.5rem'>
                          <Tooltip placement='top' label='Clique aqui para pesquisar o CNPJ' isOpen={isTooltip} hasArrow >
                            <Button h='1.75rem' size='sm' onClick={() => {searchDocument(field, form)}}>
                              <Search2Icon />
                            </Button>
                          </Tooltip>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{form.errors.document}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Nome</FormLabel>
                      <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='name'/>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='IE'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.IE && form.touched.IE}>
                      <FormLabel htmlFor='IE'>IE</FormLabel>
                      <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='IE'/>
                      <FormErrorMessage>{form.errors.IE}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                  <GridItem colSpan={[12, 6, 6]}>
                    <Field name='phone'>
                      {({field, form}) => (
                        <FormControl className={styles.fControl} isInvalid={form.errors.phone && form.touched.phone}>
                          <FormLabel htmlFor='phone'>Telefone</FormLabel>
                          <Input size='lg' as={InputMask} mask={'(99) 99999-9999'} maskChar={null} bg={'#fff'} color={theme.colors.text} {...field} id='phone'/>
                          <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={[12, 6, 6]}>
                    <Field name='email'>
                      {({field, form}) => (
                        <FormControl className={styles.fControl} isInvalid={form.errors.email && form.touched.email}>
                          <FormLabel htmlFor='email'>E-mail</FormLabel>
                          <Input size='lg' type={'email'} bg={'#fff'} color={theme.colors.text} {...field} id='email'/>
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                </Grid>
                <Divider mt={8} mb={5} />
                <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                  <GridItem colSpan={[12, 6, 6]}>
                    <Field name='zip_code'>
                      {({field, form}) => (
                        <FormControl className={styles.fControl} isInvalid={form.errors.zip_code && form.touched.zip_code}>
                          <FormLabel htmlFor='zip_code'>CEP</FormLabel>
                          <Input size='lg' as={InputMask} mask="99999-999" maskChar={null} bg={'#fff'} color={theme.colors.text} {...field} id='zip_code'/>
                          <FormErrorMessage>{form.errors.zip_code}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                </Grid>
                <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                  <GridItem colSpan={[12, 9, 9]}>
                    <Field name='address'>
                      {({field, form}) => (
                        <FormControl className={styles.fControl} isInvalid={form.errors.address && form.touched.address}>
                          <FormLabel htmlFor='address'>Endereço</FormLabel>
                          <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='address'/>
                          <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={[12, 3, 3]}>
                    <Field name='number'>
                      {({field, form}) => (
                        <FormControl className={styles.fControl} isInvalid={form.errors.number && form.touched.number}>
                          <FormLabel htmlFor='number'>Nº</FormLabel>
                          <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='number'/>
                          <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                </Grid>

                <Field name='complement'>
                  {({field, form}) => (
                    <FormControl className={styles.fControl} isInvalid={form.errors.complement && form.touched.complement}>
                      <FormLabel htmlFor='complement'>Complemento</FormLabel>
                      <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='complement'/>
                      <FormErrorMessage>{form.errors.complement}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Grid templateColumns='repeat(12, 1fr)' gap={6}>
                  <GridItem colSpan={[12, 6, 6]}>
                    <Field name='district'>
                      {({field, form}) => (
                        <FormControl className={styles.fControl} isInvalid={form.errors.district && form.touched.district}>
                          <FormLabel htmlFor='district'>Bairro</FormLabel>
                          <Input size='lg' bg={'#fff'} color={theme.colors.text} {...field} id='district'/>
                          <FormErrorMessage>{form.errors.district}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={[12, 6, 6]}>
                    <Field name='city'>
                      {({field, form}) => (
                        <>
                          <FormControl className={styles.fControl} isInvalid={form.errors.city && form.touched.city}>
                            <FormLabel htmlFor='city'>Cidade</FormLabel>
                            <AsyncSelect
                              styles='height: 48px;'
                              className={styles.inputSelect}
                              {...field}
                              cacheOptions
                              defaultOptions={cityOptions}
                              value={cityOptions.find(x => x.value === field.value)}
                              loadOptions={promiseOptions}
                              onChange={option => form.setFieldValue(field.name, option.value)}
                            />
                            <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                          </FormControl>
                        </>
                      )}
                    </Field>

                  </GridItem>
                </Grid>
                <Button id={'bt_registerAccount'} mt={8} w={'100%'} colorScheme='primary' isLoading={props.isSubmitting} type='submit'>
                  Cadastre-se Empresa
                </Button>
              </Form>
            )}
          </Formik>
        </>
      ) : ''}
    </>
  )
}

export default function CadastreSeGratis() {
  const {colorMode} = useColorMode()
  const titleColor = useColorModeValue(theme.colors.primary['700'], theme.colors.primary['100'])
  return (
    <>
      <Box as={'section'} pt={'5rem'} pb={'5rem'} className={styles['gradient_'+colorMode]}  minH={'550px'}>
        <Container maxW='container.sm'>
          <Heading as='h1' size='2xl' color={titleColor}>
            Registre-se Gratuitamente
          </Heading>
          <Text size='lg' mt={3} mb={1}>
            De especialista para especialista, o sistema de auto peças que você sempre procurou.
          </Text>
          <Text size='lg' mb={7}>
            Siga o passo a passo abaixo e conheça:
          </Text>
          <FormRegister />
        </Container>
      </Box>
    </>
  )
}
