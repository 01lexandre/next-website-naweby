import styles from "../styles/css.module.scss";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  useColorMode,
  useColorModeValue,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
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
          Este TERMO DE USO, elaborado pelo <Strong>EMPARI INFORMATICA LTDA - ME</Strong>, tem por finalidade reger o relacionamento com os usuários, informando os deveres, obrigações e as responsabilidades que irão se aplicar a todos os usuários deste software, assim como determina que o USUÁRIO ao utilizar os serviços do software Naweby, ACEITA E CONCORDA, de forma expressa, com todos os termos, ficando submetido integralmente a todas as condições de uso do presente termo.
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
          Para que possa desfrutar desta ferramenta, o presente Termo de Uso tem por finalidade determinar como será definida a relação jurídica do USUÁRIO e do software Naweby, devendo o mesmo seguir os termos e não fazer uso indevido de nossos serviços.
        </TextP>

        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          2. - DAS RESPONSABILIDADES DO USUÁRIO
        </Heading>
        <TextP>
          O USUÁRIO reconhece e aceita que o uso do SOTWARE será feito por sua exclusiva responsabilidade, comprometendo-se a utilizar o SOFTWARE e todas as suas ferramentas de acordo com a legislação vigente, os bons costumes o Termo de Uso e o Contrato de Licença de uso, não devendo empregá-lo para realizar atividades ilícitas, que constituam crime ou contravenção, que atentem contra direitos de terceiros e/ou que infrinjam qualquer norma do ordenamento jurídico brasileiro.
        </TextP>
        <TextP>
          Por se tratar apenas de um sistema que facilita a gestão da sua Auto Peças e não possuir qualquer responsabilidade com as obrigações contábeis e tributárias do USUÁRIO, a <Strong>EMPARI INFORMATICA LTDA</Strong> NÃO SE RESPONSABILIZA POR QUALQUER INFORTÚNIO OU PROBLEMA QUE VENHA A ACONTECER NA EMISSÃO/ GERAÇÃO DAS NOTAS FISCAIS OU QUALQUER CONSEQUÊNCIA QUE POSSA ADVIR DA RELAÇÃO ENTRE O USUÁRIO E OS ÓRGÃOS DE FISCALIZAÇÃO FAZENDÁRIA, devendo o USUÁRIO cumprir a legislação e obrigações impostas.
        </TextP>
        <TextP>
          O Naweby não se responsabiliza por qualquer informação inserida no sistema pelo Usuário, ou distorção ou erro que possa vir a causar disparidade com o que é determinado em lei com relação às obrigações tributárias nacionais.
        </TextP>
        <TextP>
          Portando, é dever sempre do USUÁRIO checar sobre a exatidão das informações e dados de sua NOTA FISCAL, ficando responsável por fiscalizar e reparar/ corrigir eventuais contradições referentes ao conteúdo e a Nota Fiscal em si.
        </TextP>
        <TextP>
          O Naweby não é responsável por qualquer erro de cálculo relacionado ao que deve ser recolhido no momento da emissão da nota fiscal. O USUÁRIO deverá conferir seus dados antes do envio.
        </TextP>
        <TextP>
          Os USUÁRIOS que utilizam os serviços da Naweby, caso desejem, poderão disponibilizar dados e informações sobre fornecedores, clientes e produtos, para facilitar a emissão de novas notas fiscais.
        </TextP>
        <TextP>
          Ressalta-se, mais uma vez que, a VERACIDADE, IDONEIDADE E PRECISÃO das informações contidas no sistema são de responsabilidade única e exclusiva do USUÁRIO.
        </TextP>
        <TextP>
          É de responsabilidade exclusiva do USUÁRIO o conhecimento das imposições tributárias e contábeis, leis vigentes e determinações da Receita Federal, Estadual e/ou Municipal, concernentes aos dados e informações necessários para a emissão das Notas Fiscais que o ramo de atividade exige.
        </TextP>
        <TextP>
          A <Strong>EMPARI INFORMATICA LTDA</Strong> não se responsabiliza por qualquer descumprimento tributário ou recolhimento equivocado do USUÁRIO.
        </TextP>
        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          2.1 - Dados cadastrais
        </Heading>
        <TextP>
          Ao criar uma conta ou ter acesso ao sistema Naweby, o USUÁRIO deverá fornecer seus dados e informações verdadeiras, completas e atualizadas.
        </TextP>
        <TextP>
          Em caso de informações falsas, a Naweby poderá suspender ou até mesmo encerrar sua conta, bem como recusar a prover quaisquer dos serviços.
        </TextP>
        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          2.2 - Usuário e senha
        </Heading>
        <TextP>
          Fica o USUÁRIO responsável por manter a confidencialidade de seus dados e senha.
        </TextP>
        <TextP>
          Todas as atividades realizadas no software por meio de download disponibilizado pelo cadastro do USUÁRIO serão de sua única e exclusiva responsabilidade, devendo notificar e informar a Naweby acerca de quaisquer usos não autorizados de sua conta ou quaisquer outras violações.
        </TextP>
        <TextP>
          A Naweby não se responsabiliza por quaisquer perdas e danos resultantes de acessos não autorizados ou usos da conta.
        </TextP>

        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          3. - DADOS INSERIDOS NO SOFTWARE
        </Heading>
        <TextP>
        A Naweby reitera mais uma vez que não possui qualquer controle ou realiza qualquer edição dos dados inseridos pelos USUÁRIOS no Naweby. Sendo, portanto, de responsabilidade exclusiva, por qualquer ato vinculado aos dados e a emissão da Nota Fiscal eletrônica.
        </TextP>
        <TextP>
        Deste modo, o USUÁRIO é responsável por todos os dados e informações inseridos, lançados ou armazenados no software, incluindo todas as informações referentes a emissão da Nota Fiscal.
        </TextP>

        <TextP>
          É muito importante que o USUÁRIO salve os dados e informações com frequência (backup), pois é responsável por qualquer conteúdo perdido, alterado ou não salvo.
        </TextP>

        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          4. - DO USO DO Naweby
        </Heading>
        <TextP>
          O USUÁRIO terá acesso às ferramentas do sistema (de acordo com o plano e licença de uso contratada), podendo emitir as notas fiscais de seu ramo de atividade.
        </TextP>
        <TextP>
          No sistema, o USUÁRIO poderá:
        </TextP>
        <UnorderedList ml={12}>
          <ListItem>Cadastrar multi empresa</ListItem>
          <ListItem>Ter acesso a atualização do sistema com novas regras do Governo conforme forem sendo estipuladas</ListItem>
          <ListItem>Cadastrar clientes, fornecedores e transportadoras</ListItem>
          <ListItem>Cadastro de regras de tributação</ListItem>
          <ListItem>Cálculos automáticos dos impostos</ListItem>
          <ListItem>Cálculos automáticos dos impostos</ListItem>
          <ListItem>Emissão de Nota Fiscal,</ListItem>
          <ListItem>DANFe personalizado com o logotipo da empresa</ListItem>
          <ListItem>Cancelamento da Nota Fiscal eletrônica</ListItem>
          <ListItem>Visualizar DANFe a partir de XML de outra empresa</ListItem>
          <ListItem>Envio de e-mail para os clientes com XML e PDF da nota</ListItem>
          <ListItem>Sugerir ideias e novas funcionalidades para o sistema</ListItem>
          <ListItem>Salvar nota fiscal em formato XML ou PDF</ListItem>
          <ListItem>Suporte a Certificado Digital Modelo A1</ListItem>
          <ListItem>Carta de Correção Eletrônica – CCE</ListItem>
          <ListItem>Venda rápida para consumidor final Pedido de Vendas</ListItem>
          <ListItem>Reajuste de preços e custos</ListItem>
          <ListItem>Suporte técnico</ListItem>
          <ListItem>Cadastros de Produtos</ListItem>
          <ListItem>Controle de estoque</ListItem>
          <ListItem>Financeiro, gestão de contas a Receber e a Pagar</ListItem>
          <ListItem>Controle de acesso com senha</ListItem>
          <ListItem>Relatórios e Gráficos</ListItem>
        </UnorderedList>
        <TextP>
          O software Naweby não é responsável pelo recolhimento do tributo, somente fornece a ferramenta para a emissão da Nota Fiscal eletrônica. Portanto não é responsável, sob quaisquer circunstâncias, por eventuais perdas e danos relacionadas a emissão da nota.
        </TextP>

        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          5. - DA INTEGRAÇÃO COM OUTROS SOFTWARES OU SITES
        </Heading>
        <TextP>
          Pensando em facilitar e otimizar a usabilidade de nosso sistema, o Naweby poderá transferir seus dados e informações a determinados terceiros que sejam compatíveis com a emissão das notas fiscais, que auxiliam a prestação do serviço e emissão da nota fiscal eletrônica do Naweby, com a finalidade única e exclusiva de dar continuidade à atividade prestada.
        </TextP>
        <TextP>
          Para isso, o USUÁRIO deverá ser cadastrado ou possuir acesso a este terceiro.
        </TextP>
        <TextP>
          O USUÁRIO desde já, autoriza a Naweby a transferir dados a estes terceiros em caso de utilização ou integração com os mesmos.
        </TextP>
        <TextP>
          O USUÁRIO concorda que analisará e cumprirá todos os termos e condições dos serviços dos terceiros, não utilizando os serviços para infringir ou violar direitos da Naweby e do Naweby ou promover atividade criminosa, fraudulenta ou ilícita.
        </TextP>
        <TextP>
        A Naweby não se responsabiliza por quaisquer problemas relacionados ao uso dos serviços ou integração com terceiros.
        </TextP>
        <TextP>
        Os dados referentes às Notas Fiscais, por obrigação legal, serão encaminhados para a Secretaria da Fazenda (SEFAZ), tanto em nível Estadual, quanto Federal.
        </TextP>

        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          6. - CANCELAMENTO
        </Heading>
        <TextP>
        O USUÁRIO, caso não deseje mais continuar com a utilização dos serviços fornecidos, poderá livremente cancelar sua conta a qualquer momento.
        </TextP>
        <TextP>
        Caso deseje, poderá solicitar que todas as informações e dados por ele cadastrados no software sejam excluídos do sistema.
        </TextP>
        <TextP>
        A Naweby poderá, a seu critério, excluir, cancelar ou impedir qualquer conta ou remover todo o conteúdo criado pelo USUÁRIO no sistema Naweby, caso seja verificado qualquer inconformidade com a lei ou os presentes termos.
        </TextP>
        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          6. - ISENÇÃO DE RESPONSABILIDADE
        </Heading>
        <TextP>
        Mais uma vez a Naweby deixa claro que NÃO É RESPONSÁVEL PELOS DADOS INSERIDOS NA EMISSÃO DA NOTA FISCAL!
        </TextP>
        <TextP>
        Todos os dados lançados através do sistema são feitos pelos USUÁRIOS, que somente utilizam o Naweby COMO UMA FERRAMENTA DE TECNOLOGIA FACILITADORA PARA A EMISSÃO DAS NOTAS FISCAIS ELETRÔNICAS.
        </TextP>
        <TextP>
        A Naweby não é responsável pelo conhecimento ou orientação das leis tributárias específicas para a confecção e recolhimento dos impostos do USUÁRIO, que deverá preencher suas notas fiscais de forma adequada.
        </TextP>
        <TextP>
        Trata-se somente de uma ferramenta de cálculo baseado nas informações inseridas pelo Usuário, sendo o mesmo responsável pelo conhecimento contábil e tributário de sua necessidade (alíquotas, créditos, etc).
        </TextP>
        <TextP>
        Portanto, a Naweby não é responsável, sob quaisquer circunstâncias, por eventuais perdas e danos relacionados ao uso de seus serviços.
        </TextP>
        <TextP>
        O Naweby não é responsável e não realiza qualquer tipo de consultoria tributária ou contabilidade, apenas viabiliza a emissão da nota fiscal eletrônica, ficando o USUÁRIO responsável preenche-la conforme determina a lei.
        </TextP>
        <TextP>
        A Naweby também não se responsabiliza por qualquer dano indireto ou imprevisto; danos relacionados a falhas de telecomunicação, da internet, de e-mail, segurança, perda ou roubos de dados, vírus (malware), spyware; perda de negócios, receita, lucro ou investimentos ou uso do software que não sejam compatíveis ao uso correto do Naweby.
        </TextP>
        <TextP>
        O USUÁRIO, concorda em isentar a <Strong>EMPARI INFORMATICA LTDA</Strong> de todos e quaisquer danos, perdas, responsabilidades e despesas resultantes de disputas entre os mesmos e também com terceiros em conexão com a utilização dos serviços fornecidos.
        </TextP>

        <Heading mt={5} as='h3' size='1xl' color={titleColor}>
          7. - DISPOSIÇÕES GERAIS
        </Heading>
        <TextP>
        Este TERMO DE USO poderá vir a sofrer alterações, seja por questões legais ou interesse estratégico da Naweby.
        </TextP>
        <TextP>
        Os USUÁRIOS, desde já, CONCORDAM E RECONHECEM que é de sua única e inteira responsabilidade a verificação periódica do TERMO DE USO.
        </TextP>
        <TextP>
        A Naweby poderá informar ao USUÁRIO sobre alterações significativas através de avisos na página principal do site ou e-mail.
        </TextP>
        <TextP>
        A <Strong>EMPARI INFORMATICA LTDA</Strong> reserva o direito de alterar estes termos a qualquer momento, e estas alterações entrarão em vigor quando divulgadas por e-mail, pelo próprio site ou qualquer outro meio.
        </TextP>
        <TextP>
        Após a comunicação, caso continue utilizando nossos serviços fica entendido pela anuência e concordância de todo o conteúdo alterados.
        </TextP>
        <TextP>
        Fica eleito o foro de MARINGÁ-PR para discutir quaisquer controvérsias e/ ou reinvindicações relacionadas ao uso do site.
        </TextP>
        <TextP>
        Disponibilizamos nosso SAC e contato para eventuais dúvidas. Acesse o chat: https://www.naweby.com.br
        </TextP>
        <br/>
        <TextP>
        Se o USUÁRIO não concordar com o TERMO DE USO, deve deixar imediatamente de usar o software.
        </TextP>
<br/>

        <TextP>
        Obrigado por utilizar nossos serviços!
        </TextP>
        <Strong>EMPARI INFORMATICA LTDA</Strong>

        <TextP>
          Algumas ferramentas somente serão disponibilizadas mediante contratação do serviço Naweby. A licença de uso deste software é paga e tem validade conforme o plano escolhido, podendo ser mensal, semestral ou anual.
        </TextP>
      </Container>
    </Box>
  )
}
