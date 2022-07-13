import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/background.jpg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Youtube } from "../../assets/images/youtube.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";

const Banner = () => {
  return (
    <BannerStyled Background={Background}>
      <BannerBox>
        <BannerTitle>Wei's Profile</BannerTitle>
        <BannerRewardTotal>競賽累積獎金：$216,400</BannerRewardTotal>
        <BannerPortfolio>觀看作品集</BannerPortfolio>
        <BannerSocialMedia>
          <Github stroke="#fff" width="50" />
          <Youtube stroke="#fff" width="50" />
          <Instagram stroke="#fff" width="50" />
        </BannerSocialMedia>
      </BannerBox>
    </BannerStyled>
  );
};

export default Banner;

const BannerStyled = styled.div`
  width: 100%;
  height: 45vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.Background});
  background-repeat: no-repeat;
  background-size: cover; //待調整
  background-position: center;
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 3em;
`;

const BannerRewardTotal = styled.h2`
  color: #fff;
  font-size: 2em;
  margin-top: 30px;
`;

const BannerPortfolio = styled.button`
  padding: 0.5em;
  font-size: 1.5em;
  border-radius: 6px;
  color: #fff;
  background-color: #00c6cf;
  margin-top: 45px;
  border: 1px solid #00c6cf;
  cursor: pointer;
`;

const BannerSocialMedia = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
