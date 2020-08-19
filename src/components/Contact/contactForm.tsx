/** @jsx jsx */
import { Box, Flex, Heading, jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import Man from '../../images/man';
import Conplus from '../../images/conplus';
import Clock from '../../images/clock';

const ContactForm: React.FC = () => {
  return (
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <div></div>

      <div sx={{}}>
        <ul
          sx={{
            textAlign: 'center',
            '& > *': {
              listStyle: 'none',
              lineHeight: 0.5,
              mb: '50px',
            },
          }}
        >
          <li>
            <Clock />
            <h4>Fast response</h4>
            <p>We'll get back to you next working day.</p>
          </li>
          <li>
            <Conplus />
            <h4>Consulting included</h4>
            <p>We need to sit down and get to know details.</p>
          </li>
          <li>
            <Man />
            <h4>Personalized offer</h4>
            <p>
              We provide every offer from scratch to meet your specific needs.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
