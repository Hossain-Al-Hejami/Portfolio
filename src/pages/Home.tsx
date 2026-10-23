import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
    return (
        <>
            <div className="h-screen">
                <Hero />
                <TrustedBy />
            </div>
            <TechStack />
            <About />
            <Experience />

            <Footer />
        </>
    );
}