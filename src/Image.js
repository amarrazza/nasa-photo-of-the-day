import React from "react";
import "./App.css";
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 50%;
`

const Image = (props) => {
    const { nasaData } = props;
    return (

        <StyledImg src={nasaData.hdurl} alt='pic of the day' />
    );
}

export default Image;