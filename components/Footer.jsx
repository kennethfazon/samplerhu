import React from 'react';
import { Box, Container, Grid, Typography, Paper, Divider, Card, CardContent, Link } from '@mui/material';
import { Phone, Mail, Clock, MapPin, Facebook, ArrowUpRight } from 'lucide-react';

// Reusable contact card component
const ContactCard = ({ icon: Icon, title, children }) => (
  <Card
     
    elevation={0}
    sx={{
      height: '100%',
      p: 2,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: 3,
      border: '1px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }}
  >
    <CardContent sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: 1,
            borderRadius: 2,
            background: 'rgba(37, 99, 235, 0.1)',
            mr: 1.5
          }}
        >
          <Icon size={20} color="#2563eb" />
        </Paper>
        <Typography variant="h6" fontSize="1rem" fontWeight="600">
          {title}
        </Typography>
      </Box>
      {children}
    </CardContent>
  </Card>
);

export default function Footer() {
  return (
    <Box
    id="contact"
      component="footer"
      sx={{
        pt: 8,
        pb: 4,
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #1a365d 30%, #2563eb 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              mb: 2
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: '500px', mx: 'auto', mb: 4 }}
          >
            We&apos;re here to help with any questions about our services, appointments, or general inquiries
          </Typography>
        </Box>

        {/* Contact Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={MapPin} title="Visit Us">
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Gubat, Sorsogon
                Philippines, 4710
              </Typography>
              <Link
                href="https://www.google.com/maps?q=Gubat+Rural+Health+Unit"
                target="_blank"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Get directions <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
              </Link>
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={Phone} title="Contact">
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Globe:</Typography>
                <Typography variant="body2" fontWeight="500">0945-508-7459</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Smart:</Typography>
                <Typography variant="body2" fontWeight="500">0949-643-2073</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Email:</Typography>
                <Typography variant="body2" fontWeight="500">contact@gubatrhunit.gov.ph</Typography>
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={Clock} title="Hours">
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Monday - Friday:</Typography>
                <Typography variant="body2" fontWeight="500">8:00 AM - 5:00 PM</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Weekend:</Typography>
                <Typography variant="body2" fontWeight="500">Emergency Services Only</Typography>
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={Facebook} title="Social Media">
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Follow us on Facebook for updates, health tips, and announcements
              </Typography>
              <Link
                href="https://www.facebook.com/rhu.gubat"
                target="_blank"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Visit our Facebook page <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
              </Link>
            </ContactCard>
          </Grid>
        </Grid>

        {/* Partners Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h6" fontSize="1rem" color="text.secondary" sx={{ mb: 3 }}>
            Our Healthcare Partners
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap'
            }}
          >
            {['doh.svg', 'lgu.svg', 'grhu.svg'].map((logo, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  background: 'white',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  width: { xs: '80px', sm: '100px' },
                  height: { xs: '80px', sm: '100px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={`graphics/${logo}`}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Gubat Rural Health Unit. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}