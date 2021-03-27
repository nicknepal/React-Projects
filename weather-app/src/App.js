import React from 'react';
import './App.css';
import './index.css';
import bgImg from './images/bg-1.jpg';
import Tempapp from './components/tempapp';


function App() {
  return (
    <>
      <img src={bgImg} alt="bgImg" className="bg"/>
      <Tempapp/>
      
    </>
  );
}

export default App;


