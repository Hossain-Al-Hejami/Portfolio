import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={<h1>404 - Page Not Found</h1>}
          />
        </Routes>
      </main>
    </div>
  )
}
