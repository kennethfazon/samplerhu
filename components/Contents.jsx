import { Box, Typography, Container } from '@mui/material';

export default function ContentPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 2, sm: 3 }, // Reduced bottom padding
        pb: 0, // Remove bottom padding completely
        mb: 5, // Remove bottom margin completely
        
      }}
    >
      {/* Main Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 6 }, // Increased gap for better spacing
          width: '100%',
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            flex: '1 1 50%', // Take up half the space on desktop
            width: '100%',
            maxWidth: { md: '700px' }, // Prevent text from stretching too wide
            pl: { xs: 2, sm: 3, md: 4 }, // Add padding-left for spacing on the left side
          }}
        >

          {/* Founder Logos */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Center the logos horizontally
              gap: 4,
              mb: 4,
              mx: { xs: 'auto', md: 0 }, // Center on mobile, align left on desktop
            }}
          >
            {/* Founder logos with optimized sizing */}
            {['doh.svg', 'lgu.svg', 'grhu.svg'].map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={`graphics/${logo}`}
                alt={`Founder ${index + 1}`}
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  borderRadius: '50%',
                  boxShadow: 2,
                }}
              />
            ))}
          </Box>

          {/* Title and Description */}
          <Typography
            variant="h3" // Increased from h4 for better visibility
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Welcome to Gubat Rural Health Unit
          </Typography>
          
          <Box sx={{ maxWidth: '100%' }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
                color: 'text.secondary',
              }}
            >
              We are committed to providing accessible, affordable, and quality healthcare services for you and your family.
              With state-of-the-art facilities and expert professionals, we ensure that your health is in trusted hands.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
                color: 'text.secondary',
              }}
            >
              From routine checkups to specialized care, we're here to guide you every step of the way. Let us help you live a healthier, happier life.
            </Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: '1 1 50%', // Take up half the space on desktop
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            component="img"
            src="graphics/drgphic.svg"
            alt="Healthcare services"
            sx={{
              width: '100%',
              maxWidth: '600px', // Increased from 500px
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
