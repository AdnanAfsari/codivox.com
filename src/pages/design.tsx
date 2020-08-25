import React from 'react';
import Hi from '../components/Main/Hi';
import Hero from '../components/Design/Hero';
import Brand from '../components/Design/Brand';
import WebDesign from '../components/Design/webDesign';
import AppDesign from '../components/Design/appDesign';

const DesignPage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Brand />
      <WebDesign />
      <AppDesign />
      <Hi />
    </React.Fragment>
  );
};

export default DesignPage;
