import { React, useState, useEffect } from "react";
import '../styles/Literature.css'
import Card from '../components/Card'
import { getStudyData } from '../services/firebaseAdmin'

function Literature() {
  const [allStudyData, setAllStudyData] = useState([]);

  const getData = async () => {
    try {
      const data = await getStudyData();
      setAllStudyData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Show cards when component mounts
    getData();
  }, []);

  return (
    <>
      <div className="individual-card">
        {allStudyData.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} date={item.publishDate} description={item.abstract} source={item.doi}/>
        ))}
      </div>
    </>
  );
}

export default Literature;