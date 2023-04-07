import Head from "next/head";
import styles from "@/styles/index.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Bueno Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Navigation />
      <Header />
      <main className={styles.main}>
        <div className={styles.description}></div>
      </main>
      <AboutMe />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}
