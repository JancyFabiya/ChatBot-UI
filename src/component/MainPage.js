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
          height: '100vh',
          backgroundColor: '#1a237e',
          color: '#fff',
          textAlign: 'center',
          padding: 3,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Building stellar websites for early startups
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button variant="contained" sx={{ backgroundColor: '#ff9800' }}>
                View our work
              </Button>
              <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
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
