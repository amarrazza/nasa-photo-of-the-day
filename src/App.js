import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Image from './Image'


function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    const fetchPic = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('sorry')
      })
    }
    fetchPic()
  }, [])

  
  
  return (
    <div className="App">
      <h1>{nasaData.title}</h1>
      <div className="imageContainer">
        <Image nasaData={nasaData} />
      </div>
      <p>{nasaData.explanation}</p>
    </div>
  );
}

export default App;
