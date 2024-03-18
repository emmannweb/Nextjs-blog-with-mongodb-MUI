"use client";
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: '#212121',
          height: 'calc(100vh - 59px)',
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundSize: 'cover'
        }}

      >
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }} >
          <Container>
            <Box sx={{ maxWidth: '433px' }} >

              <Typography variant='h6' sx={{ color: '#ccc', textTransform: 'uppercase', letterSpacing: '4px' }}>blog</Typography>
              <Typography variant='h1' sx={{ fontSize: '51px', color: '#ccc', pb: 3, pt: 2 }}>Fullstack Next Js Blog for absolute beginners.</Typography>
              <Button variant='outlined' sx={{ borderColor: "#ccc", color: '#ccc', p: '8px 42px' }}>Read More</Button>
            </Box>
          </Container>
        </Box>

      </Box>
      <Footer />
    </>
  )
}

export default Home