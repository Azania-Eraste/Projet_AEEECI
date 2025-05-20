import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from './ButtonForm.jsx';

export default function PresentationCard({ image, title, subtitle, description, buttonText, onButtonClick }) {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-white shadow-xl rounded-xl p-6 text-center flex flex-col items-center"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="w-32 h-32 rounded-full mb-4 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      )}
      <motion.h3
        className="text-lg font-semibold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p
          className="text-sm text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.p
        className="text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {description}
      </motion.p>
      {buttonText && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button type="button" onClick={onButtonClick} className="mt-4">
            {buttonText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}

PresentationCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

PresentationCard.defaultProps = {
  image: null,
  subtitle: null,
  buttonText: null,
  onButtonClick: () => {},
};