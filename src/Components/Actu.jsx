import { useState } from "react";
import EventCard from "./EventCard";

const allEvents = [
  { id: 1, title: "Rentrée scout Nationale", date: "2025-05-18", description: "Rentrée nationale de l'AEEECI", image: "/events/ag.jpg", type: "Rencontre" },
  { id: 2, title: "Investiture Nationale", date: "2025-05-18", description: "Investiture des membres du BN de l'AEEECI", image: "/events/hackathon.jpg", type: "Rencontre" },
  { id: 3, title: "Camp", date: "2025-08-15", description: "Camp de formation", image: "/events/camp.jpg", type: "Formation" },
];

export default function Actu() {
  const [filter, setFilter] = useState("Tous");

  const types = ["Tous", ...new Set(allEvents.map(e => e.type))];
  const filteredEvents = filter === "Tous" ? allEvents : allEvents.filter(e => e.type === filter);

  return (
    <div className="pt-30 min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Nos Évènements</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {types.map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full border ${
              filter === type ? "bg-green-900 text-yellow-500" : "bg-white text-gray-800"
            }`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
