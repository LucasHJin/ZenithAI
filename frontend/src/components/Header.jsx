import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import SectionButton from './SectionButton'

//DONT FORGET TO ADD A FOOTER WITH ALL RIGHTS RESERVED

function Header() {
  return (
    <div className='header'>
      <nav className="navigation">
        <div className='left-header'>
          <Link to="/">
            <button className='logo-button'>
                <img 
                  src='src/assets/images/zenith_logo.png' 
                  alt='Zenith logo button.'
                  className='default'
                />
                <img
                  src='src/assets/images/zenith_logo_white.png'
                  alt='Zenith logo button hover.'
                  className='hover'
                />
            </button>
          </Link>
        </div>
        <div className='right-header'>
          <SectionButton text="Literature" color="grey" text_color="white" className='right-button l-button' toPage="/literature/1"/>
          <SectionButton text="Media" color="grey" text_color="white" className='right-button m-button' toPage="/media"/>
          <SectionButton text="Overview" color="grey" text_color="white" className='right-button o-button' toPage="/overview"/>
        </div>
      </nav>
    </div>
  );
}

export default Header;