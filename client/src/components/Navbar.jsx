import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/gym-logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="flex-start" // Align content to the extreme flex start (left side)
    sx={{
      px: '20px',
      py: '10px',
      // borderBottom: '1px solid #ccc',
      overflowX: 'auto', // Allow horizontal scrolling on small screens
      scrollbarWidth: 'none', // Hide scrollbar for aesthetic purposes
      '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
      '&::-webkit-scrollbar': {
        display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
      },
    }}
  >
    <Link to="/" style={{ textDecoration: 'none' }}>
      <img src={Logo} alt="logo" style={{ width: '130px', height: '60px' }} />
    </Link>
    <Stack
      direction="row"
      gap="25px"
      alignItems="center"
      sx={{
        display: 'flex',
        ml: '20px', // Add margin to separate logo from links
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', fontSize: '20px' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', fontSize: '20px' }}>Exercises</a>
      {/* Add more navigation links as needed */}
    </Stack>
  </Stack>
);

export default Navbar;
