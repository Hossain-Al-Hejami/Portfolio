export default function About() {
    return (
        <section id="about">
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

                <div className="">
            
                </div>
            </div>
        </section>
    );
}
