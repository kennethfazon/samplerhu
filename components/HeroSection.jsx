// HeroSection.js
import { Box, Typography, Container } from '@mui/material';
import EventsActivitiesSection from './HeroSecComp';


export default function HeroSection() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: { xs: '500px', sm: '650px' },
        position: 'relative',
        marginTop: 0, // Remove the negative margin
        overflow: 'hidden',
      }}
    >
      {/* Background image wrapper */}
      <Box
  sx={{
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100vw', // Full viewport width
    height: '100%',
    backgroundImage: 'url(graphics/burod.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // Lighter gradient (less dark)
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))',
      zIndex: 1,
    },
  }}
/>


      {/* Content Card */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: { xs: '95%', sm: '90%', md: '1200px' },
          padding: { xs: '20px', sm: '32px' },
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 },
        }}
      >
        {/* Rest of the Typography components remain the same */}
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Your Health, Our Priority
        </Typography>
        
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Comprehensive Healthcare Services for You and Your Family
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: { xs: '1.1rem', sm: '1.3rem' },
            fontWeight: 500,
            opacity: 0.9,
          }}
        >
          Trusted Care from Expert Doctors and Healthcare Professionals
        </Typography>
        
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            opacity: 0.8,
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          At our clinic, we provide personalized health services, from routine checkups to specialized care.
          Whether it's for your family, a chronic condition, or preventive health, we're here to support you every step of the way.
        </Typography>
      </Container>
      
      
    </Box>
    <EventsActivitiesSection />
    </>
  );
}