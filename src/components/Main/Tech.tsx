/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';

const Tech: React.FC = () => {
  const techTitle = 'Our Technology';
  const techSubtitle =
    'State-of-the-art communication tools to grow your business.';
  return (
    <Box sx={{ textAlign: 'center', my: '6rem' }}>
      <Heading sx={{ fontSize: '38px', width: 480, m: '0 auto' }}>
        {techTitle}
      </Heading>
      <p sx={{ opacity: '0.85', width: '500px', m: '0 auto' }}>
        {techSubtitle}
      </p>
    </Box>
  );
};

export default Tech;
