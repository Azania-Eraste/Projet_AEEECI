import { motion } from 'framer-motion';
import PresentationCard from '../Components/PresentationCard.jsx';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import CN from '../asset/CN.jpg';
import CNA from '..//asset/CNA.jpg';


export default function Equipe() {
  // Sample data for team members (replace with real data)
  const nationalCommissioner = {
    name: "Amoikon Amoikon Jeriel",
    role: "Commissaire National",
    description:
      "Le Caire Amoikon nouveau commissaire national de l'AEEECI pour le mandat 2025-2027",
    image: CN,
  };

  const deputyCommissioners = [
    {
      id: 1,
      name: "Aminata Kouassi",
      role: "Commissaire National Adjoint",
      description: "Responsable des programmes de formation et de la coordination régionale.",
      image: CNA,
    },
    {
      id: 2,
      name: "Jean Dupont",
      role: "Commissaire National Adjoint",
      description: "En charge des partenariats et des relations internationales.",
      image: CNA,
    },
    {
      id: 3,
      name: "Fatima Koné",
      role: "Commissaire National Adjoint",
      description: "Supervise les activités jeunesse et les programmes éducatifs.",
      image: CNA,
    },
    {
      id: 4,
      name: "Moussa Traoré",
      role: "Commissaire National Adjoint",
      description: "Gère les finances et la logistique des événements nationaux.",
      image: CNA,
    },
  ];

  const assistantCommissioners = [
    {
      id: 1,
      name: "Sophie N'Guessan",
      role: "Commissaire National Assistant",
      description: "Support aux programmes régionaux.",
    },
    {
      id: 2,
      name: "Éric Kouadio",
      role: "Commissaire National Assistant",
      description: "Coordination des activités locales.",
    },
    // Add more assistants as needed
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <>
    <Header />
    <motion.div
      className=" pt-25 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Section 1: Commissaire National */}
      <motion.section className="mb-16" variants={sectionVariants}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={nationalCommissioner.image}
              alt={nationalCommissioner.name}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">{nationalCommissioner.name}</h2>
            <h3 className="text-xl text-gray-600 mb-4">{nationalCommissioner.role}</h3>
            <p className="text-gray-600">{nationalCommissioner.description}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Commissaires Nationaux Adjoints */}
      <motion.section className="mb-16" variants={sectionVariants}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Commissaires Nationaux Adjoints</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deputyCommissioners.map((deputy) => (
            <PresentationCard
              key={deputy.id}
              image={deputy.image}
              title={deputy.name}
              subtitle={deputy.role}
              description={deputy.description}
            />
          ))}
        </div>
      </motion.section>

      {/* Section 3: Commissaires Nationaux Assistants */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Commissaires Nationaux Assistants</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {assistantCommissioners.map((assistant) => (
            <PresentationCard
              key={assistant.id}
              title={assistant.name}
              subtitle={assistant.role}
              description={assistant.description}
            />
          ))}
        </div>
      </motion.section>
    </motion.div>
    <Footer />
  </>
  );
}