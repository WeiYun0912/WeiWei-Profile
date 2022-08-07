import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "500px",
  };
  return (
    <WorksStyled>
      <WorksName>作品集</WorksName>

      <Slider {...settings} style={{ marginTop: "10px" }}>
        <WorkCard>
          <WorkCardText>1</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>2</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>3</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>4</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>5</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>6</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>7</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>8</WorkCardText>
        </WorkCard>
        <WorkCard>
          <WorkCardText>9</WorkCardText>
        </WorkCard>
      </Slider>
    </WorksStyled>
  );
};

export default Works;

const WorksStyled = styled.div`
  height: 45vh;
  background-color: #393a3c;
`;

const WorksName = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 2.2em;
  text-align: center;
`;

const WorksCardContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

const WorkCard = styled.div`
  background-color: #fff;
  height: 18vh;
  /* width: 200px; */
  border-radius: 8px;
`;

const WorkCardText = styled.p`
  color: #000;
  font-size: 1.5em;
  text-align: center;
`;
