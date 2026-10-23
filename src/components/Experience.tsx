import { ArrowUpRight, BookOpen, BriefcaseBusiness } from "lucide-react";

type ExperienceItem = {
    title: string;
    subtitle: string;
    date?: string;
    href?: string;
};

const education: ExperienceItem[] = [
    {
        title: "JENSEN Yrkeshögskola",
        subtitle: "Software Development",
        date: "Aug 2026 - Jul 2028",
    },
    {
        title: "Self-Directed Learning",
        subtitle: "Web Development & Programming",
        date: "Jan 2020 - Current",
    },
    {
        title: "Gripen Gymnasium",
        subtitle: "Social & Behavioural Science",
        date: "Aug 2019 - Jun 2022",
    },
];

const workExperience: ExperienceItem[] = [
    {
        title: "Artifex AH",
        subtitle: "Founder",
        date: "Feb 2020 - Current",
    },
    {
        title: "DSV Haulage AB",
        subtitle: "Delivery Driver",
        date: "Dec 2024 — Okt 2026 ",
    },
    {
        title: "DB Schenker AB",
        subtitle: "Terminal Worker",
        date: "Jun 2023 — Dec 2024 ",
    },
];

function ExperienceRow({
    title,
    subtitle,
    date,
    href,
}: ExperienceItem) {
    const content = (
        <div className="group flex items-start justify-between gap-4 border-b border-gray-200 py-8">
            <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                    {title}
                </h3>

                <div className="mt-2 flex flex-wrap justify-between items-center gap-x-4 gap-y-1 text-sm text-gray-500 md:text-base">
                    <span>{subtitle}</span>
                    {date && <span><span className="text-gradient">• </span>{date}</span>}
                </div>
            </div>

            {href && (
                <ArrowUpRight
                    size={24}
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
            )}
        </div>
    );

    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            {content}
        </a>
    ) : (
        content
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

                    {/* Education */}
                    <div>
                        <div className="mb-12 flex items-center gap-4">
                            <BookOpen
                                size={36}
                                className="text-purple-500"
                                aria-hidden="true"
                            />
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Education
                            </h2>
                        </div>

                        <div>
                            {education.map((item) => (
                                <ExperienceRow
                                    key={item.title}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div>
                        <div className="mb-12 flex items-center gap-4">
                            <BriefcaseBusiness
                                size={36}
                                className="text-pink-500"
                                aria-hidden="true"
                            />
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                                Work Experience
                            </h2>
                        </div>

                        <div>
                            {workExperience.map((item) => (
                                <ExperienceRow
                                    key={item.title}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
