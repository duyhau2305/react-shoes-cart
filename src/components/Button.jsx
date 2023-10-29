import PropTypes from 'prop-types';

function Button({ buttonText, className = '', bgColor = '#f6c90e', icon = '', onClick }) {
  return (
    <div 
      className={className}
      style={{ 
        backgroundColor: bgColor,
      }}
      onClick={onClick}
    >
      {icon ? (
        <img src={icon} alt="" />
      ) : (
        <>{buttonText}</>
      )}
      
    </div>
  )
}

export default Button

Button.propTypes = {
  buttonText: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}