// import Head from "next/head";
// import Image from "next/image";
import Navigation from "../components/news-homepage/Navigation";
// import {Navigation, Hero, TopNews, SideNews} from "../components/news-homepage/Navigation";

import Hero from "../components/news-homepage/Hero";
import SideNews from "../components/news-homepage/SideNews";
import {
  Page,
  TopSection,
  BottomSection,
} from "../components/news-homepage/Containers";
import TopNews from "../components/news-homepage/TopNews";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Page>
      <Navigation />
      <Hero />
      <SideNews />
      <TopNews />
    </Page>
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
