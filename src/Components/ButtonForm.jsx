import PropTypes from 'prop-types';

export default function Button({ type, onClick, children, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 rounded-md transition ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};