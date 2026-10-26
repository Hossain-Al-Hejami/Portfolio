import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const links = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8">
      <div className="container">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Have an opportunity in mind?
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-black md:text-6xl">
              Let's build something
              <br />
              <span className="text-gradient">
                great together.
              </span>
            </h2>
          </div>

          <a
            href="mailto:hossainalhejami03@gmail.com"
            className="group inline-flex items-center gap-3 border-b-2 border-black pb-2 text-lg font-semibold text-black transition-colors hover:border-purple-500 hover:text-purple-500"
          >
            Get in touch
            <ArrowUpRight
              size={22}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-10"
        >
          {links.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="nav-link py-2 text-base font-medium text-black transition-colors hover:text-gray-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-8 sm:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gradient">
              Hossain Al-Hejami.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Hossain-Al-Hejami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/hussein-al-hejami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}