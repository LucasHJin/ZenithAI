import React from 'react';
import Button from '../components/Button'
import Card from '../components/Card';
import { writeStudy } from "../services/firebaseAdmin";
import { searchAndFetchPMC } from '../services/pmcService';

import '../styles/Home.css'

function Home() {
  //functions to test
  const handleWriteData = () => {
    const studyExample = {
      title: "TESTING 8",
      authors: ["Alice Johnson", "Bob Smith"],
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada faucibus dolor vel pulvinar. Donec hendrerit et quam in viverra. Aliquam quam felis, tincidunt sed ultricies in, faucibus et augue. Sed non suscipit lorem. Aliquam pretium, augue vel placerat varius, nisi velit rutrum lectus, id lacinia tortor nulla in urna. Integer ut fermentum purus, quis volutpat ex. Nunc lacus augue, tincidunt quis turpis at, feugiat finibus lectus. Vivamus vel nibh sit amet justo pellentesque ullamcorper. Nullam non odio ipsum. Duis id pulvinar quam. Ut dapibus sodales turpis ut interdum. Integer at arcu sed leo imperdiet pellentesque eget eget orci. Duis tempor, arcu maximus congue aliquam, odio elit varius quam, et ultrices erat eros vehicula ante. Donec hendrerit neque in pulvinar semper.",
      publishDate: "2023-09-15",
      source: "Journal of Environmental Research",
      volume: 42,
      issue: 3,
      doi: "10.1000/j.jer.2023.42.3.001",
      sections: ["Introduction", "Methods", "Results", "Discussion", "Conclusion"],
      references: [
          { title: "Climate Change and Crops", author: "Doe J.", doi: "10.1000/xyz123" },
          { title: "Global Warming Impacts", author: "Smith A.", doi: "10.1000/abc456" }
      ], 
      tags: ["Testtag"]
  };
    writeStudy(studyExample);
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