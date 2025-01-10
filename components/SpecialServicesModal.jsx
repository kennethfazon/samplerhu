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
  LocalHospital as AmbulanceIcon,
  Science as LabIcon,
  Gavel as LegalIcon,
  SmokeFree as NoSmokingIcon,
  Favorite as HealthIcon,
  People as PopulationIcon,
  Home as HomeIcon,
  LocalHospital as CaravanIcon,
  School as EducationIcon
} from '@mui/icons-material';

const style = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90vh',
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
    overflowY: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 3,
  },
  serviceCard: {
    height: '100%',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.2s ease-in-out',
    border: '1px solid',
    borderColor: 'divider',

  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  numberBadge: {
    minWidth: 28,
    height: 28,
    borderRadius: '50%',
    bgcolor: 'primary.main',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mr: 2,
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  icon: {
    color: 'primary.main',
    fontSize: 24,
    mr: 2,
  },
  description: {
    color: 'text.secondary',
    mt: 2,
    fontSize: '0.875rem',
  }
};

const SpecialServicesModal = ({ open, onClose }) => {
  const services = [
    {
      title: "Ambulance Conduction Services",
      icon: <AmbulanceIcon />,
      description: "24/7 emergency medical transportation services for critical care and patient transfer."
    },
    {
      title: "Laboratory Services",
      icon: <LabIcon />,
      description: "Comprehensive diagnostic testing and laboratory examination facilities."
    },
    {
      title: "Medico-Legal Services",
      icon: <LegalIcon />,
      description: "Professional medical examination and documentation for legal purposes."
    },
    {
      title: "Anti-Smoking Program",
      icon: <NoSmokingIcon />,
      description: "Support and resources for smoking cessation and prevention."
    },
    {
      title: "Reproductive Health and Wellness Center",
      icon: <HealthIcon />,
      description: "Comprehensive reproductive health services and family planning support."
    },
    {
      title: "Population Management Program",
      icon: <PopulationIcon />,
      description: "Strategic planning and implementation of population health initiatives."
    },
    {
      title: "Home Visitation",
      icon: <HomeIcon />,
      description: "Professional healthcare services delivered directly to patients' homes."
    },
    {
      title: "Kunsulta Caravan",
      icon: <CaravanIcon />,
      description: "Mobile health consultations and services reaching remote communities."
    },
    {
      title: "Health Education and Promotion Services",
      icon: <EducationIcon />,
      description: "Community education programs promoting health awareness and prevention."
    }
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="special-services-modal-title"
    >
      <Box sx={style.modal}>
        <Box sx={style.header}>
          <Typography variant="h5" component="h2" id="special-services-modal-title" fontWeight="500">
            Other Programs and Special Services
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
          {services.map((service, index) => (
            <Paper key={index} sx={style.serviceCard} elevation={0}>
              <Box sx={style.iconWrapper}>
                <Box sx={style.numberBadge}>
                  {(index + 1).toString().padStart(2, '0')}
                </Box>
                {React.cloneElement(service.icon, { sx: style.icon })}
                <Typography variant="subtitle1" fontWeight="500">
                  {service.title}
                </Typography>
              </Box>
              <Typography sx={style.description}>
                {service.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default SpecialServicesModal;