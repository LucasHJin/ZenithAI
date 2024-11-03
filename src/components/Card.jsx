import React from 'react';
import '../styles/card.css'
import Button from './Button.jsx'
import PropTypes from 'prop-types';


const Card = ({ title, date, summary, source, tags, link, width, height, image }) => {
  return (
    <>
        <div>CARD</div>
    </>
  );
}

Card.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    summary: PropTypes.string,
    source: PropTypes.string,
    tags: PropTypes.array,
    link: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
};

Card.defaultProps = {
  title: "CARD TITLE",
  date: "January 1, 2024",
  summary: "SUMMARY",
  source: "N/A",
  tags: [],
  link: "NO LINK",
  width: 10,
  height: 8,
  image: "NO IMAGE"
}

export default Card;