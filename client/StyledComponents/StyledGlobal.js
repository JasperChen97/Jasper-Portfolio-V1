import styled from 'styled-components';

export const StyledSlider = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  width: ${props => props.width}px;
  background-color: rgb(236,238,240);
  display: flex;
  overflow: hidden;
`;

export const StyledContact = styled.div`
  background: #3a4042;
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const SliderCSS = styled.div`
  width: 100%;
  overflow: hidden;
`;
