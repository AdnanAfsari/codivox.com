/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Hi from '../components/Main/Hi';
import Hero from '../components/Design/Hero';
import Brand from '../components/Design/Brand';
import WebDesign from '../components/Design/webDesign';
import AppDesign from '../components/Design/appDesign';
import Phase from '../components/Design/phase';

const DesignPage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Brand />
      <WebDesign />
      <AppDesign />
      <Phase />
      <div
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
          mb: '125px',
        }}
      >
        <Hi />
      </div>
    </React.Fragment>
  );
};

export default DesignPage;
