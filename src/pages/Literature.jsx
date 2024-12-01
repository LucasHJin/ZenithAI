import React from 'react';
import '../styles/Literature.css'
import { getStudyData } from '../services/firebaseAdmin'

//WORK ON CARD NOW WITH READING FROM FIRESTORE

function Literature() {
  const getData = () => {
    let data = getStudyData();
    console.log(data);
  }

  return (
    <>
      <div>LITERATURE</div>
      <button onClick={getData}>GET</button>
    </>
  );
}

export default Literature;