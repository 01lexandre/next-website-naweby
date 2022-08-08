import {useRouter} from "next/router";
import {searchProduto} from "../../../../../lib/api-consulta-pecas";
import {getAllFa, getAllStaticProdutos, getOneFa} from "../../../../../lib/lib-fabricante";

export default function ProdutoView ({prod}) {
  const { isFallback, route } = useRouter();
  if (isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <h1>Olaaaaa {prod.nome}</h1>
      <p>
        {prod.especificacao}
      </p>
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
