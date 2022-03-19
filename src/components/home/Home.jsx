import React from 'react';

import { Link } from 'react-router-dom';

import {
  Typography,
  Container,
  Card,
  Button,
} from '@mui/material';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import moment from 'moment';

import futureBeginsHere from '../../assets/future-begins-here.png';
import qualityTests from '../../assets/quality-tests.jpg';
import excellence from '../../assets/excellence.jpeg';
import learningExcellence from '../../assets/excellence.png';
import community from '../../assets/community.png';
import leadership from '../../assets/leadership.png';

import styles from './Home.module.css';

function Home() {
  const slides = [
    { title: 'Future Begins Here', image: futureBeginsHere },
    { title: 'Quality Tests Easily Accessible', image: qualityTests },
    { title: 'Pride of Excellence', image: excellence },
  ];
  const results = [
    {
      title: 'English Test Class XII - Lesson 3',
      subject: 'English',
      date: new Date(),
      link: '/results/3',
    },
    {
      title: 'English Test Class XII - Lesson 3',
      subject: 'English',
      date: new Date(),
      link: '/results/3',
    },
    {
      title: 'English Test Class XII - Lesson 3',
      subject: 'English',
      date: new Date(),
      link: '/results/3',
    },
  ];
  const services = [
    { title: 'Learning Excellence', icon: learningExcellence, description: 'Education is a commitment to excellence in Teaching and Learning' },
    { title: 'Exemplary Community', icon: community, description: 'We have an exemplary learning community and champions of our success' },
    { title: 'Empowered Student', icon: leadership, description: 'We make sure every student is inspired, challenged and empowered' },
  ];
  return (
    <div className="home">
      <div className="w-full stack">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          infinite
          autoPlay
          animationDuration={1000}
          autoPlayInterval={5000}
          items={slides.map((item) => (
            <div key={item.title} className={styles['slide-root']} style={{ backgroundImage: `url(${item.image})` }}>
              <div className={styles['slide-content']}>
                <Typography variant="h4" className={styles['slide-title']}>
                  {item.title}
                </Typography>
              </div>
            </div>
          ))}
        />
        <Typography variant="h4" className="text-center my-7">Results</Typography>
        <Container maxWidth="xl" className="items-center justify-center gap-6 row">
          {
            results.map((item) => (
              <Card key={`${item.title}-${item.subject}`} className="px-4 stack" style={{ maxWidth: '230px' }}>
                <Typography variant="h6" className="w-full font-bold text-center">{item.title}</Typography>
                <div className="flex">
                  <span className="w-1/3"><Typography className="font-bold">Subject:</Typography></span>
                  <span className="flex-grow"><Typography>{item.subject}</Typography></span>
                </div>
                <div className="flex">
                  <span className="w-1/3"><Typography className="font-bold">Date:</Typography></span>
                  <span className="flex-grow"><Typography>{moment(item.date).format('MMM DD, YYYY')}</Typography></span>
                </div>
                <Link to={item.link}>
                  <Button variant="text" className="px-0">View Details</Button>
                </Link>
              </Card>
            ))
          }
        </Container>
        <Typography variant="h4" className="text-center my-7">Our Quality Services</Typography>
        <div className="w-full py-3 text-white bg-primary">
          <Container maxWidth="xl" className="items-center justify-center gap-9 row">
            {
              services.map((service) => (
                <div className="gap-2 stack" style={{ width: '250px' }}>
                  <img src={service.icon} alt={service.title} className="mx-auto w-14" />
                  <Typography variant="h5" className="font-bold text-center text-white">{service.title}</Typography>
                  <Typography className="text-center text-white">{service.description}</Typography>
                </div>
              ))
            }
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
