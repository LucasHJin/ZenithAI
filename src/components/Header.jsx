import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import Button from './Button.jsx'


function Header() {
  return (
    <div className='header'>
      <nav className="navigation">
        <div className='left-header'>
          <Link to="/">
            <button className='logo-button'>
                <img src='src/assets/images/zenith_logo.png' alt='Zenith logo button.'/>
            </button>
          </Link>
        </div>
        <div className='right-header'>
          <Button text="Literature" color="grey" text_color="white" className='right-button l-button' toPage="/literature" option2="true"/>
          <Button text="Media" color="grey" text_color="white" className='right-button m-button' toPage="/media" option2="true"/>
          <Button text="Overview" color="grey" text_color="white" className='right-button o-button' toPage="/overview" option2="true"/>
        </div>
      </nav>
    </div>
  );
}

export default Header;