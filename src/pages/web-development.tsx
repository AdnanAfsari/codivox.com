/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Hi from '../components/Main/Hi';
import Hero from '../components/WebDevelopment/Hero';
import Modernize from '../components/WebDevelopment/Modernize';
import Idea from '../components/WebDevelopment/Idea';
import Integration from '../components/WebDevelopment/Integration';
import Phase from '../components/WebDevelopment/Phase';
import SEO from '../components/seo';

const WebDevelopment: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title={'Web Development'} />
      <Hero />
      <Modernize />
      <Idea />
      <Integration />
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

export default WebDevelopment;
