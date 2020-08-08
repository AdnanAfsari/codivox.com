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
          gridTemplateColumns: ['1fr 2fr'],
          gridTtemplateRrows: ['1fr 1fr 1fr'],
          alignContent: 'center',
          // justifyItems: 'center',
          gap: '25px 0px',
          padding: '0px 80px',
        }}
      >
        <div sx={{ width: '55%' }}>
          <Heading
            as={'h4'}
            sx={{
              mb: '-1rem',
              fontWeight: 600,
              fontSize: 36,
              color: '#6670FD',
            }}
          >
            Client
          </Heading>
          <p sx={{ fontWeight: 600 }}>Introducing the client to go beyond</p>
        </div>

        <div
          sx={{
            justifySelf: 'end',
            '& > *': {
              mr: '-.5rem',
            },
          }}
        >
          <Js />
          <React1 />
          <Gatsby />
          <Nextjs />
          <React1 />
          <Plus />
        </div>

        <div sx={{ width: '60%' }}>
          <Heading
            as={'h4'}
            sx={{
              mb: '-1rem',
              fontWeight: 600,
              fontSize: 36,
              color: '#6670FD',
            }}
          >
            Backend
          </Heading>
          <p sx={{ fontWeight: 600 }}>Introducing the Backend to go beyond</p>
        </div>

        <div
          sx={{
            justifySelf: 'end',
            '& > *': {
              mr: '-.5rem',
            },
          }}
        >
          <Node />
          <Mondodb />
          <Post />
          <Graphql />
          <Aws />
          <Plus />
        </div>

        <div sx={{ width: '50%' }}>
          <Heading
            as={'h4'}
            sx={{
              mb: '-1rem',
              fontWeight: 600,
              fontSize: 36,
              color: '#6670FD',
            }}
          >
            API
          </Heading>
          <p sx={{ fontWeight: 600 }}>Introducing the API to go beyond</p>
        </div>

        <div
          sx={{
            justifySelf: 'end',
            '& > *': {
              mr: '-.5rem',
            },
          }}
        >
          <Map />
          <Stripe />
          <Wordpress />
          <Shopify />
          <Slack />
          <Twilio />
          <Sendgrid />
          <Plus />
        </div>
      </Box>
    </div>
  );
};

export default Tech;
