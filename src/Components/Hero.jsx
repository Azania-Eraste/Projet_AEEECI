import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenue à l’
          <span className="text-amber-500 px-3 py-1 rounded-full bg-accent/10">
            AEEECI
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium">
          <Typewriter
            words={[
              "Association des Éclaireurs et Éclaireuses de côte d'ivoire",
              'Éclaireurs de bonne humeur toujours SERVIABLE !',
              'Jésus notre premier CHEF !!!',
            ]}
            loop={0} // 0 = boucle infinie
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </section>
  )
}
