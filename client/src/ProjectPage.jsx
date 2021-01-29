import React from 'react';
import { StyledPortfolio, CardSetContainer, ProjectHeader, StyledHeaderUnderline } from '../StyledComponents/index.js';
import ProjectCard from './Projects.jsx';
import data from '../../data.json'

const ProjectPage = () => {
  return (
    <StyledPortfolio>
      <CardSetContainer>
        <ProjectHeader>
          <h1 style={{"fontSize": "80px", "width": "100%"}}>PROJECTS</h1>
          <StyledHeaderUnderline />
        </ProjectHeader>
        {data.map((project, index) => (
          <ProjectCard project = {project}/>
        ))}
      </CardSetContainer>
    </StyledPortfolio>
  )
};

export default ProjectPage