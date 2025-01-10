
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
  ChildCare as EarlyChildhoodIcon,
  School as AdolescentIcon,
  ElderlyWoman as GeriatricIcon,
  Accessible as DisabilityIcon
} from '@mui/icons-material';

const style = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '90%',
    height: '90vh',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    px: 4,
    py: 3,
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    p: 4,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Default two columns
    gap: 3,
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr', // On small screens, single column
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    p: 3,
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  icon: {
    fontSize: 40,
    color: 'primary.main',
    mr: 2,
  },
  description: {
    mt: 2,
    color: 'text.secondary',
    flex: 1,
  }
};

const HealthPopulationModal = ({ open, onClose }) => {
  const programs = [
    {
      title: "Early Childhood Care Development Program",
      icon: <EarlyChildhoodIcon sx={style.icon} />,
      description: "Comprehensive care and development services for children in their early years, focusing on health, nutrition, and early learning."
    },
    {
      title: "Adolescent Health and Development Program",
      icon: <AdolescentIcon sx={style.icon} />,
      description: "Support and services tailored to address the unique health needs and challenges of adolescents."
    },
    {
      title: "Comprehensive Geriatric Care Program",
      icon: <GeriatricIcon sx={style.icon} />,
      description: "Specialized healthcare services and support systems designed to meet the complex health needs of older adults."
    },
    {
      title: "Health and Wellness Program for Persons with Disabilities",
      icon: <DisabilityIcon sx={style.icon} />,
      description: "Inclusive healthcare services and support systems ensuring accessible and appropriate care for persons with disabilities."
    }
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="population-health-modal-title"
    >
      <Box sx={style.modal}>
        <Box sx={style.header}>
          <Typography variant="h5" component="h2" id="population-health-modal-title" fontWeight="500">
            Health of Population Programs
          </Typography>
          <IconButton
            onClick={onClose}
            size="medium"
            sx={{
              color: 'grey.500',
              '&:hover': { color: 'grey.700', bgcolor: 'grey.100' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={style.content}>
          {programs.map((program, index) => (
            <Paper key={index} sx={style.card} elevation={0}>
              <Box sx={style.iconWrapper}>
                {program.icon}
                <Typography variant="h6" fontWeight="500">
                  {index + 1}. {program.title}
                </Typography>
              </Box>
              <Typography variant="body1" sx={style.description}>
                {program.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default HealthPopulationModal;