import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Content from '../components/content'
import Content2 from '../components/content2'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tauil -  GT</title>
        <script src="https://kit.fontawesome.com/a103da23b8.js" crossorigin="anonymous"></script>
      </Head>
      <Header/>
      <Content/>
      <Content2/>
    </div>
  )
}
