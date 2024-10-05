import React from 'react';
import '../styles/header.css'

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
        <button onClick={handleClick} className='p-button right-button'>
            Powerlifting
        </button>
        <button onClick={handleClick} className='b-button right-button'>
            Bodybuilding
        </button>
        <button onClick={handleClick} className='profile-button right-button'>
            Profile
        </button>
      </div>
    </div>
  );
}

export default Header;