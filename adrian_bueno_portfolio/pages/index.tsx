import Footer from "@/components/common/Footer";
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
      <AboutMe />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}
