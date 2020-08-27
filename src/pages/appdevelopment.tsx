/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Hi from '../components/Main/Hi';
import Hero from '../components/AppDevelopment/Hero';
import ReactNativ from '../components/AppDevelopment/ReactNativ';
import UserExperiance from '../components/AppDevelopment/UserExperiance';
import TrustedPartner from '../components/AppDevelopment/TrustedPartner';
import Phase from '../components/AppDevelopment/Phase';

const AppDevelopment: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <ReactNativ />
      <UserExperiance />
      <TrustedPartner />
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
