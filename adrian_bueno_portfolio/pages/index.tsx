import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <div></div>
      </main>
      <AboutMe />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}
