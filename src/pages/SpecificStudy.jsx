import React from 'react';
import { useParams } from 'react-router-dom';

const SpecificStudy = ({ }) => {
    const { id } = useParams(); //get the card ID from the URL (so that it can load the correct data)
    return (
        <>
            <h1>Card Details for ID: {id}</h1>
            <div>SPECIFIC STUDY</div>
        </>
    );
}

SpecificStudy.propTypes = {
    
};

SpecificStudy.defaultProps = {
  
};

export default SpecificStudy;