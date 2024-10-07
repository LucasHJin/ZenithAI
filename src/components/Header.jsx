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
          <Button text="Literature" color="grey" text_color="white" className='right-button l-button' toPage="/literature"/>
          <Button text="Powerlifting" color="grey" text_color="white" className='right-button p-button' toPage="/powerlifting"/>
          <Button text="Bodybuilding" color="grey" text_color="white" className='right-button b-button' toPage="/bodybuilding"/>
          <Button text="Profile" color="grey" text_color="white" className='right-button profile-button' toPage="/profile"/>
        </div>
      </nav>
    </div>
  );
}

export default Header;