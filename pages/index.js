import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Container,
  Header,
  Hero,
  Carousel,
  Pricing,
  Footer,
} from "../components/maker-preLaunch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header />
        <Hero />
        <Carousel />
        <Pricing />
        <Footer />
      </Container>
    </>
  );
}

{
  /* <div className={styles.container} >
    <div className={styles.header}> header </div>
    <div className={styles.hero}> hero </div>
    <div className={styles.side}> side </div>
    <div className={styles.footer}> footer </div>
</div> */
}
