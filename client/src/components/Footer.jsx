// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';

// const Footer = () => (
  //   <Box mt="40px" bgcolor="white">
  //     <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
  // <img src={Logo} alt="logo" style={{ width: '200px', height: '60px' }} />
  //     </Stack>
  //     <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Bikash</Typography>
  //   </Box>
  // );
  
  // export default Footer;
  import React from 'react';
  import styled from 'styled-components';
  // import Logo from '../assets/images/gym-logo.png';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  margin-top: 100px;
  flexWrap :wrap
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
