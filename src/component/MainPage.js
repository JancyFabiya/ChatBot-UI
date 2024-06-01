import React from 'react';
import Navbar from './Navbar';
import { Box, Typography, Button, Grid } from '@mui/material';
import ExampleImage from '../assets/robot.png'; 

function MainPage() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#1a237e',
          color: '#fff',
          textAlign: 'center',
          padding: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Building stellar websites for early startups
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff9800',
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                }}
              >
                View our work
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                }}
              >
                View Pricing
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={ExampleImage}
                alt="Example"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainPage;
