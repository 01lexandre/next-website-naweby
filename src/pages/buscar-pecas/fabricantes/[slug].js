
export default function Fabricante({ posts }) {
  return (
    <div>
      {typeof posts}
      {JSON.stringify(posts)}
    </div>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  console.log(params, params?.slug)
  const res = await fetch('https://62bf404c0bc9b125616a7feb.mockapi.io/v1/fabricantes/'+params?.slug)
  const posts = await res.json()

  return {
    props: {
      posts
    },
    revalidate: 10,
  };
}
//
export async function getStaticPaths() {
  const res = await fetch('https://62bf404c0bc9b125616a7feb.mockapi.io/v1/fabricantes')
  const posts = await res.json()

  const paths = posts.filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}
