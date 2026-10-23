import image1 from "../assets/about-1.jpg";
import image2 from "../assets/about-2.jpg";
import image3 from "../assets/about-3.jpg";
import image4 from "../assets/about-4.jpg";

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="container">
                <div className="grid items-start md:grid-cols-2">
                    {/* Left side */}
                    <div>
                        <p className="text-gradient mb-4 text-2xl font-bold uppercase">
                            Software Developer
                        </p>

                        <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">
                            That's me!
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl leading-relaxed text-gray-600">
                            I'm a software development student with a background
                            in web development. I enjoy building practical
                            applications, solving real-world problems, and
                            exploring new technologies. Alongside my studies,
                            I also run my own business, Artifex AH.
                        </p>
                    </div>
                </div>
                <div className="mt-20 grid gap-5 md:grid-cols-[1fr_1.5fr_1fr]">
                    <div className="overflow-hidden">
                        <img
                            src={image1}
                            alt="Mobile application project"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <img
                            src={image2}
                            alt="Software development workspace"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid gap-5 md:min-h-0 md:grid-rows-2">
                        <div className="overflow-hidden">
                            <img
                                src={image3}
                                alt="Development desk setup"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={image4}
                                alt="Team collaboration"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
