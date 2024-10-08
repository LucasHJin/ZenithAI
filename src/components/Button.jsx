import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/button.css'


//button component for all buttons on sight -> pass specific values with props

//creating a custom styled button for animations
const StyledButton = styled.button`
  transition: all 0.3s ease;

  /* Apply the passed-in styles for the button */
  background-color: ${(props) => props.color};
  color: ${(props) => props.text_color};
  height: ${(props) => `${props.height}vh`};
  width: ${(props) => `${props.width}vw`};
  border: 2px solid ${(props) => props.text_color};

  /* Hover effect */
  &:hover {
    background-color: ${(props) => props.text_color};
    color: ${(props) => props.color};
    border-color: ${(props) => props.color};
  }
`;

const Button = ({ text, color, text_color, height, width, className, toPage }) => {
  //use custom StyledButton instead of normal button
  return (
    <Link to={toPage} style={{ textDecoration: 'none', color: 'inherit' }}>
      <StyledButton
        className={`styled-button ${className}`}
        color={color}
        text_color={text_color}
        height={height}
        width={width}
      >
        {text || "BUTTON"}
      </StyledButton>
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
    toPage: '/',
};

export default Button;