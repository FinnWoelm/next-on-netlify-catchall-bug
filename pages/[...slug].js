const Page = () => {
  return null
}

export async function getStaticProps({params: {slug}}) {
  console.log(`slug = ${slug}`)

  return {
    props: {}
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export default Page

  