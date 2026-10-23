const links = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#contact", label: "Contact" },
];

export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <nav className="container">
        <div className="flex h-20 items-center justify-between gap-6">
          <a
            href="#home"
            className="shrink-0 text-3xl font-bold tracking-tight text-black"
          >
            Hossain<span className="text-gradient">.</span>
          </a>
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="relative py-2 text-lg font-medium transition-transform duration-300 hover:text-gray-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
