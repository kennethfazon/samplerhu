'use client'; // This tells Next.js to use client-side rendering

import { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, CardMedia } from '@mui/material';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Slider from 'react-slick';

// Custom Arrow Components for Slider
const CustomPrevArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      color: '#fff',
      transform: 'translateY(-50%)',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#1e293b',
        transform: 'translateY(-50%) scale(1.1)',
      },
    }}
  >
    <span style={{ fontSize: '24px' }}>&lt;</span>
  </Box>
);

const CustomNextArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: '10px',
      borderRadius: '50%',
      cursor: 'pointer',
      color: '#fff',
      transform: 'translateY(-50%)',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#1e293b',
        transform: 'translateY(-50%) scale(1.1)',
      },
    }}
  >
    <span style={{ fontSize: '24px' }}>&gt;</span>
  </Box>
);

export default function EventsActivitiesSection() {
  const [events, setEvents] = useState([]);

  // Fetch events data from the API
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 700,
              color: '#1e293b',
              mb: 2,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Events & Activities
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Stay informed about our upcoming health initiatives and community programs. Join us in building a healthier community together.
          </Typography>
        </Box>

        {/* Events Slider */}
        <Slider {...settings}>
          {events.map((event) => (
            <Box
              key={event._id}
              sx={{
                padding: '0 10px',
                display: 'flex',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                  },
                  width: '100%',
                  background: 'linear-gradient(145deg, #e0f7fa, #f3f4f6)',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={event.image}
                  alt={event.title}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    p: 3,
                    background: 'linear-gradient(145deg, #e0f7fa, #f3f4f6)',
                    borderRadius: '16px',
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Chip
                    label={event.category}
                    sx={{
                      alignSelf: 'flex-start',
                      backgroundColor: '#e2e8f0',
                      color: '#1e293b',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1e293b',
                      mb: 1,
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      letterSpacing: '0.05em',
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Typography
                      sx={{
                        color: '#64748b',
                        fontSize: '0.95rem',
                        mb: 1.5,
                        flex: 1,
                        lineHeight: '1.6',
                        wordWrap: 'break-word', // Ensure text wraps within the container
                        overflow: 'hidden', // Avoid text overflow
                        whiteSpace: 'normal', // Allow text to wrap
                      }}
                    >
                      {event.description}
                    </Typography>


                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                      <Calendar size={16} color="#64748b" />
                      <Typography sx={{ color: '#64748b', fontSize: '0.9rem' }}>
                        {event.date}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Clock size={18} color="#64748b" />
                      <Typography sx={{ color: '#64748b' }}>
                        {event.startTime} - {event.endTime}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <MapPin size={18} color="#64748b" />
                      <Typography sx={{ color: '#64748b' }}>
                        {event.location}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Users size={18} color="#64748b" />
                      <Typography sx={{ color: '#64748b' }}>
                        {event.participants}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
