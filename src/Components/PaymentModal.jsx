// components/PaymentModal.jsx
import React from 'react';

export default function PaymentModal({ visible, onClose, eventTitle }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Paiement - {eventTitle}
        </h2>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Choisissez un moyen de paiement :
        </p>

        <div className="flex flex-col space-y-3">
          <button className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
            Orange Money
          </button>
          <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Moov Money
          </button>
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Carte Bancaire
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-500 hover:underline block mx-auto"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
