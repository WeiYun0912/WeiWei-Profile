import React from "react";
import styled from "styled-components";
import ContestMedal from "./ContestMedal";
import ContestData from "../../helper/Contest.json";

const Contest = () => {
  return (
    <>
      <ContestTitleStyled>競賽記錄</ContestTitleStyled>
      <ContestBox>
        {ContestData.map((contest) => (
          <ContestMedal
            Medal={contest.Medal}
            ContestTitle={contest.ContestTitle}
            ContestRank={contest.ContestRank}
            ContestReward={contest.ContestReward}
          ></ContestMedal>
        ))}
      </ContestBox>
    </>
  );
};

export default Contest;

const ContestTitleStyled = styled.h1`
  text-align: center;
`;

const ContestBox = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
