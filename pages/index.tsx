import Head from 'next/head'
import Hero from '../components/Hero'
import Header from '../components/Header'

const style = {
  wrapper: ``,
}

export default function Home() {

  return (
    <div className={style.wrapper}>
      <Head>
        <title>Minticia</title>
      </Head>
      <Header />
      <Hero />
    </div>
  )
}
