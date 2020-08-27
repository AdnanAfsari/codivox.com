/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Hi from '../components/Main/Hi';
import Hero from '../components/AppDevelopment/Hero';
import ReactNativ from '../components/AppDevelopment/ReactNativ';
import WebDesign from '../components/Design/webDesign';
import AppDesign from '../components/Design/appDesign';
import Phase from '../components/Design/phase';

const AppDevelopment: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <ReactNativ />
      <WebDesign />
      <AppDesign />
      <Phase />
      <div
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Hi />
      </div>
    </React.Fragment>
  );
};

export default AppDevelopment;
