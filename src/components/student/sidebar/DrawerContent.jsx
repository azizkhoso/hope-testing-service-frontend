import React from 'react';
import PropTypes from 'prop-types';

import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  // Typography,
  IconButton,
  ListItem,
} from '@mui/material';

import {
  AccountCircle,
  Dashboard,
  Announcement,
  Close,
  Person,
  Quiz,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

export default function DrawerContent({ handleClose }) {
  const navigate = useNavigate();
  const listItems = [
    {
      title: 'Dashboard',
      link: '/student/dashboard',
      icon: <Dashboard />,
    },
    {
      title: 'Announcements',
      link: '/student/announcements',
      icon: <Announcement />,
    },
    {
      title: 'Exams',
      link: '/student/exams',
      icon: <Quiz />,
    },
    {
      title: 'Profile',
      link: '/student/profile',
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
            <ListItemIcon><AccountCircle className="w-9 h-9" /></ListItemIcon>
            <ListItemText primary="User Name" primaryTypographyProps={{ className: 'font-extrabold text-2xl' }} />
          </ListItemIcon>
        </ListItem>
        <Divider orientation="horizontal" />
        {
          listItems.map((item) => (
            <ListItemButton onClick={() => navigate(item.link)}>
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
