import { useState } from 'react';
import Input from '../Components/InputForm';
import Button from '../Components/ButtonForm';

export default function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800">Connexion</h2>
        <p className="text-sm text-gray-600">
          Connectez-vous à votre compte pour accéder au activités.
        </p>

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre Email"
          required
        />

        <Input
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Votre Mot de passe"
          required
        />

        <Button type="submit">Se Connecter</Button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Pas de compte ?{' '}
          <a href="/S'inscrire" className="text-yellow-600 hover:underline">
            Inscrivez-vous
          </a>
        </p>
      </form>
    </div>
  );
}