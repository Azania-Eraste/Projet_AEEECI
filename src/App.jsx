import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Acceuil"
import EvenementsPage from "./Pages/EventPage";
import ContactPage from "./Pages/ContactPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Evenements" element={<EvenementsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Se Connecter" element={<Login onSubmit={(data) => console.log(data)} />} />
        <Route path="/S'inscrire" element={<Signup onSubmit={(data) => console.log(data)} />} />
      </Routes>
    </Router>
  )
}
