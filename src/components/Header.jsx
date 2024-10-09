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
          <Button text="Powerlifting" color="grey" text_color="white" className='right-button p-button' toPage="/powerlifting" option2="true"/>
          <Button text="Bodybuilding" color="grey" text_color="white" className='right-button b-button' toPage="/bodybuilding" option2="true"/>
          <Button text="Profile" color="grey" text_color="white" className='right-button profile-button' toPage="/profile" option2="true"/>
        </div>
      </nav>
    </div>
  );
}

export default Header;