import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/button.css'


//button component for all buttons on sight -> pass specific values with props

//creating a custom styled button for animations
const StyledButton = styled.button`
  transition: all 0.3s ease;

  /* apply the passed-in styles for the button */
  background-color: ${(props) => props.color};
  color: ${(props) => props.text_color};
  height: ${(props) => `${props.height}vh`};
  width: ${(props) => `${props.width}vw`};
  border: ${(props) => (props.option2 ? 'none' : `2px solid ${props.border_color}`)};
  position: relative;

  /* hover effect */
  ${(props) =>
    !props.option2 &&
    `
    &:hover { /* only do this hover if not option2 */
      background-color: ${props.text_color};
      color: ${props.color};
      border-color: ${props.border_color};
    }
    `
  }

  ${(props) =>
    props.option2 &&
    `
    &::after {
      content: "";
      position: absolute;
      width: 0; /* start with width 0 */
      height: 2px; 
      background-color: ${props.text_color};
      left: 50%; /* start at the center */
      bottom: 0;
      transform: translateX(-50%); /* move it back by 50% of its width to center it */
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 65%; /* 65% width */
    }
  `}
`;

const Button = ({ text, color, text_color, border_color, height, width, className, toPage, option2 }) => {
  //use custom StyledButton instead of normal button
  return (
    <Link to={toPage} style={{ textDecoration: 'none', color: 'inherit' }}>
      <StyledButton
        className={`styled-button ${className}`}
        color={color}
        text_color={text_color}
        border_color={border_color}
        height={height}
        width={width} 
        option2={option2} /* option 2 is for buttons with underline */
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
    border_color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    className: PropTypes.string,
    toPage: PropTypes.string,
    option2: PropTypes.bool,
};

Button.defaultProps = {
    text: 'BUTTON',
    color: '#000000',
    text_color: '#FFFFFF',
    border_color: '#D3D3D3',
    height: 5,
    width: 5,
    className: '',
    toPage: '/',
    option2: false,
};

export default Button;