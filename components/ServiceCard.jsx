import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { MedicalServices, HealthAndSafety, Vaccines, Accessibility } from '@mui/icons-material';
import HealthGoalsModal from './HealthGoalsModal';
import HealthPopulationModal from './HealthPopulationModal';
import ActionAgendaModal from './ActionAgendaModal';
import SpecialServicesModal from './SpecialServicesModal';

export default function ServicesSection() {
  const [openHealthGoal, setOpenHealthGoal] = useState(false);
  const [openHealthPopulation, setOpenHealthPopulation] = useState(false);
  const [openActionAgenda, setOpenActionAgenda] = useState(false);
  const [openHealthOthers, setOpenOthers] = useState(false);

  const handleHealthGoalsClick = () => {
    setOpenHealthGoal(true);
  };

  const handleHealthPopulationClick = () => {
    setOpenHealthPopulation(true);
  };
  const handleActionAgendaClick = () => {
    setOpenActionAgenda(true);
  };
  const handleSpecialServicesClick = () => {
    setOpenOthers(true);
  };

  return (
    <Box id="services" sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: '#f4f7fb' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            fontWeight: 'bold',
            mb: 4,
            mt: -4,
          }}
        >
          Programs and Services
        </Typography>

        <Grid container spacing={4}>
          {/* Service 1 - Health Goals Card */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              onClick={handleHealthGoalsClick}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '16px',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.4s, box-shadow 0.4s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <MedicalServices sx={{ fontSize: '3rem', color: '#1e3a8a', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                A. HEALTH-RELATED SUSTAINABLE GOALS
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Health-Related Sustainable Goals focus on improving public health through programs on nutrition, maternal care, disease prevention, and controlling infections like HIV, tuberculosis, and waterborne diseases.
              </Typography>
              <Button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click event
                  handleHealthGoalsClick();
                }}
                variant="outlined"
                sx={{ mt: 2, color: '#1e3a8a' }}
              >
                See Details
              </Button>
            </Paper>
          </Grid>

          {/* Service 2 - Health of Population Card */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              onClick={handleHealthPopulationClick}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '16px',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.4s, box-shadow 0.4s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <HealthAndSafety sx={{ fontSize: '3rem', color: '#1e3a8a', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                B. HEALTH OF POPULATION
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Health of the population focuses on promoting well-being across all life stages, from early childhood to old age, while supporting the health needs of adolescents, seniors, and persons with disabilities.
              </Typography>
              <Button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click event
                  handleHealthPopulationClick();
                }}
                variant="outlined"
                sx={{ mt: 2, color: '#1e3a8a' }}
              >
                See Details
              </Button>
            </Paper>
          </Grid>

          {/* Service 3 - Action Agenda Card */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              onClick={handleActionAgendaClick}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '16px',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.4s, box-shadow 0.4s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Vaccines sx={{ fontSize: '3rem', color: '#1e3a8a', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                C. 8-POINT ACTION AGENDA PROGRAMS
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                The 8-Point Action Agenda focuses on improving healthcare access, quality, disease prevention, mental health, healthcare worker welfare, and pandemic preparedness for all Filipinos.
              </Typography>
              <Button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click event
                  handleActionAgendaClick();
                }}
                variant="outlined"
                sx={{ mt: 2, color: '#1e3a8a' }}
              >
                See Details
              </Button>
            </Paper>
          </Grid>

          {/* Service 4 - Special Services Card */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              onClick={handleSpecialServicesClick}
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                borderRadius: '16px',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.4s, box-shadow 0.4s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Accessibility sx={{ fontSize: '3rem', color: '#1e3a8a', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                D. Other Programs and Special Services
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Other programs offer vital services like ambulance, lab, medico-legal, anti-smoking, reproductive health, population management, home visits, and health education.
              </Typography>
              <Button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click event
                  handleSpecialServicesClick();
                }}
                variant="outlined"
                sx={{ mt: 2, color: '#1e3a8a' }}
              >
                See Details
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <HealthGoalsModal open={openHealthGoal} onClose={() => setOpenHealthGoal(false)} />
      <HealthPopulationModal open={openHealthPopulation} onClose={() => setOpenHealthPopulation(false)} />
      <ActionAgendaModal open={openActionAgenda} onClose={() => setOpenActionAgenda(false)} />
      <SpecialServicesModal open={openHealthOthers} onClose={() => setOpenOthers(false)} />
    </Box>
  );
}