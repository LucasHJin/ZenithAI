import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css'
import PropTypes from 'prop-types';


const formatLinkText = (url) => {
  return url.replace(/^(https?:\/\/)?(www\.)?/, ''); //remove protocol and www
};

const Card = ({ title, date, description, source, tags, link, width, height, id, info }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/study/${id}`, {
      state: { info } //pass info
    }); //navigates to the dynamic url based on the id
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
          onClick={(e) => e.stopPropagation()} //stops the on click handleClick from being called
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
    info: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string,
          authors: PropTypes.arrayOf(PropTypes.string),
          doi: PropTypes.string,
          issue: PropTypes.number,
          references: PropTypes.arrayOf(
              PropTypes.shape({
                  author: PropTypes.string.isRequired,
                  doi: PropTypes.string.isRequired,
                  title: PropTypes.string.isRequired,
              })
          ),
          sections: PropTypes.arrayOf(PropTypes.string),
          tags: PropTypes.arrayOf(PropTypes.string),
          source: PropTypes.string,
          title: PropTypes.string,
          volume: PropTypes.number,
      })
  ).isRequired,
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
};

export default Card;