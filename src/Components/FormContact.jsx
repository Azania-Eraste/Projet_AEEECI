export default function FormContact({ message, setMessage, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Restons en Contact</h2>
      <p className="text-sm text-gray-600">
        Vous avez des questions ou vous souhaitez être informé ? Envoyez-nous un message et nous vous répondrons.
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nom</label>
        <input type="text" placeholder="Votre Nom" className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="text" placeholder="Votre Email" className="w-full mt-1 px-3 py-2 bg-gray-100 rounded-md" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 rounded-md transition"
      >
        Envoyer le Message
      </button>
    </form>
  );
}
