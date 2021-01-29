import styled from 'styled-components';


export const StyledPortfolio = styled.div`
  background: #3a4042;
  height: 100vh;
  width: 100%;
  font-family: roboto;
`;

export const CardSetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 5rem;
`;

export const CardContainer = styled.div`
  width: 40%;
  min-height: 25vh;
  margin-bottom: 100px;
  background: #212121;
  color: #EDF2F4;
  display: flex;
  border-radius: 30px;
  box-shadow: 0 20px 20px rgba(0,0,0,0.2), 0 0 50px rgba(0,0,0,0.2);
`;

export const StyledCard = styled.div`
  display: flex;
  flex-wrap:wrap;
  width: 100%;
`;

export const StyledCardInfo = styled.div`
  width: 55%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledImgContainer = styled.div`
  width: 45%;
  img{
    max-width: 100%;
    height: 25vh;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

export const StyledProjectButton = styled.button`
  color: #8ecccc;
  padding: 5px 10px;
  background: transparent;
  border: 3px solid #8ecccc;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 30px;
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const UsedTech = styled.div`
  color: #BDC1C3;
  margin-bottom: 10px;
`;

export const ProjectHeader = styled.div`
  color: #8ecccc;
  width: 100%;
  text-align: center;
  margin-bottom: 150px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledHeaderUnderline = styled.div`
  width: 6rem;
  height .5rem;
  background: #8ecccc;
`;

export const StyledCardUnderline = styled.div`
  width: 95%;
  height .05rem;
  margin-bottom: 2rem;
  background: #BDC1C3;
`;