/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import Js from '../../images/js';
import Linkedin from '../../images/linkedin';
import Fb from '../../images/fb';
import Twitter from '../../images/twitter';
import Insta from '../../images/insta';
import Dots from '../../images/dots';

const Tech: React.FC = () => {
  const techTitle = 'Our Technology';
  const techSubtitle =
    'State-of-the-art communication tools to grow your business.';
  return (
    <React.Fragment>
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
        }}
      >
        <div>
          <h4>hahahhah</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolorem
            ratione
          </p>
        </div>

        <div
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Js />
          <Js />
          <Js />
          <Js />
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Tech;
