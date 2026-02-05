import { motion } from "framer-motion";
import aeeeciLogo from "../asset/logo_AEEECI.jpg"; // Assure-toi que le logo est bien dans ce chemin

export default function AboutSection() {
  return (
    <section className="w-full bg-[#fefdf9] py-35 px-4 md:px-20" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Logo avec animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img src={aeeeciLogo} alt="Logo AEEECI" className="w-64 h-auto rounded-2xl shadow-xl" />
        </motion.div>

        {/* Texte avec animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-gray-800">À propos de l’AEEECI</h2>
          <p className="text-gray-600 leading-relaxed">
            L’Association des Éclaireures et Éclaireurs Evangéliques de la Côte d’Ivoire (AEEECI)
            est une organisation de jeunesse chrétienne dédiée à l’épanouissement personnel,
            spirituel et social des jeunes en Côte d’Ivoire. Fondée sur les principes du scoutisme
            évangélique, l’AEEECI vise à former des leaders engagés, responsables et solidaires,
            prêts à contribuer positivement à la société.
          </p>
          <p className="text-gray-600 leading-relaxed">
            À travers des conférences, des forums, des activités sociales et des projets
            communautaires, l’AEEECI œuvre à renforcer les liens entre ses membres et à
            bâtir une jeunesse engagée, responsable et fière de ses origines.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
