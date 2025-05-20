import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Acceuil"
import EvenementsPage from "./Pages/EventPage";
import ContactPage from "./Pages/ContactPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Evenements" element={<EvenementsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}
