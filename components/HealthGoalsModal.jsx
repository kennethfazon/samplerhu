
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Paper
} from '@mui/material';
import {
  Restaurant as NutritionIcon,
  ChildCare as BabyIcon,
  Medication as SupplementIcon,
  Favorite as HeartIcon,
  LocalHospital as HospitalIcon,
  DirectionsRun as LifestyleIcon,
  Coronavirus as VirusIcon,
  MedicalServices as TBIcon,
  BugReport as DiseaseIcon,
  WaterDrop as WaterIcon,
  ExpandMore as ExpandMoreIcon,
  Close as CloseIcon
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
    bgcolor: 'background.default',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    overflowY: 'auto',
    flex: 1,
    p: 3,
  },
  programCard: {
    mb: 2,
    transition: 'all 0.2s ease-in-out',
  },
  programHeader: {
    display: 'flex',
    alignItems: 'center',
    p: 2,
    cursor: 'pointer',
  },
  programHeaderHoverable: {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      bgcolor: 'action.hover',
      boxShadow: 2,
    },
  },
  icon: {
    mr: 2,
    color: 'primary.main',
    fontSize: '1.5rem',
  },
  subList: {
    bgcolor: 'action.hover',
    py: 1,
  }
};

const HealthGoalsModal = ({ open, onClose }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const programs = [
    { 
      icon: <NutritionIcon />, 
      title: "Nutrition Program"
    },
    { 
      icon: <BabyIcon />, 
      title: "Infant and Young Child Feeding Program (IYCF)"
    },
    { 
      icon: <SupplementIcon />, 
      title: "Micronutrient Supplementation Program"
    },
    { 
      icon: <HeartIcon />, 
      title: "Maternal, Newborn, and Child Health Program"
    },
    { 
      icon: <HospitalIcon />, 
      title: "e-Kunsulta Package Implementation Program",
      subItems: [
        "Profiling and registration to a Primary Care Provider",
        "Provision of 1st encounter and 2nd encounter health services"
      ]
    },
    { 
      icon: <LifestyleIcon />, 
      title: "Lifestyle related Diseases and Risk Factors Program"
    },
    { 
      icon: <VirusIcon />, 
      title: "STI/HIV/AIDS Prevention and Control Program"
    },
    { 
      icon: <TBIcon />, 
      title: "National Tuberculosis Control Program"
    },
    { 
      icon: <DiseaseIcon />, 
      title: "Neglected Tropical Disease Program"
    },
    { 
      icon: <WaterIcon />, 
      title: "Food-borne and Water-borne Disease Prevention & Control Program"
    }
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="health-goals-modal-title"
    >
      <Box sx={style.modal}>
        <Box sx={style.header}>
          <Typography variant="h5" component="h2" id="health-goals-modal-title" fontWeight="500">
            Health-Related Sustainable Goals
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
            <Paper
              key={index}
              elevation={0}
              sx={style.programCard}
            >
              <Box
                sx={[
                  style.programHeader,
                  program.subItems && style.programHeaderHoverable // Apply hover style only for items with subItems
                ]}
                onClick={() => program.subItems && handleExpand(index)}
              >
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: 24, mr: 1 }}>
                  {(index + 1).toString().padStart(2, '0')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  {React.cloneElement(program.icon, { sx: style.icon })}
                  <Typography variant="subtitle1" fontWeight="500">
                    {program.title}
                  </Typography>
                </Box>
                {program.subItems && (
                  <IconButton
                    edge="end"
                    size="small"
                    sx={{
                      transform: expandedId === index ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                )}
              </Box>
              {program.subItems && (
                <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                  <List dense sx={style.subList}>
                    {program.subItems.map((item, subIndex) => (
                      <ListItem key={subIndex}>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            variant: 'body2',
                            color: 'text.secondary',
                            sx: { pl: 7 }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Paper>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default HealthGoalsModal;