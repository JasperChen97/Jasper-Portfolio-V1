import React, { useState, useEffect, useRef } from 'react';
import {StyledList, SidebarMain, ArrowToggle, NavLinks, ArrowToggleText, NavLinksText, NavItems} from '../StyledComponents/index.js';
import { FaFolderOpen, FaHome, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Sidebar = ({ changeSlide }) => {
  return (
    <SidebarMain>
      <StyledList>
        <ArrowToggle>
          <NavLinks>
            <ArrowToggleText>WELCOME</ArrowToggleText>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </NavLinks>
        </ArrowToggle>

        <NavItems>
          <NavLinks onClick={() => changeSlide(0)}>
            <FaHome size={25} />
            <NavLinksText>Home</NavLinksText>
          </NavLinks>
        </NavItems>

        <NavItems>
          <NavLinks onClick={() => changeSlide(1)}>
            <FaFolderOpen size={25} />
            <NavLinksText>Projects</NavLinksText>
          </NavLinks>
        </NavItems>

        <NavItems onClick={() => changeSlide(2)}>
          <NavLinks>
            <FaEnvelope size={25} />
            <NavLinksText>Contact</NavLinksText>
          </NavLinks>
        </NavItems>

        <NavItems>
        <NavLinks href="#">
            <FaLinkedin size={25} />
            <NavLinksText>LinkedIn</NavLinksText>
          </NavLinks>

          <NavLinks href="#">
            <FaGithub size={25} />
            <NavLinksText>GitHub</NavLinksText>
          </NavLinks>
        </NavItems>

      </StyledList>
    </SidebarMain>
  )
};

export default Sidebar