import React from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  IconButton,
  ListItem,
} from '@mui/material';

import {
  Dashboard,
  Announcement,
  Close,
  Person,
  Quiz,
} from '@mui/icons-material';

import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../../../assets/logo.png';

export default function DrawerContent({ handleClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const listItems = [
    {
      title: 'Dashboard',
      link: '/teacher/dashboard',
      icon: <Dashboard />,
    },
    {
      title: 'Announcements',
      link: '/teacher/announcements',
      icon: <Announcement />,
    },
    {
      title: 'Exams',
      link: '/teacher/exams',
      icon: <Quiz />,
    },
    {
      title: 'Profile',
      link: '/teacher/profile',
      icon: <Person />,
    },
  ];
  return (
    <Stack sx={{ width: '220px' }}>
      <span className="flex justify-end md:hidden">
        <IconButton onClick={() => handleClose()}>
          <Close />
        </IconButton>
      </span>
      <List sx={{ py: 0 }}>
        <ListItem sx={{ minHeight: '40px' }}>
          <ListItemIcon className="flex items-center">
            <ListItemIcon><img src={logo} alt="hts" className="w-9 h-9" /></ListItemIcon>
            <ListItemText primary="HTS" primaryTypographyProps={{ className: 'font-extrabold text-2xl' }} />
          </ListItemIcon>
        </ListItem>
        <Divider orientation="horizontal" />
        {
          listItems.map((item) => (
            <ListItemButton key={item.title} className={`${location.pathname === item.link && 'bg-blue-100'}`} onClick={() => navigate(item.link)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          ))
        }
      </List>
    </Stack>
  );
}

DrawerContent.defaultProps = {
  handleClose: () => {},
};

DrawerContent.propTypes = {
  handleClose: PropTypes.func,
};
