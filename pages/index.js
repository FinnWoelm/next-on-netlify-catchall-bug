import Link from 'next/link'

function IndexPage() {
  return <Link href='/mypage'><a>My page</a></Link>
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default IndexPage