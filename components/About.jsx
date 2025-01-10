import { Box, Container, Typography, Paper } from '@mui/material';

export default function AboutSection() {
  return (
    // In your AboutSection component
      <Box id="about" sx={{ 
        background: 'linear-gradient(135deg, #D0F0EC, #E0E0E0, #C9F0E8)', // Use the 'background.paper' color
        overflow: 'hidden',
        scrollMarginTop: '80px', // Add this line
        pt: 2 // Add some padding top if needed
      }} mt={1}>
      {/* Header Section */}
      <Box sx={{ height: { xs: '60px', sm: '70px', md: '80px' } }}>
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Hero Section - Reduced height and adjusted spacing */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          py: { xs: 2, sm: 3, md: 4 },
          gap: { xs: 2, sm: 3, md: 4 },
          // Removed minHeight to allow content to be more compact
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem', lg: '2rem' },
              lineHeight: { xs: 1.4, md: 1.5 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Committed to Excellence in Rural Healthcare, Building a Healthier Tomorrow Together
          </Typography>
        </Box>

        {/* Image Section - Reduced height */}
        <Box
          sx={{
            width: { xs: '100%', md: '55%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/graphics/dr&nrs.svg"
            alt="Healthcare facility"
            sx={{
              width: {
                xs: '100%',
                sm: 'min(500px, 90%)',
                md: 'min(600px, 90%)',
                lg: 'min(700px, 90%)',
              },
              height: {
                xs: '200px',
                sm: '250px',
                md: '300px',
                lg: '350px',
              },
              objectFit: 'cover',
              borderRadius: { xs: '16px', sm: '20px', md: '24px' },
            }}
          />
        </Box>
      </Box>

      {/* Rural Health Unit Section - Removed margin top */}
      <Box mb={5}>
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: '16px', sm: '20px' },
              maxWidth: '1500px',
              mx: 'auto',
              mt: { xs: 2, sm: 3, md: 4 },
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, 
                lineHeight: 1.8 
              }}
            >
              The Rural Health Unit (RHU) of Gubat, Sorsogon, was established to address the healthcare needs of the community, particularly in the rural areas where access to larger hospitals and medical facilities is limited. Over the years, it has evolved from a small health center into a more comprehensive facility offering a wide range of essential health services. The RHU has played a key role in promoting public health, providing maternal and child healthcare, immunization programs, and disease prevention. Through its various health initiatives and partnerships with local government and national health programs, the RHU continues to be a cornerstone of Gubat healthcare system, ensuring that residents receive accessible and affordable medical care.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Mission and Vision Section with new header */}
      <Box sx={{ background: 'linear-gradient(135deg, #E6F7F5, #FFFFFF, #F0FDFA)',
                 color: 'black', py: { xs: 4, sm: 6, md: 8 } }}>
        <Container maxWidth="lg">
          {/* Added Mission & Vision Header */}
          <Typography
            component="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Mission & Vision
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, sm: 4 },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, sm: 4 },
                flex: 1,
                borderRadius: { xs: '16px', sm: '20px' },
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: 'black',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                Mission
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'black', 
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                }}
              >
                To provide accessible, comprehensive, and quality healthcare services to the community of Gubat through innovative medical practices, compassionate care, and strong partnerships with stakeholders.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, sm: 4 },
                flex: 1,
                borderRadius: { xs: '16px', sm: '20px' },
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: 'black',
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                Vision
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'black', 
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                }}
              >
                To be the leading rural health facility in the region, recognized for excellence in healthcare delivery, preventive medicine, and community wellness programs.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>


      <Container maxWidth="lg" sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Organizational Structure
          </Typography>
        <Box
          sx={{
            width: '100%',
            height: { xs: '400px', sm: '500px', md: '600px' },
            bgcolor: '#f8fafc',
            borderRadius: { xs: '16px', sm: '20px' },
            p: { xs: 2, sm: 3, md: 4 },
            overflowX: 'auto',
          }}
        >
          <Box
            component="img"
            src="/images/org-chart.png"
            alt="Organizational Chart"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}