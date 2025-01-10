'use client'
import { Container, Typography, Box, Grid } from '@mui/material';
import Header from '/components/Navbar';
import EventsActivitiesSection from '/components/HeroSecComp';
import ContentPage from '/components/Contents';
import About from '/components/About';
import ServicesSection from '/components/ServiceCard';
import Footer from '/components/Footer';
import Link from 'next/link';

export default function Home() {
 
  
  return (
    <>
      <Header />
      <ContentPage />

      <Box sx={{
        textAlign: 'left',
        backgroundColor: 'background.paper',
        width: '100%',
        overflow: 'hidden',
        mt: -1, // Negative margin to pull up the hero section
      }}>
        <Box sx={{ 
          position: 'relative',
          width: '100%',
        }}>
            <EventsActivitiesSection/>
        </Box>
      </Box>
      
      <About />
      <ServicesSection />


     
      <Footer/>
    </>
  );
}
