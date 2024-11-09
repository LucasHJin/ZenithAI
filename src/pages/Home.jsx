import React from 'react';
import Button from '../components/Button'
import Card from '../components/Card';
import { adminWriteData } from "../services/firebaseAdmin";
import { searchAndFetchPMC } from '../services/pmcService';

import '../styles/Home.css'

function Home() {
  //functions to test
  const handleWriteData = () => {
    const data = { field1: "value1", field2: "value2" }; 
    adminWriteData(data);
  };

  const searchPMC = () => {
    const term = "muscle hypertrophy";
    searchAndFetchPMC(term);
  }

  return (
    <>
      <div className='test'>
        <div>HOME</div>
        <button onClick={handleWriteData}>Write to Firestore</button>
        <button onClick={searchPMC}>SEARCH</button>
        <Button color="white" text_color="black"/>
        <Card tags={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1511, 16, 16]}></Card>
      </div>
    </>
  );
}

export default Home;