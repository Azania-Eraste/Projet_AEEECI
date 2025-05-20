import { Typewriter } from 'react-simple-typewriter';
import rassemblement from '../asset/Scout.jpg';

export default function Hero() {
  return (
    <section
      className="h-screen text-white flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${rassemblement})` }}
    >
      <div className="bg-black/30 p-6 rounded-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenue à l’
          <span className="text-amber-500 px-3 py-1 rounded-full bg-accent/10">
            AEEECI
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium">
          <Typewriter
            words={[
              "Association des Éclaireurs et Éclaireuses de Côte d'Ivoire",
              'Éclaireurs de bonne humeur, toujours SERVIABLE !',
              'Jésus notre premier CHEF !!!',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </section>
  );
}
