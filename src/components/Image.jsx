import PropTypes from 'prop-types';

function Image({ src, className = '', bgColor = "#4D317F" }) {
  return (
    <div
      className={className}
      style={{ backgroundColor: bgColor }}
    >
      <img
        alt=""
        src={src}
      />
    </div>
  )
}

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  className: PropTypes.string,
}