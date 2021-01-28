import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar.jsx';
import HomePage from './HomePage.jsx';
import ContactPage from './ContactPage.jsx'
import ProjectPage from './ProjectPage.jsx'
import { StyledSlider, StyledPortfolio, StyledContact, SliderCSS } from '../StyledComponents/index.js';

const App = () => {
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(.8);
  const [displaySet, setDisplay] = useState(3);
  const [currentWidth, setWidth] = useState(0);
  const widthRef = useRef(false);

  const getWidth = () => {
    if (widthRef.current) {
      return widthRef.current.getBoundingClientRect().width
    } else {
      console.log('width not found')
    }
  };

  const changeSlide = (index) => {
    setTranslate(index * getWidth());
  };

  useEffect(() => {
    setWidth(getWidth() * displaySet)
  }, []);

  return (
    <div>
      <Sidebar changeSlide={changeSlide}/>
      <SliderCSS ref={widthRef}>
        <StyledSlider
          translate={translate}
          transition={transition}
          width={currentWidth}
        >
          <HomePage />
          <ProjectPage />
          <ContactPage />
        </StyledSlider>
      </SliderCSS>
    </div>
  )
};


export default App