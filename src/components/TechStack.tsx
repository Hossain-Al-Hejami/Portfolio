
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
} from "react-icons/fa";

import {
  Code2,
  Monitor,
  Database,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

type Technology = {
  name: string;
  icon: IconType;
};

const categories = [
  {
    number: "01",
    title: "Frontend",
    description: "Crafting modern web experiences.",
    icon: Monitor,
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    number: "02",
    title: "Backend & Desktop",
    description: "Building logic and applications.",
    icon: Code2,
    technologies: [
      { name: "C#", icon: FaCode },
      { name: ".NET", icon: SiDotnet },
      { name: "Avalonia UI", icon: FaCode },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with structured data.",
    icon: Database,
    technologies: [
      { name: "SQL", icon: FaDatabase },
      { name: "SQL Server", icon: FaDatabase },
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Tools that power my development.",
    icon: Terminal,
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vite", icon: SiVite },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24">
      <div className="container">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-gradient mb-4 text-lg font-bold uppercase tracking-widest">
            The Toolbox
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            The tools behind <br />
            <span className="text-gradient">
              my code.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            From frontend interfaces to backend logic,
            these are the technologies I use to bring
            ideas to life.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.number}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 md:p-9"
              >
                {/* Category Header */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-500">
                    <CategoryIcon size={24} />
                  </div>

                  <span className="text-sm font-bold text-gray-300">
                    / {category.number}
                  </span>
                </div>

                {/* Category Text */}
                <h3 className="mb-2 text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mb-7 text-sm text-gray-500">
                  {category.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech: Technology) => {
                    const TechIcon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white"
                      >
                        <TechIcon
                          size={19}
                          className="text-gray-600"
                          aria-hidden="true"
                        />

                        <span className="text-sm font-semibold text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative arrow */}
                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                  className="absolute bottom-7 right-7 text-gray-300 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
