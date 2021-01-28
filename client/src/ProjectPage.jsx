import React from 'react';
import { StyledPortfolio, CardContainer, StyledCard, StyledCardInfo, StyledImage, StyledProjectButton, UsedTech, CardSetContainer, ProjectHeader } from '../StyledComponents/index.js';

const ProjectPage = () => {
  return (
    <StyledPortfolio>
      <CardSetContainer>
        <ProjectHeader>
          <h1>My Recent Projects</h1>
        </ProjectHeader>
        <CardContainer>
          <StyledCard>
            <StyledImage>
            </StyledImage>
            <StyledCardInfo>
              <h1>Project 1</h1>
              <p>I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE</p>
              <UsedTech>
              </UsedTech>
            </StyledCardInfo>
            <StyledProjectButton />
          </StyledCard>
        </CardContainer>
        <CardContainer>
          <StyledCard>
            <StyledImage>
            </StyledImage>
            <StyledCardInfo>
              <h1>Project 1</h1>
              <p>I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE</p>
              <UsedTech>
              </UsedTech>
            </StyledCardInfo>
            <StyledProjectButton />
          </StyledCard>
        </CardContainer>
        <CardContainer>
          <StyledCard>
            <StyledImage>
            </StyledImage>
            <StyledCardInfo>
              <h1>Project 1</h1>
              <p>I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE</p>
              <UsedTech>
              </UsedTech>
            </StyledCardInfo>
            <StyledProjectButton />
          </StyledCard>
        </CardContainer>
        <CardContainer>
          <StyledCard>
            <StyledImage>
            </StyledImage>
            <StyledCardInfo>
              <h1>Project 1</h1>
              <p>I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE I LIKE APPLE</p>
              <UsedTech>
              </UsedTech>
            </StyledCardInfo>
            <StyledProjectButton />
          </StyledCard>
        </CardContainer>
      </CardSetContainer>
    </StyledPortfolio>
  )
};

export default ProjectPage