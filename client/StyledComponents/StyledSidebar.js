import styled from 'styled-components';

export const SidebarMain = styled.nav`
  position: fixed;
  background: #23232e;
  transition: width 600ms ease;
  overflow: hidden;

  $:hover ${ArrowToggle} {
    transform: rotate(-180deg);
  }
  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
    }
  }
  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const ArrowToggle = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: #ececec;
  background: #141418;
  font-size: 1.5rem;
  letter-spacing: 0.2ch;
  width: 100%;
  svg {
    transform: rotate(0deg);
    transition: 600ms;
    ${SidebarMain}:hover & {
      transform: rotate(-180deg);
    }
    @media only screen and (min-width: 600px) {
      ${SidebarMain}:hover & {
        margin-left: 11rem;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ArrowToggleText = styled.span`
  display: none;
  margin-left: 1rem;
  display: inline;
  position: absolute;
  left: -999px;
  transition: 600ms;
  @media only screen and (min-width: 600px) {
    ${SidebarMain}:hover & {
      left: 0px;
    }
  }
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: #b6b6b6;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 600ms;
  &:hover {
    text-decoration: none;
    filter: grayscale(0%) opacity(1);
    background: #141418;
    color: #ececec;
  }
  svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const NavLinksText = styled.span`
  display: none;
  margin-left: 1rem;
  transition: 600ms;
  font-family: 'Open Sans';
  @media only screen and (min-width: 600px) {
    ${SidebarMain}:hover & {
      display: inline;
    }
  }
`;

export const NavItems = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
  }
`;