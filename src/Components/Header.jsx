import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icônes
import aeeeciLogo from "../asset/logo_AEEECI.jpg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-green-900 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo et nom */}
        <a href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-500 shadow-sm animate-pulse-soft animate-float">
            <img
              src={aeeeciLogo}
              alt="Logo de l'aeeeci"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h1 className={`text-xl font-semibold transition-all duration-300 ${scrolled ? "text-white" : "text-yellow-500"}`}>
            AEEECI
          </h1>
        </a>


        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-yellow-500 hover:text-yellow-700 py-2 px-4">
            Accueil
          </a>
          <a href="/Equipe" className="text-yellow-500 hover:text-yellow-700 py-2 px-4">
            Equipe
          </a>
          <a href="/Evenements" className="text-yellow-500 hover:text-yellow-700 py-2 px-4">
            Évènements
          </a>
          <a href="/Actualites" className="text-yellow-500 hover:text-yellow-700 py-2 px-4">
            Actualités
          </a>
          <a href="/Contact" className="text-yellow-500 hover:text-yellow-700 py-2 px-4">
            Contact
          </a>
        </nav>

        {/* Connexion */}
        <div className="hidden md:flex">
          <a
            href="/Se Connecter"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Connexion
          </a>
        </div>

        {/* Menu Mobile - Icône Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Slide */}
      {menuOpen && (
        <div className="md:hidden bg-green-900 px-6 py-4 space-y-4">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-yellow-500 hover:text-yellow-700"
          >
            Accueil
          </a>
          <a
            href="/evenements"
            onClick={() => setMenuOpen(false)}
            className="block text-yellow-500 hover:text-yellow-700"
          >
            Évènements
          </a>
          <a
            href="/Contact"
            onClick={() => setMenuOpen(false)}
            className="block text-yellow-500 hover:text-yellow-700"
          >
            Contact
          </a>
          <a
            href="/Se Connecter"
            onClick={() => setMenuOpen(false)}
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
          >
            Connexion
          </a>
        </div>
      )}
    </header>
  );
}
