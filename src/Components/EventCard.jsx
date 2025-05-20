import { useState } from "react";
import { motion } from "framer-motion";
import PaymentModal from "./PaymentModal";

export default function EventCard({ title, description, date, time, location, participants, delay = 0 }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <ul className="text-sm text-gray-500 space-y-1 mb-4">
          <li><strong>📍 Lieu :</strong> {location}</li>
          <li><strong>📅 Date :</strong> {date}</li>
          <li><strong>⏰ Heure :</strong> {time}</li>
          <li><strong>🧍‍♀️ Participants :</strong> {participants}</li>
        </ul>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          S'inscrire
        </button>
      </motion.div>

      <PaymentModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        eventTitle={title}
      />
    </>
  );
}
