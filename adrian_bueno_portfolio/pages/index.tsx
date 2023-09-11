import AboutMe from "@/components/About";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import Navigation from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/common/Footer";

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
