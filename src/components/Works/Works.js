import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WorksData from "../../helper/Works.json";
import "../../Slick.css";

const Works = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // variableWidth: true,
  };
  return (
    <WorksStyled>
      <WorksName>作品集</WorksName>

      <Slider {...settings} style={{ marginTop: "20px" }}>
        {WorksData.map((work) => (
          <a href={work.workUrl} target="_blank" rel="noreferrer">
            <WorkCard>
              <WordCardImage
                src={`/images/${work.workIcon}`}
                workIconWidth={work.workIconWidth}
              />
              <WorkCardText>{work.workName}</WorkCardText>
              <WorkCardText>{work.workDesc}</WorkCardText>
            </WorkCard>
          </a>
        ))}
      </Slider>
    </WorksStyled>
  );
};

export default Works;

const WorksStyled = styled.div`
  height: 35vh;
  background-color: #393a3c;
`;

const WorksName = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 2.2em;
  text-align: center;
`;

const WorkCard = styled.div`
  background-color: #fff;
  height: 20vh;
  /* width: 200px; */
  border-radius: 8px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WordCardImage = styled.img`
  width: ${(prop) => prop.workIconWidth};
  margin: 0 auto;
`;

const WorkCardText = styled.p`
  color: #000;
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`;
