import styles from "../styles/css.module.scss";
import {Box, Container, Heading, Text, Link, useColorMode, useColorModeValue} from "@chakra-ui/react";
import theme from "../styles/theme";

function TextP ({ children }) {
  return (
    <Text size='lg' mt={3} mb={1}>
      {children}
    </Text>
  )
}
function Strong ({ children }) {
  return (
    <Box color='primary.500' as={'strong'}>
      {children}
    </Box>
  )
}

export default function TermosDeUso () {
  const {colorMode} = useColorMode()
  const titleColor = useColorModeValue(theme.colors.primary['700'], theme.colors.primary['100'])
  return (
    <Box as={'section'} pt={'5rem'} pb={'5rem'} className={styles['gradient_'+colorMode]}  minH={'550px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' color={titleColor}>
          Termos de uso Naweby
        </Heading>
        <TextP>
          Desde já, gostaríamos de agradecer por utilizar nossos serviços.
        </TextP>
        <TextP>
          Estes são fornecidos pela empresa <Strong>EMPARI INFORMATICA LTDA - ME</Strong>,
          inscrita no CNPJ/MF sob nº <Strong>10.541.434/0001-52</Strong>, com sede na AV BENTO MUNHOZ DA ROCHA NETTO, nº 632, SLJ 02 SL 201 SL 204 TORRE NORTE, ZONA 07, na cidade de Maringá-PR.
        </TextP>
        <TextP>
          Endereço eletrônico <Link href='https://www.naweby.com.br/' color='primary.500' isExternal>https://www.naweby.com.br/</Link> e e-mail suporte@naweby.com.br.
        </TextP>
        <TextP>
          Pedimos que leiam e analisem com atenção os termos de uso, pois ao usarem nossos serviços estão concordando expressamente com estes termos.
        </TextP>
        <TextP>
          Leia-os com atenção.
        </TextP>

        <Heading mt={5} as='h2' size='2xl' color={titleColor} textAlign={'center'}>
          Naweby
        </Heading>
        <TextP>
          Este TERMO DE USO, elaborado pelo <Strong>EMPARI INFORMATICA LTDA - ME</Strong>, tem por finalidade reger o relacionamento com os usuários, informando os deveres, obrigações e as responsabilidades que irão se aplicar a todos os usuários deste software, assim como determina que o USUÁRIO ao utilizar os serviços do software FREENFe, ACEITA E CONCORDA, de forma expressa, com todos os termos, ficando submetido integralmente a todas as condições de uso do presente termo.
        </TextP>
        <TextP>
          Este termo é um acordo legal (contrato) entre você e a <Strong>EMPARI INFORMATICA LTDA</Strong>, para utilização do Naweby. Caso não concorde com os termos aqui presentes, você não poderá utilizar os serviços fornecidos.
        </TextP>
        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          1. - Naweby
        </Heading>

        <TextP>
          O Naweby é um programa destinado a gerenciamento de auto peças. Ele destaca-se pela simplicidade e facilidade de uso em uma interface agradável e de fácil entendimento.
        </TextP>
        <TextP>
          Por meio de nossa ferramenta, o usuário conseguirá emitir Nota Fiscal eletrônica de Venda, Gerenciar Produtos e controlar seu estoque, Cadastrar Clientes, Fornecedores e Transportadoras, realizar orçamento e pedidos de vendas para seus clientes e realizar o controle financeiro do mesmo, e emitir relatorios.
        </TextP>
        <TextP>
          O Naweby permite que armazene informações sobre todos os seus Clientes, Fornecedores e Produtos, sendo necessário cadastrá-los apenas uma única vez.
        </TextP>
        <TextP>
          Deste modo, todas as configurações tributárias estarão disponíveis para uso sempre que for necessário emitir uma nova Nota Fiscal eletrônica ou realizar Pedido de venda ou Orçamento.
        </TextP>
        <TextP>
          Além disso, o Naweby possibilita que o usuário visualize, exporte e imprima relatórios dos Clientes e dos Produtos, para o período que desejar.
        </TextP>
        <TextP>
          Simplifique o gerenciamento da sua Auto Peças utilizando o Naweby, pois ele é uma solução simples e completa para você evitar dor de cabeça na hora de gerenciar sua Auto Peças.
        </TextP>
        <TextP>
          Para que possa desfrutar desta ferramenta, o presente Termo de Uso tem por finalidade determinar como será definida a relação jurídica do USUÁRIO e do software FREENFe, devendo o mesmo seguir os termos e não fazer uso indevido de nossos serviços.
        </TextP>
      </Container>
    </Box>
  )
}
