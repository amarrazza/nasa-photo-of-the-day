import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Image from './Image'

import styled from 'styled-components';

const StyledDiv = styled.div`
  h1, h2{
    margin-bottom: 4%;
    color: ${props => props.theme.white};
  }

`


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
      <StyledDiv>
        <div>
          <h1>NASA Photo of The Day</h1>
        </div>
        <h2>{nasaData.title}</h2>
        <div className="imageContainer">
          <Image nasaData={nasaData} />
        </div>
        <p>{nasaData.explanation}</p>
      </StyledDiv>
    </div>
  );
}

export default App;
