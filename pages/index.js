import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Content from "../components/content";
import Content2 from "../components/content2";
import Content3 from "../components/content3";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="GTiconbig6.png" />
        <title>Tauil - GT</title>
      </Head>
      <Header />
      <Content />
      <Content2 />
      <Content3 />
      <Footer />
    </div>
  );
}
