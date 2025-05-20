import { useState } from "react";
import FormContact from "./FormContact";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé : " + message);
  };

  return (
    <div className="pt-30 min-h-screen bg-[#fefdf9] flex flex-col items-center justify-center px-4 py-10 text-[#1d1f1d]">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Côté gauche */}
        <div>
          <span className="text-sm text-yellow-600 font-semibold">Bientôt Disponible</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
            Nous construisons <br /> quelque chose <br /> d'incroyable
          </h1>
          <p className="mt-6 text-gray-700">
            Notre site est en construction, nous travaillons dur pour vous offrir une expérience exceptionnelle très bientôt.
          </p>

          {/* Progression */}
          <div className="mt-8">
            <p className="font-semibold">Progression</p>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div className="w-[65%] h-full bg-yellow-600 rounded-full"></div>
            </div>
            <p className="mt-1 text-sm font-medium text-right">65%</p>
          </div>

          {/* Réseaux sociaux */}
          <p className="mt-8 font-semibold">Rejoignez-nous</p>
          <div className="flex space-x-4 mt-2 text-xl text-gray-600">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Côté droit */}
        <FormContact message={message} setMessage={setMessage} onSubmit={handleSubmit} />

      </div>
    </div>
  );
}
