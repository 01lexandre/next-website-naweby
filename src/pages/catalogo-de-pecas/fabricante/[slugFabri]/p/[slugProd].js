import {useRouter} from "next/router";
import {searchProduto} from "../../../../../lib/api-consulta-pecas";
import {getAllFa} from "../../../../../lib/lib-fabricante";

export default function ProdutoView ({prod}) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>Carregando...</p>;
  }
  console.log(prod)
  return (
    <>
      <h1>Olaaaaa {prod.nome}</h1>
      <p>
        {prod.especificacao}
      </p>
    </>
  )
}
export const getStaticPaths = async () => {
  const paths = [];
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
