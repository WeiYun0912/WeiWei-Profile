import React from "react";
import styled from "styled-components";
import Works from "../../helper/Works.json";
const WorkDesc = () => {
  return (
    <WorkDescContainer>
      {Works.map((work, i) => (
        <WorkDescContentContainer key={i} index={i}>
          <div>
            <WorkDescImage src={`/images/${work.workImage}`} index={i} />
          </div>
          <div>
            <WorkDescTitle>{work.workName}</WorkDescTitle>
            <WorkDescText>{work.workDesc}</WorkDescText>
          </div>
        </WorkDescContentContainer>
      ))}
    </WorkDescContainer>
  );
};

export default WorkDesc;

const WorkDescContainer = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  flex-wrap: wrap;
`;

const WorkDescContentContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 30px 0;
  ${(prop) => (prop.index % 2 == 0 ? " flex-direction: row-reverse;" : "")}
`;

const WorkDescImage = styled.img`
  max-width: 500px;
  /* height: 350px; */
  ${(prop) =>
    prop.index % 2 == 0 ? "margin-left: 40px" : "margin-right: 40px"}
`;

const WorkDescTitle = styled.h1``;

const WorkDescText = styled.p``;
