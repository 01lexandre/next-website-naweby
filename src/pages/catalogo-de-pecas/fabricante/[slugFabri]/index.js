import {useRouter} from "next/router";
import {getAllFa, getOneFa} from "../../../../lib/lib-fabricante";

export default function FabricanteView ({user}) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <h1>Fabricantes</h1>
      <strong>{user.fantasia}</strong><br/>
      <p>
        {user.quemsomos}
      </p>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllFa().map(member => {
    return { params: { slugFabri: String(member.slug) } }
  });
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { slugFabri } = context.params;
  const data = getOneFa(slugFabri);
  return {
    props: {
      user: data,
    },
    revalidate: 10,
  }
}
