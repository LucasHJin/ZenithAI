import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const SpecificStudy = ({ }) => {
    const { id } = useParams(); //get the card ID from the URL (so that it can load the correct data)
    const location = useLocation(); // Use location hook to access passed state
    const info = location.state?.info;
    
    return (
        <>
            <div>SPECIFIC STUDY</div>
            <h2>{info ? info.title : "No study details found"}</h2>
            <div>{info.publishDate}</div>
        </>
    );
}

SpecificStudy.propTypes = {
    
};

SpecificStudy.defaultProps = {

};

export default SpecificStudy;