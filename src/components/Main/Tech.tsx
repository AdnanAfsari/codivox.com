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
  const techTitle = 'Solid, battle-tested tech stack';
  const techSubtitle = 'we are always up-to-date with newest trends';
  return (
    <div
      style={{
        maxWidth: '1110px',
        margin: '0 auto',
        padding: '0 1.0875rem',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mt: ['4rem', '4rem', '6rem'],
          mb: ['2rem', '2rem', '4rem'],
        }}
      >
        <Heading
          sx={{ fontSize: ['26px', '38px'], m: '0 auto', color: `#000053` }}
        >
          {techTitle}
        </Heading>
        <p
          sx={{
            opacity: '0.85',
            m: '0 auto',
            textTransform: 'uppercase',
            color: ' #5954ff',
            letterSpacing: '2.5px',
          }}
        >
          {techSubtitle}
        </p>
      </Box>

      <Box
        sx={{
          display: ['flex', 'flex', 'grid'],
          flexDirection: ['column', 'column', 'row'],
          alignItems: ['center'],
          gridTemplateColumns: ['1fr', '1fr', '3fr 5fr'],
          gridTtemplateRrows: ['1fr 1fr 1fr'],
          alignContent: 'center',
          // justifyItems: 'center',
          gap: '25px 0px',
          padding: ['0px 0px', '0px 0px', '0px 80px'],
        }}
      >
        <div
          sx={{
            textAlign: ['center', 'center', 'left'],
          }}
        >
          <Heading
            as={'h4'}
            sx={{
              mb: '-1rem',
              fontWeight: 600,
              fontSize: 36,
              color: '#6670FD',
            }}
          >
            Frontend
          </Heading>
          <p
            sx={{ fontWeight: 600, opacity: 0.7, maxWidth: [400, 400, '100%'] }}
          >
            Frontend tools includes Vanilla Javascript, ReactJS, GatsbyJS,
            NextJS and React Native{' '}
          </p>
        </div>

        <div
          sx={{
            justifySelf: ['center', 'center', 'end'],
            mt: ['-25px', '-25px', null],
            mb: ['30px', '30px', null],
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

        <div
          sx={{
            textAlign: ['center', 'center', 'left'],
          }}
        >
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
          <p
            sx={{ fontWeight: 600, opacity: 0.7, maxWidth: [400, 400, '100%'] }}
          >
            Backend tools includes NodeJS, MongoDB, PostgreSQL, GraphQL, AWS
            (Amplify & others)
          </p>
        </div>

        <div
          sx={{
            justifySelf: ['center', 'center', 'end'],
            mt: ['-25px', '-25px', null],
            mb: ['30px', '30px', null],
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

        <div
          sx={{
            textAlign: ['center', 'center', 'left'],
          }}
        >
          <Heading
            as={'h4'}
            sx={{
              mb: '-1rem',
              fontWeight: 600,
              fontSize: 36,
              color: '#6670FD',
            }}
          >
            API Integration
          </Heading>
          <p
            sx={{ fontWeight: 600, opacity: 0.7, maxWidth: [400, 400, '100%'] }}
          >
            Integrate API's into your systems such as Stripe, Google Maps,
            Slack, Twilio, Sendgrid and others
          </p>
        </div>

        <div
          sx={{
            justifySelf: ['center', 'center', 'end'],
            mt: ['-25px', '-25px', null],
            mb: ['30px', '30px', null],
            '& > *': {
              mr: '-.5rem',
            },
          }}
        >
          <Map />
          <Stripe />
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
