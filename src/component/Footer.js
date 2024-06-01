import React from 'react';
import { Box, Container, Grid, Typography, Link, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#242450', color: '#fff', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Chatbot
            </Typography>
            <Typography variant="body1">
              We are always open to discuss your project and improve your online presence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              LET'S TALK!
            </Typography>
            <Typography variant="body1">
              We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button variant="contained" sx={{ backgroundColor: '#FFC107', color: '#000', marginBottom: '1rem' }}>
                Email me at contact@website.com
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#FFC107', color: '#000' }}>
                Call us 0927 6277 28525
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
                <Facebook />
              </Link>
              <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
                <Twitter />
              </Link>
              <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
                <Instagram />
              </Link>
              <Link href="#" color="inherit" sx={{ margin: '0 0.5rem' }}>
                <LinkedIn />
              </Link>
            </Box>
            <Typography variant="body2" align="center">
              Copyright 2022, Finsweet.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <Link href="#" color="inherit" sx={{ margin: '0 1rem' }}>
                Home
              </Link>
              <Link href="#" color="inherit" sx={{ margin: '0 1rem' }}>
                About us
              </Link>
              <Link href="#" color="inherit" sx={{ margin: '0 1rem' }}>
                Features
              </Link>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
