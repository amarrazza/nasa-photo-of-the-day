import React, { useState, useEffect } from "react";
import "./App.css";

const Image = (props) => {
    const { nasaData } = props;
    return (
        <img src={nasaData.hdurl} alt='pic of the day' />
    );
}

export default Image;