import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";

export default function Home() {
    return (
        <>
            <div className="h-screen">
                <Hero />
                <TechStack />
            </div>
            <About />
            <Experience />
        </>
    );
}