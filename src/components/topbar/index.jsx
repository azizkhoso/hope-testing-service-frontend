import React from 'react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Box,
  // Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/logo.png';

// Topbar should not be visible on following pages
const isVisibleOn = {
  '/': true,
  '/contact': true,
  '/about-us': true,
  '/demo-tests': true,
};

function Topbar() {
  const { pathname } = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    { title: 'About Us', link: '/about-us' },
    { title: 'Contact', link: '/contact' },
    { title: 'Demo Tests', link: '/demo-tests' },
  ];
  if (!isVisibleOn[pathname]) return <></>;
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="hts logo"
                className="w-9"
              />
              <Typography variant="h6" color="primary">Hope Testing Service</Typography>
            </div>
          </Link>
          <div className="flex-grow" />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography textAlign="center" color={page.title === pathname && 'primary'}>{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link to={page.link}>
                <Typography className="mx-3" color={page.title === pathname && 'primary'} variant="body1">
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar;
