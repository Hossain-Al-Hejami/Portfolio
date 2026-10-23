import { FaGithub, FaLinkedin } from "react-icons/fa";


const links = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div>
                    <div>
                        <h1 className="text-gradient text-7xl font-bold uppercase text-center">Hossain Al-hejami</h1>
                        <div className="border-b border-primary mb-10 mt-10" />
                    </div>
                    <div>
                        <div className="flex justify-center gap-10 mb-20">
                            {links.map((link) => (
                                <a
                                    key={link.to}
                                    href={link.to}
                                    className="relative py-2 text-xl font-medium transition-transform duration-300 hover:text-gray-400"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    © {new Date().getFullYear()} <span className="text-gradient">Hossain.</span> All rights reserved.
                                </p>
                            </div>
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://github.com/Hossain-Al-Hejami"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit my GitHub profile"
                                    className="text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:text-black"
                                >
                                    <FaGithub size={22} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/hussein-al-hejami"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit my LinkedIn profile"
                                    className="text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:text-[#0A66C2]"
                                >
                                    <FaLinkedin size={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}