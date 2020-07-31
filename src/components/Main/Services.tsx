/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import React from 'react';

const Services: React.FC = () => {
  const servicesTitle = 'We provide the best in the Market';
  const servicesSubtitle =
    'Here are some of the many ways that we can help you out.';
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Heading sx={{ fontSize: '38px', width: 480, m: '0 auto' }}>
        {servicesTitle}
      </Heading>
      <p sx={{ opacity: '0.85' }}>{servicesSubtitle}</p>
    </Box>
  );
};

export default Services;
