import EventCard from "./EventCard";

const events = [
  {
    title: "Stage DJiran 1er Session",
    date: "30 & 31 Mai 2025",
    time: "9h00 à 17h00",
    location: "Yamoussokro",
    participants: "140",
    description: "Un stage de formation pour la préparations de nos chefs. Cette Session est pour les divisions de l'interieur",
  },
  {
    title: "Stage DJiran 2er Session",
    date: "06 & 07 Juin 2025",
    time: "9h00 à 17h00",
    location: "Abidjan",
    participants: "200",
    description: "Un stage de formation pour la préparations de nos chefs. Cette Session est pour les divisions proche d'abidjan",
  },
];

export default function EventSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20" id="events">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          📅 Prochains Événements
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <EventCard key={i} {...event} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
