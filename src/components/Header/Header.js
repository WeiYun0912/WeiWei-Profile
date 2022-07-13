import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/wei.png";
const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} />
      <NavigateStyled>
        <NavigateTextStyled>首頁</NavigateTextStyled>
        <NavigateTextStyled>競賽記錄</NavigateTextStyled>
        <NavigateTextStyled>作品集</NavigateTextStyled>
        <NavigateTextStyled>關於我</NavigateTextStyled>
      </NavigateStyled>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 100%;
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
`;

const LogoStyled = styled.img`
  width: 100px;
`;

const NavigateStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 2em;
  margin-right: 5px;
`;

const NavigateTextStyled = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
