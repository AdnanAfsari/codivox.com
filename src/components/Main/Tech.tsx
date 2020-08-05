/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import Js from '../../images/js';
import React1 from '../../images/react';
import Nextjs from '../../images/nextjs';
import Plus from '../../images/plus';
import Node from '../../images/node';
import Mondodb from '../../images/mongoDB';
import Post from '../../images/post';
import Graphql from '../../images/graphQL';
import Aws from '../../images/aws';
import Map from '../../images/map';
import Stripe from '../../images/stripe';
import Wordpress from '../../images/wordpress';
import Shopify from '../../images/shopify';
import Slack from '../../images/slack';
import Twilio from '../../images/twilio';
import Sendgrid from '../../images/sendgrid';
import Gatsby from '../../images/gatsby';

const Tech: React.FC = () => {
  const techTitle = 'Our Technology';
  const techSubtitle =
    'State-of-the-art communication tools to grow your business.';
  return (
    <div>
      <Box sx={{ textAlign: 'center', my: '6rem' }}>
        <Heading sx={{ fontSize: '38px', width: 480, m: '0 auto' }}>
          {techTitle}
        </Heading>
        <p sx={{ opacity: '0.85', width: '500px', m: '0 auto' }}>
          {techSubtitle}
        </p>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr 1.5fr'],
          gridTtemplateRrows: ['1fr 1fr 1fr'],
          alignContent: 'center',
          justifyItems: 'center',
        }}
      >
        <div sx={{ width: '35%' }}>
          <Heading as={'h4'} sx={{ mb: '1rem' }}>
            Client
          </Heading>
          <p>Introducing the client to go beyond</p>
        </div>

        <div sx={{ ml: '60px' }}>
          <Js />
          <React1 />
          <Gatsby />
          <Nextjs />
          <React1 />
          <Plus />
        </div>

        <div sx={{ width: '35%' }}>
          <Heading as={'h4'} sx={{ mb: '1rem' }}>
            Client
          </Heading>
          <p>Introducing the client to go beyond</p>
        </div>

        <div sx={{ ml: '60px' }}>
          <Node />
          <Mondodb />
          <Post />
          <Graphql />
          <Aws />
          <Plus />
        </div>
      </Box>
    </div>
  );
};

export default Tech;
