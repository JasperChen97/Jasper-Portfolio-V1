import React from 'react';
import { StyledHome, TextContainer, StyledSmall, StyledH1, StyledContactButton, StyledP, StyledH2 } from '../StyledComponents/index.js';
import Background from "./Particles.jsx";

const HomePage = () => {
  return (
    <StyledHome>
      <TextContainer>
        <StyledSmall>Hello, I'm</StyledSmall>
        <StyledH1>Jasper Chen</StyledH1>
        <StyledH2>Full-Stack Developer</StyledH2>
        <StyledP>
        I'm a software engineer based in San Jose, CA specializing in<br></br>building (and occasionally designing) exceptional websites,<br></br>applications, and everything in between.
        </StyledP>
        <StyledContactButton>View Projects</StyledContactButton>
      </TextContainer>
    <Background />
    </StyledHome>
  )
};

export default HomePage