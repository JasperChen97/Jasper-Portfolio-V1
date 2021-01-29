import React from 'react';
import { CardContainer, StyledCard, StyledCardInfo, StyledProjectButton, UsedTech, StyledImgContainer, StyledButtonContainer, StyledCardUnderline } from '../StyledComponents/index.js';

const ProjectCard = ({ project }) => {
  console.log(project)
  return (
    <CardContainer>
      <StyledCard>
        <StyledImgContainer>
        <img src= {project.projectImg} />
        </StyledImgContainer>
        <StyledCardInfo>
          <h1 style={{"marginBottom": "0px"}}>{project.projectName}</h1>
          <UsedTech>
            {project.usedTech.join(', ')}
          </UsedTech>
          <StyledCardUnderline />
          <p style={{"height": "7rem"}}>{project.projectDescription}</p>
          <StyledButtonContainer>
            <StyledProjectButton>View Demo</StyledProjectButton>
            <StyledProjectButton>View Source</StyledProjectButton>
          </StyledButtonContainer>
        </StyledCardInfo>
      </StyledCard>
    </CardContainer>
  )
};

export default ProjectCard