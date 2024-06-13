import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  margin-top: 100px;
  flexwrap: wrap;
`;

const FooterText = styled.p`
  color: black;
  font-size: 20px;
  margin: 0;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const HeartIcon = styled.span`
  color: #e25555;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>
        {/* <img src={Logo} alt="logo" style={{ width: '100px', height: '60px' ,marginBottom:'-20px'}} /> */}
        <span>&copy; {currentYear} </span>
        Made with <HeartIcon>❤️</HeartIcon> by Bikash.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
