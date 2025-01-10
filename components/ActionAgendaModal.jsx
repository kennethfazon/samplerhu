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
  Paper,
  Divider
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Close as CloseIcon,
  Healing,
  MedicalServices,
  Computer,
  Warning,
  HealthAndSafety,
  Psychology,
  People,
  Coronavirus
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
    overflowY: 'auto',
    flex: 1,
    p: 4,
  },
  agendaItem: {
    mb: 2,
    overflow: 'hidden',
    border: '1px solid',
    borderColor: 'divider',
    '&:hover': {
      borderColor: 'primary.main',
      bgcolor: 'background.paper',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease-in-out',
    },
  },
  agendaHeader: {
    p: 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: 'grey.50',
    },
  },
  agendaIcon: {
    mr: 2,
    color: 'primary.main',
  },
  subPrograms: {
    bgcolor: 'grey.50',
    p: 2,
  },
  programItem: {
    py: 1,
    px: 2,
    '&:hover': {
      bgcolor: 'background.paper',
      borderRadius: 1,
    },
  },
};

const romanize = (num) => {
  const romanMap = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];

  let roman = '';
  for (const [symbol, value] of romanMap) {
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  }
  return roman;
};

const ActionAgendaModal = ({ open, onClose }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const agendas = [
    {
      title: "Bawat Pilipino Ramdam ang Kalusugan",
      icon: <Healing />,
      programs: [
        "LGU Health Facility Development Program",
        "Health Care Provider Network Linkages",
        "Clients Registration to Primary Care Facility",
        "Medical Assistance for Indigent and Financially Incapacitated Patients (MAIFIP) Program"
      ]
    },
    {
      title: "Ligtas, dekalidad, at mapagkalingang serbisyo",
      icon: <MedicalServices />,
      programs: [
        "Family Planning Program",
        "National Safe Motherhood Program",
        "Child Care Program",
        "Newborn Care Program",
        "Newborn Hearing Screening Program",
        "Integrated Management of Childhood Program",
        "Dental Health Care Program",
        "Filariasis Control Program",
        "Schistosomiasis Control Program",
        "Soil Transmitted Helminthiasis Control Program",
        "HIV-AIDS/STI Control Program",
        "National Tuberculosis Program",
        "Leprosy Control Program",
        "Rabies Prevention and Control Program"
      ]
    },
    {
      title: "Teknolohiya para sa mabilis na serbisyong pangkalusugan",
      icon: <Computer />,
      programs: ["Telemedicine Consultation"]
    },
    {
      title: "Handa sa Krisis",
      icon: <Warning />,
      programs: [
        "Occupational Safety and Health Program",
        "Violence and Injury Prevention Program",
        "Disasters and Emergencies",
        "Climate"
      ]
    },
    {
      title: "Pag-iwas sa Sakit",
      icon: <HealthAndSafety />,
      programs: [
        "National Integrated Cancer Prevention and Control Program",
        "Cardiovascular Disease Prevention and Control",
        "Diabetes Mellitus Prevention and Control Program",
        "Blindness Prevention Program",
        "Immunization of Senior Citizens",
        "School-Based Immunization Program",
        "Expanded Program on Immunization",
        "Chronic Kidney Disease Prevention and Control Program",
        "Aedes-Borne Viral Disease Prevention and Control Program",
        "Dengue Prevention and Control Program",
        "Environmental Health and Sanitation Program",
        "Health Productive Aging Program"
      ]
    },
    {
      title: "Ginhawa ng isip at damdamin",
      icon: <Psychology />,
      programs: [
        "Mental Health Gap Action Program (mhGAP)",
        "Medicine Access Program for Mental Health (MAP-MH)",
        "Mental, Neurological, and Substance Use disorder Program",
        "Dangerous Drug Abuse Prevention and Treatment Program"
      ]
    },
    {
      title: "Kapakanan at karapatan ng health worker",
      icon: <People />,
      programs: ["HRH Management and Development Program"]
    },
    {
      title: "Proteksyon sa anumang pandemiya",
      icon: <Coronavirus />,
      programs: ["Emerging and Re-emerging Infectious Diseases Program"]
    }
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="action-agenda-modal-title"
    >
      <Box sx={style.modal}>
        <Box sx={style.header}>
          <Typography variant="h5" component="h2" id="action-agenda-modal-title" fontWeight="500">
            8-Point Action Agenda Programs
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
          {agendas.map((agenda, index) => (
            <Paper key={index} sx={style.agendaItem} elevation={0}>
              <Box
                sx={style.agendaHeader}
                onClick={() => handleExpand(index)}
              >
                <Box sx={style.agendaIcon}>
                  {agenda.icon}
                </Box>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight="500">
                      Action Agenda {index + 1}: {agenda.title}
                    </Typography>
                  }
                />
                <IconButton
                  edge="end"
                  sx={{
                    transform: expandedId === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
              <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                <Box sx={style.subPrograms}>
                  <List disablePadding>
                    {agenda.programs.map((program, pIndex) => (
                      <ListItem key={pIndex} sx={style.programItem}>
                        <Typography variant="body2" color="text.secondary">
                          {romanize(pIndex + 1)}. {program}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Collapse>
            </Paper>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ActionAgendaModal;