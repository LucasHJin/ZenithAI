import React from 'react';
import Button from '../components/Button'
import Card from '../components/Card';

import '../styles/Home.css'

function Home() {
  return (
    <>
      <div className='test'>
        <div>HOME</div>
        <Button color="white" text_color="black"/>
        <Card tags={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1511, 16, 16]}></Card>
      </div>
    </>
  );
}

export default Home;