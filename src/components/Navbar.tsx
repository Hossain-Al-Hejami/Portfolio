import { NavLink } from "react-router"

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <nav className="flex gap-6 bg-slate-900 p-5">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-blue-400"
              : "text-white hover:text-blue-400"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
