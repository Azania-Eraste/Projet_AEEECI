import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Acceuil"
import EvenementsPage from "./Pages/EventPage";
import ContactPage from "./Pages/ContactPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Equipe from "./Pages/EquipePage";
import ActuPage from "./Pages/ActuPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Evenements" element={<EvenementsPage />} />
        <Route path="/Actualites" element={<ActuPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Se Connecter" element={<Login onSubmit={(data) => console.log(data)} />} />
        <Route path="/S'inscrire" element={<Signup onSubmit={(data) => console.log(data)} />} />
      </Routes>
    </Router>
  )
}
