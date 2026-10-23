import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<h1>404 - Page Not Found</h1>}
          />
        </Routes>
      </main>
    </div>
  )
}
