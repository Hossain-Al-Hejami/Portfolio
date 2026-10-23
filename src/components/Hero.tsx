import GradientButton from "../components/GradientButton";
import { ArrowRight } from "lucide-react";
import SimpleButton from "./ArrowButton";

export default function Hero() {
    return (
        <section className="container pb-20">
            <div className="flex gap-10">
                <div className="flex flex-col justify-center">
                    <div className="w-10/11 mb-10">
                        <h1 className="text-7xl font-extrabold mb-10">
                            <span className="text-gradient">
                                Building software. <br />
                            </span>
                            solving problems. <br />
                            Always learning.
                        </h1>
                        <p className="text-xl text-gray-500">
                            Hi! I'm Hossain, a software developer based in Sweden. 
                            I build modern applications and turn ideas into real-world solutions.
                        </p>
                    </div>
                    <div className="flex gap-15 items-center">
                        <GradientButton
                            text="Contact me"
                            href="/Hossain-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <SimpleButton
                            text="Download CV"
                            href="/Hossain-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={<ArrowRight size={24} />}
                        />
                    </div>
                </div>
                <div>
                    <img src="/src/assets/portrait.png" className="w-150 h-auto" alt="" />
                </div>
            </div>
        </section>

    )
}
