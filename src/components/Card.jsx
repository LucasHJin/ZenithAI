import React from 'react';
import '../styles/Card.css'
import Button from './Button.jsx'
import PropTypes from 'prop-types';


const Card = ({ title, date, description, source, tags, link, width, height, image }) => {
  return (
    <>
      <div 
        className="card" 
        style={{ width: width ? `${width}vw` : 'auto', height: height ? `${height}vh` : 'auto' }}
      >
        <div className="title">{title}</div>
        <div className="date">{date}</div>
        <div className="source">{source}</div>
        <div className="link">{link}</div>
        <div className="description">{description}</div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span> //TO BE CHANGED SO THAT IT PUTS +9 or whateve remaining number
          ))}
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.node), //node = renderable component
    link: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.string,
};

Card.defaultProps = {
  title: "CARD TITLE",
  date: "January 1, 2024",
  description: "Lorem ipsum odor amet, consectetuer adipiscing elit. In luctus ad neque inceptos mauris sit. Dapibus libero sem commodo iaculis est. Porta fusce per aliquam ultricies pharetra. Feugiat mauris interdum vehicula etiam senectus velit montes facilisis nisl. Sapien ad senectus eros litora ad morbi rhoncus interdum ullamcorper! Elementum dui efficitur inceptos ultrices tempor sapien lectus nulla. ",
  source: "N/A",
  tags: [],
  link: "NO LINK",
  width: 35,
  height: 25,
  image: "NO IMAGE"
}

export default Card;