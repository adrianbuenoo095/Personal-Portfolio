import Head from "next/head";
import { Imprima, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Bueno Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <Header/>
      <main className={styles.main}>
        <div className={styles.description}></div>
      </main>
      <Footer/>
    </>
  );
}
