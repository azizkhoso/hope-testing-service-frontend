import React from 'react';

import {
  Typography,
  Container,
} from '@mui/material';

import logo from '../../assets/logo.png';

import styles from './AboutUs.module.css';

function About() {
  return (
    <div className="m-0 page-content b-0">
      <Container disableGutters maxWidth="false" className={styles.header}>
        <Typography
          variant="h2"
          className={styles['header-heading']}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          className={styles['header-paragraph']}
        >
          We provide online tests in a unique way
        </Typography>
      </Container>
      <Container disableGutters maxWidth="md" className={styles['content-container']}>
        <img src={logo} alt="hts logo" className="w-36" />
        <Typography variant="body2" className={styles.content}>
          We are a non-profit organization that administrates self-assessment
          tests for youth, to provide aspirants with a realistic, exact simulation
          environment, to assess, judge and analyze their capabilities before
          taking the real exams.
        </Typography>
      </Container>
      <Container disableGutters maxWidth="md" className={styles['content-container']}>
        <Typography variant="h2" className={styles.heading}>
          Vision
        </Typography>
        <Typography variant="body2" className={styles.content}>
          Hope Testing Service-HTS inject high self esteem that is base for the
          building of success. Our strong Believe is that &quot;Desire become dream
          and soon be achieved when supported by Direction, Determination,
          Discipline & Deadline&quot;
        </Typography>
      </Container>
      <Container disableGutters maxWidth="md" className={styles['content-container']}>
        <Typography variant="h2" className={styles.heading}>
          Mission
        </Typography>
        <Typography variant="body2" className={styles.content}>
          In this competitive era HTS mission is to endow our students, aspirants with
          the coping skills and abilities withstanding the requirements of present—era
          institutes & make them stand ahead of the rest of their counterparts. To proceed
          with our objective, We arrange highly competent tests in a disciplined environment
          for students to grasp their potential, & farther exceed it.
        </Typography>
      </Container>
    </div>
  );
}

export default About;
