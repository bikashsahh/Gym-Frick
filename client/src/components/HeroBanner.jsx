import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import styled from "styled-components";
// import HeroBannerImage from '../assets/images/banner.png';
import HeroBannerImage from '../assets/images/gym-model1.jpeg';

const Title = styled.h1`
  font-size: 54px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    width: 100%;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;
const HeroBanner = () => (
  <Box sx={{ mt: { lg: '240px', xs: '70px' }, ml: { sm: '50px' }  , mb:{lg : '200px'} }}  position="relative" p="20px">
    <Typography fontWeight={590} color="#FF2625" sx={{ lineHeight:{lg:'130px',xs:'60px'},opacity: '0.1', display: { lg: 'block', xs: 'block' }, fontSize: {lg :'100px',xs:'65px'},ml:{ lg :'-10px' ,xs:'-10px'} ,mt:{lg:'-230px',xs:'-100px'} , p:{xs:'1px'}}}>
      Invigoration<br/>
      Power
    </Typography>
    <Typography color="#FF2625" fontWeight="600" fontSize="50px">Fitness Hub</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '25px' } }} mb="23px" mt="30px">
      Sweat, Smile And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya">
      Discover Your Perfect Workout Plan Tailored Just for You
    </Typography>
    <Stack>
      <a href="#exercises" style={{marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ borderBottomLeftRadius: '100px' }} />
  </Box>
);

export default HeroBanner;
