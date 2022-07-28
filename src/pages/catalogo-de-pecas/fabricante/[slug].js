import {getAllFabricantes} from "../../../lib/api-consulta-pecas";
import {useRouter} from "next/router";

export default function FabricanteView ({user}) {
  console.log(user)
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <h1>Fabricantes</h1>
      <strong>{user.name}</strong><br/>
      <strong>{user.description}</strong>
      <br/>

      <br/>
      categorias:
      <ul>
        {user.categorias.map(fa => (
          <li key={fa.id}>{fa.name}</li>
        ))}
      </ul>
      <br/>
      Grupos:
      <ul>
        {user.groups.map(fa => (
          <li key={fa.id}>{fa.name}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch(`https://62bf404c0bc9b125616a7feb.mockapi.io/v1/fabricantes`);
  // const response = await fetch(`https://api.github.com/orgs/rocketseat/members`);
  const data = await response.json();

  const paths = data.map(member => {
    return { params: { slug: String(member.slug) } }
  });

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const response = await fetch(`https://62bf404c0bc9b125616a7feb.mockapi.io/v1/fabricantes/${slug}`);
  const data = await response.json();
  return {
    props: {
      user: data,
    },
    revalidate: 10,
  }
}
