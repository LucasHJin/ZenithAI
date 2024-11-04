import React from 'react';
import '../styles/Card.css'
import PropTypes from 'prop-types';

//make clicking on card lead to a new page

const formatLinkText = (url) => {
  return url.replace(/^(https?:\/\/)?(www\.)?/, ''); //remove protocol and www
};

const Card = ({ title, date, description, source, tags, link, width, height, id }) => {
  const handleClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <>
      <div 
        className="card" 
        onClick={handleClick} //navigate to details page on click
        style={{ width: width ? `${width}vw` : 'auto', height: height ? `${height}vh` : 'auto' }}
      >
        <div className="title">{title}</div>
        <div className="date">{date}</div>
        <div className="source">{source}</div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          onClick={(e) => e.stopPropagation()}
        >{formatLinkText(link)}</a>
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
    id: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "CARD TITLE",
  date: "January 1, 2024",
  description: "Lorem ipsum odor amet, consectetuer adipiscing elit. In luctus ad neque inceptos mauris sit. Dapibus libero sem commodo iaculis est. Porta fusce per aliquam ultricies pharetra. Feugiat mauris interdum vehicula etiam senectus velit montes facilisis nisl. Sapien ad senectus eros litora ad morbi rhoncus interdum ullamcorper! Elementum dui efficitur inceptos ultrices tempor sapien lectus nulla. ",
  source: "N/A",
  tags: [],
  link: "https://www.google.com",
  width: 35,
  height: 25,
  id: "1"
}

export default Card;