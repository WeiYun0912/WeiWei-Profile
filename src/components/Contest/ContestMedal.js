import React from "react";
import styled from "styled-components";

const ContestMedal = ({ Medal, ContestTitle, ContestRank, ContestReward }) => {
  return (
    <ContestBoxStyled>
      <ContestMedalImageStyled src={`/images/${Medal}`} />
      <ContestMedalTextStyled>{ContestTitle}</ContestMedalTextStyled>
      <ContestMedalTextStyled>{ContestRank}</ContestMedalTextStyled>
      <ContestMedalTextStyled>{ContestReward}</ContestMedalTextStyled>
    </ContestBoxStyled>
  );
};

export default ContestMedal;

const ContestBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333%;
  padding: 1.5em;
`;

const ContestMedalImageStyled = styled.img`
  width: 75px;
`;

const ContestMedalTextStyled = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;
