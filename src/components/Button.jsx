import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/button.css'

//button component for all buttons on sight -> pass specific values with props

const Button = ({ text, color, text_color, height, width, className, toPage }) => {

  return (
    <Link to={toPage} style={{ textDecoration: 'none', color: 'inherit' }}>
      <button 
        className={`styled-button ${className}`} //apply prop classNames (so that parent component can modify)
        style={{ 
          backgroundColor: color, 
          color: text_color, 
          height: `${height}vh`, 
          width: `${width}vw`,
          border: `2px solid `+text_color, 
        }}
      >
        {text || "BUTTON"}
      </button>
    </Link>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    text_color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    toPage: PropTypes.string,
};

Button.defaultProps = {
    text: 'BUTTON',
    color: '#000000',
    text_color: '#FFFFFF',
    height: 5,
    width: 5,
    className: '',
    toPage: '',
};

export default Button;