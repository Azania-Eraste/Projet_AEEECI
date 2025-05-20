import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-green-900 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-evenly px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-1">
          {/* Logo arrondi */}
          <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-500 shadow-sm animate-pulse-soft animate-float">
            <img
              src="src/asset/logo_AEEECI.jpg"
              alt="Logo de l'aeeeci"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Texte à droite du logo */}
          <h1 className="text-xl font-semibold text-white">AEEECI</h1>
        </div>


        {/* Menu centré */}
        <nav className="flex-2 hidden md:flex justify-center space-x-8">
          <a href="/" className="text-yellow-500 hover:text-yellow-700 py-2 px-4 ">Accueil</a>
          <a href="/evenements" className="text-yellow-500 hover:text-yellow-700 py-2 px-4 ">Évènements</a>
          <a href="/Contact" className="text-yellow-500 hover:text-yellow-700 py-2 px-4 ">Contact</a>
        </nav>

        {/* Bouton à droite */}
        <div className="flex-1 flex justify-end ">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Connexion
          </button>
        </div>
      </div>
    </header>
  );
}
