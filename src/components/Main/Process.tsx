/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';

const Process: React.FC = () => {
  const processTitle = 'How it begins';
  const processSubtitle =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  return (
    <Box sx={{ textAlign: 'center', my: '6rem' }}>
      <Heading sx={{ fontSize: '38px', width: 480, m: '0 auto' }}>
        {processTitle}
      </Heading>
      <p sx={{ opacity: '0.85', width: '500px', m: '0 auto' }}>
        {processSubtitle}
      </p>
    </Box>
  );
};

export default Process;
