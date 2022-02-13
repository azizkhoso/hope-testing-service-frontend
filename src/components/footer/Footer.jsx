import React from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  Container,
  Typography,
} from '@mui/material';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Container disableGutters maxWidth="false" className={styles.container}>
      <Container maxWidth="xl" className="row">
        <div className="stack">
          <Link to="/">
            <Typography variant="h6">Hope Testing Serice</Typography>
          </Link>
          <Link to="/about-us">
            <Typography variant="h6">About us</Typography>
          </Link>
          <Link to="/faq">
            <Typography variant="h6">FAQ</Typography>
          </Link>
          <Link to="/contact">
            <Typography variant="h6">Contact</Typography>
          </Link>
        </div>
      </Container>
    </Container>
  );
}
