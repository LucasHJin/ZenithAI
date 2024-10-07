import React from 'react';
import '../styles/header.css'
import Button from './Button.jsx'

function Header() {
    
    function handleClick() {
        alert('Button Clicked!');
    }

  return (
    <div className='header'>
      <div className='left-header'>
        <button onClick={handleClick} className='logo-button'>
            <img src='src/assets/images/zenith_logo.png' alt='Zenith logo button.'/>
        </button>
      </div>
      <div className='right-header'>
        <Button text="Literature" color="grey" text_color="white" className='right-button l-button'/>
        <Button text="Powerlifting" color="grey" text_color="white" className='right-button p-button'/>
        <Button text="Bodybuilding" color="grey" text_color="white" className='right-button b-button'/>
        <Button text="Profile" color="grey" text_color="white" className='right-button profile-button'/>
      </div>
    </div>
  );
}

export default Header;